import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, User, Calendar, Hash } from 'lucide-react'

// Mock data - in production, this would fetch from your database
const mockBook = {
  id: '1',
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  isbn: '9780743273565',
  description: 'A classic American novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream. The story follows Nick Carraway as he observes the tragic story of Jay Gatsby and his obsessive pursuit of Daisy Buchanan.',
  category: 'Literature',
  genre: 'Classic Fiction',
  coverImage: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600',
  totalCopies: 5,
  available: 3,
  createdAt: new Date('2024-01-15'),
  updatedAt: new Date('2024-01-15'),
}

interface BookDetailPageProps {
  params: {
    id: string
  }
}

export default function BookDetailPage({ params }: BookDetailPageProps) {
  // In production, you would fetch the book data here
  const book = mockBook

  if (!book) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Book Cover */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="aspect-[3/4] relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg overflow-hidden mb-4">
                {book.coverImage ? (
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <BookOpen className="h-24 w-24 text-blue-300" />
                  </div>
                )}
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Availability:</span>
                  <Badge variant={book.available > 0 ? "default" : "destructive"}>
                    {book.available > 0 ? `${book.available} of ${book.totalCopies} available` : 'Unavailable'}
                  </Badge>
                </div>
                
                {book.available > 0 && (
                  <Button className="w-full" size="lg">
                    Borrow This Book
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Book Details */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
              <div className="flex items-center gap-2 text-lg text-muted-foreground mb-4">
                <User className="h-5 w-5" />
                <span>by {book.author}</span>
              </div>
              
              <div className="flex gap-2 mb-6">
                <Badge variant="outline" className="text-sm">
                  {book.category}
                </Badge>
                {book.genre && (
                  <Badge variant="outline" className="text-sm">
                    {book.genre}
                  </Badge>
                )}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {book.description}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Book Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Hash className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">ISBN</p>
                      <p className="text-sm text-muted-foreground">{book.isbn}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Total Copies</p>
                      <p className="text-sm text-muted-foreground">{book.totalCopies}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Added to Library</p>
                      <p className="text-sm text-muted-foreground">
                        {book.createdAt.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}