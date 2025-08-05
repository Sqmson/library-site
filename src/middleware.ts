import { withAuth } from 'next-auth/middleware'
import { Role } from '@prisma/client'

export default withAuth(
  function middleware(req) {
    // Add any additional middleware logic here
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl

        // Admin routes protection
        if (pathname.startsWith('/admin')) {
          return token?.role === Role.ADMIN
        }

        // Protected routes that require authentication
        if (pathname.startsWith('/profile') || pathname.startsWith('/borrow')) {
          return !!token
        }

        return true
      },
    },
  }
)

export const config = {
  matcher: ['/admin/:path*', '/profile/:path*', '/borrow/:path*']
}