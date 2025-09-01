import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"
import { sendEmail } from "@/lib/email"

export async function POST(
  request: NextRequest,
  { params }: { params: { technicianId: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const technician = await prisma.technician.update({
      where: { id: params.technicianId },
      data: {
        status: "approved",
        approvedAt: new Date(),
        approvedById: session.user.id
      },
      include: {
        user: true
      }
    })
    
    // Send approval email
    await sendEmail({
      to: technician.user.email,
      subject: "Application Approved - Welcome to KuiperPros!",
      template: "technician-approved",
      data: {
        firstName: technician.firstName,
        loginUrl: `${process.env.NEXTAUTH_URL}/technician/login`
      }
    })
    
    // Log admin activity
    await prisma.adminActivity.create({
      data: {
        adminId: session.user.id,
        action: "approved_technician",
        entityType: "technician",
        entityId: params.technicianId,
        details: {
          technicianName: `${technician.firstName} ${technician.lastName}`,
          companyName: technician.companyName
        }
      }
    })
    
    return NextResponse.json({
      success: true,
      technician
    })
    
  } catch (error) {
    console.error("Error approving technician:", error)
    return NextResponse.json(
      { error: "Failed to approve technician" },
      { status: 500 }
    )
  }
}