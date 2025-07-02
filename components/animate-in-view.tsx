"use client"

import type React from "react"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

type AnimateInViewProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  once?: boolean
}

export function AnimateInView({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once })

  const directionClasses = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    none: "opacity-0",
  }

  const animatedClass = isInView
    ? "opacity-100 translate-y-0 translate-x-0"
    : `opacity-0 ${directionClasses[direction]}`

  return (
    <div
      ref={ref}
      className={cn("transition-all", animatedClass, className)}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

