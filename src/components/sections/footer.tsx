"use client";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
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

  const legalLinks = [
    { name: "Política de Privacidade", href: "/privacy" },
    { name: "Termos de Serviço", href: "/terms" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://x.com/synctechx",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      href: "https://x.com/synctechx",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/synctechx.mz",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61574813828863",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: <Facebook className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo & Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-transparent">
                  <Image
                    src="/logo.png"
                    alt="Malak Star AI"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover mix-blend-screen filter brightness-110 contrast-125"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white">SyncTechX</h3>
                  <p className="text-sm text-white/60">
                    Sincronizando a tecnologia
                  </p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed max-w-md mb-6">
                Startup tecnológica dirigida a jovens, com o objetivo de
                fornecer as soluções mais eficientes, fiáveis e seguras para
                empresas.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/70">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>info@synctechx.com</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-medium text-white mb-6">Links</h4>
              <ul className="space-y-4">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-blue-500 transition-colors duration-300 hover:translate-x-1 transform inline-block focus:outline-none focus:text-gold"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Social */}
            <div>
              <h4 className="text-lg font-medium text-white mb-6">Legal</h4>
              <ul className="space-y-4 mb-8">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block focus:outline-none focus:text-gold"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h5 className="text-sm font-medium text-white mb-4">
                  Siga-nos
                </h5>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target={social.target}
                      rel={social.rel}
                      className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-blue-500 hover:bg-white/10 hover:border-gold/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:text-gold focus:bg-white/10 focus:border-gold/20"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-white/50 text-sm">
              © {currentYear} SyncTechX. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
