import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== "technician") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const technician = await prisma.technician.findUnique({
      where: { userId: session.user.id },
      include: {
        serviceAreas: true
      }
    })
    
    if (!technician || technician.status !== "approved") {
      return NextResponse.json({ error: "Technician not approved" }, { status: 403 })
    }
    
    // Get available jobs in technician's service areas
    const zipCodes = technician.serviceAreas.map((area: any) => area.zipCode)
    
    const availableJobs = await prisma.job.findMany({
      where: {
        status: "available",
        quoteRequest: {
          serviceZipCode: {
            in: zipCodes
          }
        }
      },
      include: {
        quoteRequest: {
          select: {
            serviceCity: true,
            serviceState: true,
            serviceZipCode: true,
            propertyType: true,
            kitStatus: true,
            estimatedPrice: true,
            createdAt: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    })
    
    // Get technician's assigned jobs
    const assignedJobs = await prisma.job.findMany({
      where: {
        technicianId: technician.id,
        status: {
          in: ["assigned", "in_progress"]
        }
      },
      include: {
        quoteRequest: true,
        customer: {
          select: {
            firstName: true,
            lastName: true,
            phone: true
          }
        }
      },
      orderBy: {
        scheduledDate: "asc"
      }
    })
    
    return NextResponse.json({
      available: availableJobs,
      assigned: assignedJobs,
      stats: {
        totalCompleted: technician.jobsCompleted,
        averageRating: technician.averageRating,
        totalEarnings: technician.totalEarnings
      }
    })
    
  } catch (error) {
    console.error("Error fetching technician jobs:", error)
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    )
  }
}