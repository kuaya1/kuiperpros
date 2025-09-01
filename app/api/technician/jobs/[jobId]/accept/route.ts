import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { sendEmail } from "@/lib/email"

export async function POST(
  request: NextRequest,
  { params }: { params: { jobId: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== "technician") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const technician = await prisma.technician.findUnique({
      where: { userId: session.user.id }
    })
    
    if (!technician || technician.status !== "approved") {
      return NextResponse.json({ error: "Technician not approved" }, { status: 403 })
    }
    
    // Start a transaction
    const result = await prisma.$transaction(async (tx: any) => {
      // Check if job is still available
      const job = await tx.job.findUnique({
        where: { id: params.jobId },
        include: {
          quoteRequest: true
        }
      })
      
      if (!job || job.status !== "available") {
        throw new Error("Job is no longer available")
      }
      
      // Assign job to technician
      const updatedJob = await tx.job.update({
        where: { id: params.jobId },
        data: {
          technicianId: technician.id,
          status: "assigned",
          assignedAt: new Date(),
          technicianPayout: calculateTechnicianPayout(job.customerPrice)
        }
      })
      
      // Update quote request
      await tx.quoteRequest.update({
        where: { id: job.quoteRequestId },
        data: {
          status: "assigned",
          assignedTechnicianId: technician.id,
          assignedAt: new Date()
        }
      })
      
      return { job: updatedJob, quoteRequest: job.quoteRequest }
    })
    
    // Send confirmation emails
    await sendEmail({
      to: result.quoteRequest.contactEmail,
      subject: "Technician Assigned - KuiperPros",
      template: "technician-assigned",
      data: {
        firstName: result.quoteRequest.contactFirstName,
        technicianName: `${technician.firstName} ${technician.lastName}`,
        companyName: technician.companyName
      }
    })
    
    await sendEmail({
      to: session.user.email,
      subject: "Job Accepted - KuiperPros",
      template: "job-accepted",
      data: {
        firstName: technician.firstName,
        jobId: params.jobId,
        customerName: `${result.quoteRequest.contactFirstName} ${result.quoteRequest.contactLastName}`,
        address: `${result.quoteRequest.serviceStreetAddress}, ${result.quoteRequest.serviceCity}, ${result.quoteRequest.serviceState}`,
        payout: result.job.technicianPayout
      }
    })
    
    return NextResponse.json({
      success: true,
      job: result.job
    })
    
  } catch (error: any) {
    console.error("Error accepting job:", error)
    return NextResponse.json(
      { error: error.message || "Failed to accept job" },
      { status: 500 }
    )
  }
}

function calculateTechnicianPayout(customerPrice: any): number {
  return Math.floor(Number(customerPrice) * 0.7)
}