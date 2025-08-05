'use client'

import { useState, useEffect } from 'react'
import { BookCard } from '@/components/ui/book-card'
import { SearchFilters } from '@/components/ui/search-filters'
import { Book } from '@prisma/client'

// Mock data for demonstration
const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '9780743273565',
    description: 'A classic American novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream.',
    category: 'Literature',
    genre: 'Classic Fiction',
    coverImage: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400',
    totalCopies: 5,
    available: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    isbn: '9780262033848',
    description: 'Comprehensive introduction to the modern study of computer algorithms.',
    category: 'Computer Science',
    genre: 'Textbook',
    coverImage: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    totalCopies: 10,
    available: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    isbn: '9780141439518',
    description: 'A romantic novel of manners written by Jane Austen in 1813.',
    category: 'Literature',
    genre: 'Romance',
    coverImage: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400',
    totalCopies: 4,
    available: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4',
    title: 'Calculus: Early Transcendentals',
    author: 'James Stewart',
    isbn: '9781285741550',
    description: 'Comprehensive calculus textbook for undergraduate students.',
    category: 'Mathematics',
    genre: 'Textbook',
    coverImage: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    totalCopies: 8,
    available: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export default function CatalogPage() {
  const [books, setBooks] = useState<Book[]>(mockBooks)
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(mockBooks)
  const [categories] = useState<string[]>(['Literature', 'Computer Science', 'Mathematics', 'Science', 'History'])
  const [genres] = useState<string[]>(['Classic Fiction', 'Romance', 'Textbook', 'Biography', 'Mystery'])

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredBooks(books)
      return
    }

    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.isbn?.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredBooks(filtered)
  }

  const handleCategoryFilter = (category: string) => {
    if (category === 'all') {
      setFilteredBooks(books)
      return
    }

    const filtered = books.filter(book => book.category === category)
    setFilteredBooks(filtered)
  }

  const handleGenreFilter = (genre: string) => {
    if (genre === 'all') {
      setFilteredBooks(books)
      return
    }

    const filtered = books.filter(book => book.genre === genre)
    setFilteredBooks(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Book Catalog</h1>
        <p className="text-muted-foreground mb-6">
          Discover and explore our extensive collection of books across various categories and genres.
        </p>
        
        <SearchFilters
          onSearch={handleSearch}
          onCategoryFilter={handleCategoryFilter}
          onGenreFilter={handleGenreFilter}
          categories={categories}
          genres={genres}
        />
      </div>

      <div className="mb-4">
        <p className="text-sm text-muted-foreground">
          Showing {filteredBooks.length} of {books.length} books
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} showBorrowButton />
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No books found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}