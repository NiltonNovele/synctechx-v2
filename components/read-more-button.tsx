"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ReadMoreButtonProps {
  href: string;
  className?: string;
  variant?: "default" | "readmore" | "ghost";
  size?: "default" | "sm" | "lg";
  arrowAnimation?: boolean;
}

export function ReadMoreButton({
  href,
  className,
  variant = "readmore",
  size = "default",
  arrowAnimation = true,
}: ReadMoreButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Button
        variant={variant}
        size={size}
        className={`group rounded-full hover:bg-blue-600/5 hover:text-blue-600 border border-blue-600/20 hover:border-blue-600/50 ${className}`}
        asChild
      >
        <Link href={href}>
          <span>Read More</span>
          {arrowAnimation ? (
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          ) : (
            <ArrowRight className="ml-2 h-4 w-4" />
          )}
        </Link>
      </Button>
    </motion.div>
  );
}
