"use client"

import type React from "react"

import { ThemeProvider } from "next-themes"
import { ToastProvider } from "@/components/toast-provider"
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts"
import { FloatingButtons } from "@/components/floating-buttons"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <ToastProvider />
      <KeyboardShortcuts />
      <FloatingButtons />
      {children}
    </ThemeProvider>
  )
}

