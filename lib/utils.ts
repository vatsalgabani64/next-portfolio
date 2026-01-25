import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateShort(
  date: Date | string | null,
  locale: string = "en-GB"
): string {
  if (!date) return "";

  const parsedDate = date instanceof Date ? date : new Date(date);

  if (isNaN(parsedDate.getTime())) return "";

  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
}