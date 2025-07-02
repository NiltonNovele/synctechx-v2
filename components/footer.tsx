"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrandLogo } from "./brand-logo";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Keyboard shortcut for scroll to top
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Home key
      if (e.key === "Home") {
        scrollToTop();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const socialLinks = [
    {
      icon: <Facebook className="h-5 w-5" />,
      href: "https://www.facebook.com/profile.php?id=61574813828863",
      label: "Facebook",
    },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/synctechxmz/",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "www.linkedin.com/company/synctechx/",
      label: "LinkedIn",
    },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Pricing", href: "/pricing" },
  ];

  const services = [
    { name: "Web Development", href: "/services" },
    { name: "Security-audits", href: "/services" },
    { name: "Desktop Applications", href: "/services" },
    { name: "Mobile Development", href: "/services" },
    { name: "SEO Optimization", href: "/services" },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BrandLogo size="sm" />
              <h3 className="text-lg font-bold neon-text">SyncTechX</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Youth-driven Technology Startup aimed at providing the most
              efficient, reliable and secure solutions to individuals and/or
              businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={social.href}
                    className="text-muted-foreground hover:text-primary neon-text"
                    aria-label={social.label}
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold neon-text">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="hover:text-primary transition-colors neon-text inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold neon-text">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors neon-text inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold neon-text">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground/90 transition-colors">
                Maputo, MZ | Cape Town, SA
              </li>
              <li>
                <a
                  href="mailto:info@synctechx.com"
                  className="hover:text-primary transition-colors neon-text"
                >
                  info@synctechx.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+258840293361"
                  className="hover:text-primary transition-colors neon-text"
                >
                  +258 (84) 029 3361
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold">Keyboard Shortcuts:</span> Press{" "}
                <kbd className="px-2 py-1 bg-primary/10 rounded text-xs">
                  Home
                </kbd>{" "}
                to scroll to top
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border/40 pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} SyncTechX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
