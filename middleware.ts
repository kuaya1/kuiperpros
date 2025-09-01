import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const path = req.nextUrl.pathname
    
    // Admin routes
    if (path.startsWith("/admin") && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", req.url))
    }
    
    // Technician routes
    if (path.startsWith("/technician") && token?.role !== "technician") {
      return NextResponse.redirect(new URL("/unauthorized", req.url))
    }
    
    // Customer routes
    if (path.startsWith("/customer") && token?.role !== "customer") {
      return NextResponse.redirect(new URL("/unauthorized", req.url))
    }
    
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    }
  }
)

export const config = {
  matcher: [
    "/admin/:path*",
    "/technician/:path*",
    "/customer/:path*",
    "/api/admin/:path*",
    "/api/technician/:path*",
    "/api/customer/:path*"
  ]
}