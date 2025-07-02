import type React from "react"
import { PageTransition } from "@/components/page-transition"

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageTransition>{children}</PageTransition>
}

