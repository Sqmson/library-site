# VL Library - Digital Library Management System

A modern, full-stack library management system built with Next.js, Prisma, and PostgreSQL. This application provides a comprehensive solution for managing books, users, and borrowing records in educational institutions.

## Features

### For Students
- **Book Catalog**: Browse and search through the library's collection
- **Advanced Filtering**: Filter books by category, genre, and availability
- **Book Details**: View comprehensive information about each book
- **Borrowing System**: Borrow books and track due dates
- **Profile Management**: View borrowing history and manage account

### For Administrators
- **Admin Dashboard**: Comprehensive overview of library statistics
- **Book Management**: Add, edit, and remove books from the catalog
- **User Management**: Manage student accounts and permissions
- **Borrowing Oversight**: Track active borrows and overdue books
- **Analytics**: View library usage statistics and trends

## Tech Stack

- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with role-based access control
- **Styling**: Tailwind CSS with custom design system

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd vl-library
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your database URL and authentication secrets:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/library_db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   npm run db:generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Database Schema

The application uses the following main entities:

- **Users**: Student and admin accounts with role-based permissions
- **Books**: Library catalog with metadata and availability tracking
- **BorrowRecords**: Tracking of book borrowing and returns
- **Authentication**: NextAuth.js session and account management

## Authentication

The system supports two user roles:

- **Student**: Can browse catalog, borrow books, and manage their profile
- **Admin**: Full access to all features including book and user management

### Demo Credentials

- **Student**: Any email + password "password"
- **Admin**: Any email + password "admin123"

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard and management
│   ├── auth/              # Authentication pages
│   ├── books/             # Book detail pages
│   ├── catalog/           # Public book catalog
│   ├── profile/           # User profile and history
│   └── api/               # API routes
├── components/            # Reusable UI components
│   └── ui/                # shadcn/ui components
├── lib/                   # Utility functions and configurations
│   ├── auth.ts            # NextAuth.js configuration
│   ├── prisma.ts          # Prisma client setup
│   └── utils.ts           # Helper functions
├── types/                 # TypeScript type definitions
└── middleware.ts          # Route protection middleware
```

## Key Features Implementation

### Role-Based Access Control
- Middleware protection for admin routes
- Session-based authentication with JWT
- Role checking in components and API routes

### Book Management
- CRUD operations for book catalog
- Image upload and management
- Category and genre organization
- Availability tracking

### Borrowing System
- Due date calculation and tracking
- Overdue book identification
- Borrowing history and analytics
- Renewal functionality

### Search and Filtering
- Full-text search across titles, authors, and ISBN
- Category and genre filtering
- Responsive design for all screen sizes

## Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables in Vercel dashboard**
3. **Deploy automatically on push to main branch**

### Database Setup for Production

1. **Set up PostgreSQL database** (recommended: Supabase, PlanetScale, or Neon)
2. **Update DATABASE_URL** in production environment
3. **Run database migrations** in production

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue in the GitHub repository.