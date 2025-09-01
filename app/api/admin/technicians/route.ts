import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status") || "pending"
    
    const technicians = await prisma.technician.findMany({
      where: {
        status: status as any
      },
      include: {
        user: {
          select: {
            email: true
          }
        },
        serviceAreas: true,
        _count: {
          select: {
            jobs: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    })
    
    return NextResponse.json({ technicians })
    
  } catch (error) {
    console.error("Error fetching technicians:", error)
    return NextResponse.json(
      { error: "Failed to fetch technicians" },
      { status: 500 }
    )
  }
}