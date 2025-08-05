import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Users, Clock, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="library-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to VL Library
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Your digital gateway to knowledge. Discover, borrow, and manage books 
            with our modern library management system.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/catalog">Browse Catalog</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Library Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience a comprehensive library management system designed for modern educational institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Digital Catalog</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Browse our extensive collection of books with advanced search and filtering capabilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Secure authentication system with role-based access for students and administrators.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Borrowing System</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Track borrowed books, due dates, and manage returns with automated notifications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Admin Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Comprehensive administrative tools for book management and user oversight.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Books Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Digital Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our library community and unlock access to thousands of books.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/auth/signup">Create Account</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}