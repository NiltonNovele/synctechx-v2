"use client";

import {
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  ExternalLink,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Team", href: "#about-founder" },
    { name: "Serviços", href: "#use-cases" },
    { name: "Sobre", href: "#how-it-works" },
    { name: "Contacto", href: "#contact" },
  ];

  const projectLinks = [
    {
      name: "Loja.Sale",
      href: "https://loja.sale",
      description: "Lojas online modernas para negócios em crescimento.",
    },
    {
      name: "Trilho Académico",
      href: "https://trilhoacademico.edu.mz",
      description: "Pesquisa e orientação académica inteligente.",
    },
  ];

  const legalLinks = [
    { name: "Política de Privacidade", href: "/privacy" },
    { name: "Termos de Serviço", href: "/terms" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://x.com/synctechx",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Twitter",
      href: "https://x.com/synctechx",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/synctechx.mz",
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61574813828863",
      icon: <Facebook className="h-5 w-5" />,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#020617] border-t border-white/10">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="py-14 sm:py-16 lg:py-20">
          {/* Top CTA / Brand Strip */}
          <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-8 lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="h-16 w-16 overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
                  <Image
                    src="/logo.png"
                    alt="SyncTechX"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
                    SyncTechX
                  </p>
                  <h3 className="max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Soluções digitais modernas para marcas que querem crescer.
                  </h3>
                </div>
              </div>

              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400 sm:w-auto"
              >
                Fale connosco
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* About */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 lg:col-span-4">
              <h4 className="mb-4 text-lg font-semibold text-white">
                Sobre a SyncTechX
              </h4>

              <p className="text-sm leading-7 text-white/65">
                Startup tecnológica moçambicana focada em criar soluções
                digitais modernas, seguras e eficientes para empresas,
                instituições e marcas em crescimento.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                  Contacto
                </p>

                <a
                  href="mailto:info@synctechx.com"
                  className="group flex items-center gap-3 text-white/75 transition-colors hover:text-blue-400"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-400/20">
                    <Mail className="h-4 w-4 text-blue-400" />
                  </span>
                  <span className="text-sm">info@synctechx.com</span>
                </a>
              </div>
            </div>

            {/* Projects */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 lg:col-span-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-blue-400" />
                  <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
                    Projectos
                  </h4>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {projectLinks.map((project) => (
                  <a
                    key={project.name}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10"
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h5 className="font-medium text-white transition-colors group-hover:text-blue-400">
                        {project.name}
                      </h5>
                      <ExternalLink className="h-4 w-4 shrink-0 text-white/35 transition-colors group-hover:text-blue-400" />
                    </div>

                    <p className="text-sm leading-6 text-white/55">
                      {project.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 gap-8 rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-1">
              <div>
                <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-white">
                  Links
                </h4>

                <ul className="space-y-3">
                  {navigationLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-blue-400"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-white">
                  Legal
                </h4>

                <ul className="space-y-3">
                  {legalLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-blue-400"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h5 className="mb-4 text-sm font-medium text-white">
                    Siga-nos
                  </h5>

                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-white/65 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="text-sm text-white/45">
              © {currentYear} SyncTechX. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}