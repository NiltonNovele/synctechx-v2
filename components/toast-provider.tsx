"use client";

import { toastState, type ToastProps, dismiss } from "@/hooks/use-toast";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ToastProvider() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);

    // Subscribe to toast state changes
    const unsubscribe = toastState.subscribe(setToasts);

    return () => {
      setMounted(false);
      unsubscribe();
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed bottom-4 left-4 z-[99999] flex flex-col gap-2 w-full max-w-sm pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto w-full font-sans hover:animate-pulse-glow"
            style={{
              background: isDark
                ? "rgba(10, 25, 80, 0.85)" // Dark blue dark theme
                : "rgba(230, 245, 255, 0.95)", // Light blue light theme
              backdropFilter: "blur(10px)",
              fontFamily:
                "var(--font-poppins), ui-sans-serif, system-ui, sans-serif",
              boxShadow: isDark
                ? "0 10px 25px -5px rgba(58, 101, 191, 0.4)" // Dark blue shadow
                : "0 10px 25px -5px rgba(150, 180, 230, 0.3)", // Light blue shadow
              borderRadius: "0.5rem",
              border: isDark
                ? "1px solid rgba(58, 101, 191, 0.3)" // Dark blue border
                : "1px solid rgba(150, 180, 230, 0.3)", // Light blue border
              padding: "1rem",
            }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4
                  className="font-medium"
                  style={{
                    color: isDark ? "#a2cdfd" : "#2c81e0", // Light blue text
                  }}
                >
                  {toast.title}
                </h4>
                {toast.description && (
                  <p
                    className="text-sm mt-1"
                    style={{
                      color: isDark
                        ? "rgba(162, 205, 253, 0.7)"
                        : "rgba(44, 129, 224, 0.8)", // Light blue faded
                    }}
                  >
                    {toast.description}
                  </p>
                )}
              </div>
              <button
                onClick={() => dismiss(toast.id)}
                className="rounded-full p-1 transition-colors"
                style={{
                  color: isDark
                    ? "rgba(162, 205, 253, 0.7)"
                    : "rgba(44, 129, 224, 0.7)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = isDark ? "#a2cdfd" : "#2c81e0";
                  e.currentTarget.style.backgroundColor = isDark
                    ? "rgba(58, 101, 191, 0.15)"
                    : "rgba(44, 129, 224, 0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = isDark
                    ? "rgba(162, 205, 253, 0.7)"
                    : "rgba(44, 129, 224, 0.7)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>,
    document.body
  );
}
