import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Users, Clock, AlertTriangle, Plus, Settings } from 'lucide-react'
import Link from 'next/link'

// Mock data for demonstration
const mockStats = {
  totalBooks: 1247,
  totalUsers: 523,
  activeBorrows: 89,
  overdueBooks: 12,
}

const mockRecentActivity = [
  {
    id: '1',
    type: 'borrow',
    user: 'John Doe',
    book: 'The Great Gatsby',
    timestamp: '2024-01-25T10:30:00Z',
  },
  {
    id: '2',
    type: 'return',
    user: 'Jane Smith',
    book: 'Introduction to Algorithms',
    timestamp: '2024-01-25T09:15:00Z',
  },
  {
    id: '3',
    type: 'overdue',
    user: 'Mike Johnson',
    book: 'Pride and Prejudice',
    timestamp: '2024-01-25T08:00:00Z',
  },
]

const mockOverdueBooks = [
  {
    id: '1',
    title: 'Calculus: Early Transcendentals',
    user: 'Alice Brown',
    dueDate: '2024-01-20',
    daysOverdue: 5,
  },
  {
    id: '2',
    title: 'Introduction to Psychology',
    user: 'Bob Wilson',
    dueDate: '2024-01-18',
    daysOverdue: 7,
  },
]

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your library system</p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/admin/books/new">
              <Plus className="h-4 w-4 mr-2" />
              Add Book
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/admin/settings">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Books</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.totalBooks}</div>
            <p className="text-xs text-muted-foreground">
              +12 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              +23 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Borrows</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.activeBorrows}</div>
            <p className="text-xs text-muted-foreground">
              -5 from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue Books</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{mockStats.overdueBooks}</div>
            <p className="text-xs text-muted-foreground">
              +2 from yesterday
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest library transactions and events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRecentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'borrow' ? 'bg-blue-500' :
                      activity.type === 'return' ? 'bg-green-500' : 'bg-red-500'
                    }`} />
                    <div>
                      <p className="font-medium">{activity.user}</p>
                      <p className="text-sm text-muted-foreground">
                        {activity.type === 'borrow' ? 'Borrowed' : 
                         activity.type === 'return' ? 'Returned' : 'Overdue'} "{activity.book}"
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(activity.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Overdue Books */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Overdue Books
            </CardTitle>
            <CardDescription>Books that need immediate attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockOverdueBooks.map((book) => (
                <div key={book.id} className="flex items-center justify-between p-3 border border-red-200 rounded-lg bg-red-50">
                  <div>
                    <p className="font-medium">{book.title}</p>
                    <p className="text-sm text-muted-foreground">
                      Borrowed by {book.user}
                    </p>
                    <p className="text-xs text-red-600">
                      Due: {new Date(book.dueDate).toLocaleDateString()} 
                      ({book.daysOverdue} days overdue)
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Send Reminder
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex-col" asChild>
                <Link href="/admin/books">
                  <BookOpen className="h-6 w-6 mb-2" />
                  Manage Books
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex-col" asChild>
                <Link href="/admin/users">
                  <Users className="h-6 w-6 mb-2" />
                  Manage Users
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex-col" asChild>
                <Link href="/admin/borrows">
                  <Clock className="h-6 w-6 mb-2" />
                  Manage Borrows
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}