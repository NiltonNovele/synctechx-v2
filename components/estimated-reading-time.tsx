"use client"

import { Clock } from "lucide-react"

interface EstimatedReadingTimeProps {
  content: string
}

export function EstimatedReadingTime({ content }: EstimatedReadingTimeProps) {
  // Strip HTML tags and calculate reading time
  const text = content.replace(/<[^>]*>/g, "")
  const wordCount = text.split(/\s+/).length
  const readingTime = Math.max(1, Math.ceil(wordCount / 200)) // Assuming 200 words per minute

  return (
    <div className="flex items-center gap-1 text-sm text-muted-foreground">
      <Clock className="h-4 w-4" />
      <span>{readingTime} min read</span>
    </div>
  )
}

