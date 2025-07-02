"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Image,
  User,
  Mail,
  FileText,
  HelpCircle,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { BrandLogo } from "./brand-logo";
// import { ThemeToggle } from "@/components/theme-toggle"
// import { HelpButton } from "@/components/help-button"
// import LanguageToggle from "@/components/LanguageToggle";

const navItems = [
  { name: "Home", href: "/", icon: <Home className="h-4 w-4 mr-2" /> },
  {
    name: "Services",
    href: "/services",
    icon: <Briefcase className="h-4 w-4 mr-2" />,
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: <Image className="h-4 w-4 mr-2" />,
  },
  { name: "About", href: "/about", icon: <User className="h-4 w-4 mr-2" /> },
  {
    name: "Contact",
    href: "/contact",
    icon: <Mail className="h-4 w-4 mr-2" />,
  },
  { name: "Blog", href: "/blog", icon: <FileText className="h-4 w-4 mr-2" /> },
  { name: "FAQ", href: "/faq", icon: <HelpCircle className="h-4 w-4 mr-2" /> },
  {
    name: "Pricing",
    href: "/pricing",
    icon: <DollarSign className="h-4 w-4 mr-2" />,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/30 transition-all duration-300",
        scrolled ? "bg-background/50 shadow-md" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <BrandLogo size="sm" />
            <span className="text-2xl font-bold text-white-600 neon-text-blue">
              SyncTechX
            </span>
          </Link>
        </motion.div>

        <motion.nav
          className="hidden md:flex md:gap-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600 relative group flex items-center nav-link",
                  pathname === item.href
                    ? "text-white-600"
                    : "text-muted-foreground"
                )}
              >
                {item.icon}
                {item.name}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700 group btn-hover-effect neon-glow-blue">
                <span>Get a Quote</span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </motion.div>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden neon-text-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </motion.div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black backdrop-blur-sm md:hidden shadow-2xl border-t border-blue-500/20"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="container flex h-16 items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center space-x-2">
                <BrandLogo size="sm" />
                <span className="text-2xl font-bold text-white neon-text-blue">
                  SyncTechX
                </span>
              </Link>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              className="neon-text-blue"
            >
              <X className="h-6 w-6 text-white" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <nav className="container mt-8 grid gap-6 pb-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="text-lg font-medium hover:text-blue-500 text-white flex items-center nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group btn-hover-effect neon-glow-blue">
                    <span>Get a Quote</span>
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
