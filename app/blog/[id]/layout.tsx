import type React from "react"
import { ReadingProgress } from "@/components/reading-progress"

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ReadingProgress />
      {children}
    </>
  )
}

