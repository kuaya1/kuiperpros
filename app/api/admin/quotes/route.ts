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
    const status = searchParams.get("status")
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "20")
    const skip = (page - 1) * limit
    
    const where: any = {}
    if (status) {
      where.status = status
    }
    
    const [quotes, total] = await Promise.all([
      prisma.quoteRequest.findMany({
        where,
        include: {
          customer: {
            select: {
              firstName: true,
              lastName: true,
              user: {
                select: {
                  email: true
                }
              }
            }
          },
          assignedTechnician: {
            select: {
              firstName: true,
              lastName: true,
              companyName: true
            }
          },
          job: {
            select: {
              id: true,
              status: true
            }
          }
        },
        orderBy: {
          createdAt: "desc"
        },
        skip,
        take: limit
      }),
      prisma.quoteRequest.count({ where })
    ])
    
    // Log admin activity
    await prisma.adminActivity.create({
      data: {
        adminId: session.user.id,
        action: "viewed_quotes",
        details: { status, page }
      }
    })
    
    return NextResponse.json({
      quotes,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit)
      }
    })
    
  } catch (error) {
    console.error("Error fetching quotes:", error)
    return NextResponse.json(
      { error: "Failed to fetch quotes" },
      { status: 500 }
    )
  }
}