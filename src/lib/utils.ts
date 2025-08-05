import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function calculateDueDate(borrowDate: Date = new Date(), days: number = 14): Date {
  const dueDate = new Date(borrowDate)
  dueDate.setDate(dueDate.getDate() + days)
  return dueDate
}

export function isOverdue(dueDate: Date): boolean {
  return new Date() > new Date(dueDate)
}