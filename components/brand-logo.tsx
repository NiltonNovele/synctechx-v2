"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({ className, size = "md" }: BrandLogoProps) {
  const sizeClasses = {
    sm: "h-10 w-10", // was h-8 w-8
    md: "h-16 w-16", // was h-12 w-12
    lg: "h-24 w-24", // was h-16 w-16
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 4 }}
      transition={{ type: "spring", stiffness: 400, damping: 12 }}
      className={cn(
        "relative flex items-center justify-center rounded-full overflow-hidden",
        sizeClasses[size],
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 via-blue-400/10 to-blue-300/20 animate-pulse-glow rounded-full" />
      <div className="absolute inset-0 rounded-full border border-blue-300/40" />
      <Image
        src="/logo/logo.png?height=150&width=150"
        alt=" Logo"
        width={150}
        height={150}
        className="object-contain w-full h-full z-10"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
    </motion.div>
  );
}
