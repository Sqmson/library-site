import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { BookOpen, Calendar, Clock, User } from 'lucide-react'

// Mock data for demonstration
const mockUser = {
  name: 'John Doe',
  email: 'john.doe@university.edu',
  studentId: 'STU001',
  role: 'STUDENT',
  joinDate: '2024-01-15',
}

const mockBorrowedBooks = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    borrowedAt: '2024-01-20',
    dueDate: '2024-02-03',
    status: 'BORROWED',
  },
  {
    id: '2',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    borrowedAt: '2024-01-18',
    dueDate: '2024-02-01',
    status: 'OVERDUE',
  },
  {
    id: '3',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    borrowedAt: '2024-01-10',
    dueDate: '2024-01-24',
    status: 'RETURNED',
    returnedAt: '2024-01-23',
  },
]

export default function ProfilePage() {
  const activeBorrows = mockBorrowedBooks.filter(book => book.status !== 'RETURNED')
  const borrowHistory = mockBorrowedBooks.filter(book => book.status === 'RETURNED')

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="h-20 w-20 mx-auto mb-4">
                <AvatarFallback className="text-lg">
                  {mockUser.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <CardTitle>{mockUser.name}</CardTitle>
              <CardDescription>{mockUser.email}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Student ID</p>
                  <p className="text-sm text-muted-foreground">{mockUser.studentId}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Member Since</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(mockUser.joinDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{activeBorrows.length}</div>
                    <div className="text-xs text-muted-foreground">Active Borrows</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{borrowHistory.length}</div>
                    <div className="text-xs text-muted-foreground">Books Returned</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Borrows and History */}
        <div className="lg:col-span-2 space-y-8">
          {/* Active Borrows */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Currently Borrowed Books
              </CardTitle>
              <CardDescription>
                Books you currently have checked out
              </CardDescription>
            </CardHeader>
            <CardContent>
              {activeBorrows.length > 0 ? (
                <div className="space-y-4">
                  {activeBorrows.map((book) => (
                    <div key={book.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{book.title}</h4>
                        <p className="text-sm text-muted-foreground">{book.author}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span>Borrowed: {new Date(book.borrowedAt).toLocaleDateString()}</span>
                          <span>Due: {new Date(book.dueDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={book.status === 'OVERDUE' ? 'destructive' : 'default'}>
                          {book.status === 'OVERDUE' ? 'Overdue' : 'Active'}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Renew
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No books currently borrowed</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Borrowing History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Borrowing History
              </CardTitle>
              <CardDescription>
                Your past book borrowing activity
              </CardDescription>
            </CardHeader>
            <CardContent>
              {borrowHistory.length > 0 ? (
                <div className="space-y-4">
                  {borrowHistory.map((book) => (
                    <div key={book.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{book.title}</h4>
                        <p className="text-sm text-muted-foreground">{book.author}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span>Borrowed: {new Date(book.borrowedAt).toLocaleDateString()}</span>
                          <span>Returned: {book.returnedAt && new Date(book.returnedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Badge variant="outline">Returned</Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No borrowing history yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}