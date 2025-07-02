"use client";

import { useState, useEffect } from "react";
import { ArrowUp, HelpCircle, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { toast } from "@/hooks/use-toast";

export function FloatingButtons() {
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsScrollVisible(true);
      } else {
        setIsScrollVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Help modal shortcut (Shift + /)
      if ((e.key === "/" && e.shiftKey) || e.key === "?") {
        e.preventDefault();
        document.dispatchEvent(new CustomEvent("toggle-help-modal"));
      }

      // Theme toggle shortcut (T)
      if (
        e.key === "t" &&
        !e.ctrlKey &&
        !e.metaKey &&
        !(document.activeElement instanceof HTMLInputElement) &&
        !(document.activeElement instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        const newTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        toast({
          title: "Theme Changed",
          description: `Switched to ${newTheme} mode using keyboard shortcut (T)`,
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [resolvedTheme, setTheme]);

  // Handle help modal toggle event
  useEffect(() => {
    const toggleHelpModal = () => {
      setIsHelpModalOpen((prev) => !prev);
    };

    document.addEventListener("toggle-help-modal", toggleHelpModal);
    return () =>
      document.removeEventListener("toggle-help-modal", toggleHelpModal);
  }, []);

  // Set mounted state to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    toast({
      title: "Theme Changed",
      description: `Switched to ${newTheme} mode`,
    });
  };

  const openHelpModal = () => {
    document.dispatchEvent(new CustomEvent("toggle-help-modal"));
    toast({
      title: "Help Modal",
      description: "Opening help modal",
    });
  };

  // Don't render theme toggle until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-3 items-center"
        >
          <AnimatePresence>
            {isScrollVisible && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={scrollToTop}
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-card/30 backdrop-blur-sm border border-blue-300/10 hover:border-blue-500/30 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 shadow-md focus:outline-none"
                aria-label="Scroll to top"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="h-5 w-5 transition-transform group-hover:animate-bounce-slow" />
              </motion.button>
            )}
          </AnimatePresence>

          <motion.button
            onClick={openHelpModal}
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-card/30 backdrop-blur-sm border border-blue-300/10 hover:border-blue-500/30 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 shadow-md focus:outline-none"
            aria-label="Help"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <HelpCircle className="h-5 w-5 transition-transform group-hover:animate-pulse" />
          </motion.button>

          <motion.button
            onClick={toggleTheme}
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-card/30 backdrop-blur-sm border border-blue-300/10 hover:border-blue-500/30 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 shadow-md focus:outline-none"
            aria-label={
              resolvedTheme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5 transition-transform group-hover:rotate-12" />
            ) : (
              <Moon className="h-5 w-5 transition-transform group-hover:rotate-12" />
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Import the HelpModal component here to avoid duplicate rendering */}
      {isHelpModalOpen && (
        <div className="sr-only" aria-hidden="true">
          Help modal is open
        </div>
      )}
    </>
  );
}
