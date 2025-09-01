"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#how-it-works" },
    { name: "Serviços", href: "#use-cases" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Team", href: "#about-founder" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-2 md:py-3 bg-black/90 backdrop-blur-md shadow-md"
            : "py-4 md:py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden bg-transparent">
                <Image
                  src="/logo.png"
                  alt="SynctechX"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover mix-blend-screen filter brightness-110 contrast-125"
                />
              </div>
              <span className="ml-2 md:ml-3 text-white font-light text-lg md:text-xl">
                SyncTechX
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-blue-500 transition-colors duration-300 text-sm font-light focus:outline-none focus:text-blue-500"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact">
                <Button
                  size="sm"
                  variant="outline"
                  className="ml-4 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black focus:outline-none focus:ring-0"
                >
                  Contacto
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none focus:text-blue-500 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 md:h-6 md:w-6" />
              ) : (
                <Menu className="h-5 w-5 md:h-6 md:w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-2xl font-light hover:text-blue-500 transition-colors duration-300 focus:outline-none focus:text-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button
              size="lg"
              variant="outline"
              className="mt-8 border-blue-500 text-gold hover:bg-blue-500 hover:text-black focus:outline-none focus:ring-0"
            >
              Fale Connosco
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
