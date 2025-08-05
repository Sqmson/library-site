import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Book } from '@prisma/client'
import { BookOpen } from 'lucide-react'

interface BookCardProps {
  book: Book
  showBorrowButton?: boolean
}

export function BookCard({ book, showBorrowButton = false }: BookCardProps) {
  return (
    <Card className="book-card-hover overflow-hidden">
      <div className="aspect-[3/4] relative bg-gradient-to-br from-blue-50 to-indigo-100">
        {book.coverImage ? (
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <BookOpen className="h-16 w-16 text-blue-300" />
          </div>
        )}
        <div className="absolute top-2 right-2">
          <Badge variant={book.available > 0 ? "default" : "destructive"}>
            {book.available > 0 ? `${book.available} available` : 'Unavailable'}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-2 mb-1">{book.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs">
            {book.category}
          </Badge>
          {book.genre && (
            <Badge variant="outline" className="text-xs">
              {book.genre}
            </Badge>
          )}
        </div>
        {book.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {book.description}
          </p>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button variant="outline" size="sm" asChild className="flex-1">
          <Link href={`/books/${book.id}`}>View Details</Link>
        </Button>
        {showBorrowButton && book.available > 0 && (
          <Button size="sm" className="flex-1">
            Borrow
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}