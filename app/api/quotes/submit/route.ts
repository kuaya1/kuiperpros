import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { sendEmail } from "@/lib/email"
import { uploadToS3 } from "@/lib/s3"
import { findAvailableTechnicians } from "@/lib/matching-engine"
import { z } from "zod"

const QuoteRequestSchema = z.object({
  serviceAddress: z.object({
    street: z.string().min(1),
    city: z.string().min(1),
    state: z.string().length(2),
    zipCode: z.string().regex(/^\d{5}(-\d{4})?$/),
    latitude: z.number().optional(),
    longitude: z.number().optional()
  }),
  installationDetails: z.object({
    propertyType: z.enum(["residential", "commercial"]),
    stories: z.number().min(1).max(10).optional(),
    roofType: z.enum(["shingle", "tile", "metal", "flat", "other"]).optional(),
    kitStatus: z.enum(["have_kit", "need_kit", "not_sure"])
  }),
  contactInfo: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    phone: z.string().regex(/^[\d\s\-\(\)]+$/)
  }),
  specialRequests: z.string().optional(),
  photos: z.array(z.string()).optional()
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate request data
    const validatedData = QuoteRequestSchema.parse(body)
    
    // Upload photos to S3 if provided
    let photoUrls: string[] = []
    if (validatedData.photos && validatedData.photos.length > 0) {
      photoUrls = await Promise.all(
        validatedData.photos.map(async (photo) => {
          const buffer = Buffer.from(photo.split(',')[1], 'base64')
          return await uploadToS3(buffer, `quotes/${Date.now()}.jpg`)
        })
      )
    }
    
    // Check if customer exists
    let customer = await prisma.customer.findFirst({
      where: { 
        user: { 
          email: validatedData.contactInfo.email 
        } 
      }
    })
    
    // Create quote request
    const quoteRequest = await prisma.quoteRequest.create({
      data: {
        customerId: customer?.id,
        serviceStreetAddress: validatedData.serviceAddress.street,
        serviceCity: validatedData.serviceAddress.city,
        serviceState: validatedData.serviceAddress.state,
        serviceZipCode: validatedData.serviceAddress.zipCode,
        serviceLatitude: validatedData.serviceAddress.latitude,
        serviceLongitude: validatedData.serviceAddress.longitude,
        propertyType: validatedData.installationDetails.propertyType,
        stories: validatedData.installationDetails.stories,
        roofType: validatedData.installationDetails.roofType,
        kitStatus: validatedData.installationDetails.kitStatus,
        contactFirstName: validatedData.contactInfo.firstName,
        contactLastName: validatedData.contactInfo.lastName,
        contactEmail: validatedData.contactInfo.email,
        contactPhone: validatedData.contactInfo.phone,
        specialRequests: validatedData.specialRequests,
        photoUrls: photoUrls,
        estimatedPrice: calculateEstimatedPrice(validatedData.installationDetails)
      }
    })
    
    // Find available technicians in the area
    const availableTechnicians = await findAvailableTechnicians(
      validatedData.serviceAddress.zipCode,
      validatedData.serviceAddress.latitude,
      validatedData.serviceAddress.longitude
    )
    
    // Create a job posting
    const job = await prisma.job.create({
      data: {
        quoteRequestId: quoteRequest.id,
        customerId: customer?.id,
        status: "available",
        customerPrice: calculateEstimatedPrice(validatedData.installationDetails)
      }
    })
    
    // Send confirmation email to customer
    await sendEmail({
      to: validatedData.contactInfo.email,
      subject: "Quote Request Received - KuiperPros",
      template: "quote-confirmation",
      data: {
        firstName: validatedData.contactInfo.firstName,
        quoteId: quoteRequest.id,
        address: `${validatedData.serviceAddress.street}, ${validatedData.serviceAddress.city}, ${validatedData.serviceAddress.state} ${validatedData.serviceAddress.zipCode}`,
        estimatedPrice: quoteRequest.estimatedPrice
      }
    })
    
    // Notify available technicians
    for (const technician of availableTechnicians) {
      await sendEmail({
        to: technician.user.email,
        subject: "New Installation Opportunity - KuiperPros",
        template: "new-job-notification",
        data: {
          firstName: technician.firstName,
          jobId: job.id,
          location: `${validatedData.serviceAddress.city}, ${validatedData.serviceAddress.state}`,
          estimatedPayout: calculateTechnicianPayout(quoteRequest.estimatedPrice)
        }
      })
    }
    
    // Log the notification
    await prisma.emailNotification.createMany({
      data: [
        {
          recipientEmail: validatedData.contactInfo.email,
          recipientType: "customer",
          subject: "Quote Request Received - KuiperPros",
          templateName: "quote-confirmation",
          metadata: { quoteRequestId: quoteRequest.id }
        },
        ...availableTechnicians.map(tech => ({
          recipientEmail: tech.user.email,
          recipientType: "technician" as const,
          subject: "New Installation Opportunity - KuiperPros",
          templateName: "new-job-notification",
          metadata: { jobId: job.id, technicianId: tech.id }
        }))
      ]
    })
    
    return NextResponse.json({
      success: true,
      quoteRequestId: quoteRequest.id,
      estimatedPrice: quoteRequest.estimatedPrice,
      techniciansNotified: availableTechnicians.length
    })
    
  } catch (error) {
    console.error("Quote submission error:", error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: "Failed to submit quote request" },
      { status: 500 }
    )
  }
}

function calculateEstimatedPrice(details: any): number {
  let basePrice = 399 // Base installation price
  
  if (details.propertyType === "commercial") {
    basePrice += 200
  }
  
  if (details.stories && details.stories > 1) {
    basePrice += (details.stories - 1) * 50
  }
  
  if (details.roofType === "tile" || details.roofType === "metal") {
    basePrice += 100
  }
  
  if (details.kitStatus === "need_kit") {
    basePrice += 599 // Kit price
  }
  
  return basePrice
}

function calculateTechnicianPayout(customerPrice: any): number {
  return Math.floor(Number(customerPrice) * 0.7) // 70% payout to technician
}