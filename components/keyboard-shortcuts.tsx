"use client"

import { useEffect } from "react"
import { toast } from "@/hooks/use-toast"
import { useTheme } from "next-themes"

export function KeyboardShortcuts() {
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if focus is in an input or textarea
      if (document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement) {
        return
      }

      // Skip if modifier keys are pressed (except for specific shortcuts)
      if ((e.ctrlKey || e.metaKey) && e.key !== "/") {
        return
      }

      switch (e.key) {
        // Theme toggle (T)
        case "t":
          if (!e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey) {
            e.preventDefault()
            const newTheme = resolvedTheme === "dark" ? "light" : "dark"
            setTheme(newTheme)
            toast({
              title: "Theme Changed",
              description: `Switched to ${newTheme} mode using keyboard shortcut (T)`,
            })
          }
          break

        // Help modal (Shift + / or ?)
        case "/":
          if (e.shiftKey) {
            e.preventDefault()
            document.dispatchEvent(new CustomEvent("toggle-help-modal"))
          }
          break
        case "?":
          e.preventDefault()
          document.dispatchEvent(new CustomEvent("toggle-help-modal"))
          break

        // Home key to scroll to top
        case "Home":
          window.scrollTo({ top: 0, behavior: "smooth" })
          toast({
            title: "Scroll to Top",
            description: "Scrolled to the top of the page",
          })
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [resolvedTheme, setTheme])

  return null
}

