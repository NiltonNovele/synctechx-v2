"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div
            className={`flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-5 ${
              isScrolled
                ? "border-white/10 bg-black/75 shadow-2xl shadow-black/30 backdrop-blur-xl"
                : "border-white/10 bg-white/[0.035] backdrop-blur-md"
            }`}
          >
            <a href="#hero" className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:h-11 md:w-11">
                <Image
                  src="/logo.png"
                  alt="SyncTechX"
                  width={44}
                  height={44}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div className="leading-none">
                <span className="block text-base font-semibold text-white md:text-lg">
                  SyncTechX
                </span>
                <span className="hidden text-xs text-white/45 sm:block">
                  Sincronizando tecnologia
                </span>
              </div>
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-white/65 transition-all duration-300 hover:bg-white/[0.06] hover:text-blue-400 focus:outline-none focus:text-blue-400"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden items-center md:flex">
              <a href="#contact">
                <Button className="group h-11 rounded-full bg-blue-500 px-5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400">
                  Fale Connosco
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </a>
            </div>

            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-blue-400/40 md:hidden"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%)]" />

        <div className="relative flex h-full flex-col justify-between px-5 pb-8 pt-28">
          <div className="space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 text-xl font-semibold text-white transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400 ${
                  isMobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-6 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 45}ms` }}
              >
                {link.name}
                <ArrowUpRight className="h-5 w-5 text-white/35" />
              </a>
            ))}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
            <p className="mb-4 text-sm leading-6 text-white/55">
              Pronto para transformar a sua ideia numa solução digital?
            </p>

            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="h-14 w-full rounded-full bg-blue-500 text-sm font-semibold text-black hover:bg-blue-400">
                Fale Connosco
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}