"use client";

import { useEffect, useState, useRef } from "react";
import { Linkedin, Instagram, Twitter, Globe } from "lucide-react";

export function AboutFounderSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const team = [
    {
      name: "Nilton Novele",
      role: "Tecnologia",
      image: "/nilton.jpeg",
      socials: [
        { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/nilton-novele-82211821b" },
        { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/niltonnovele" },
        { icon: <Twitter className="w-4 h-4" />, href: "https://x.com/nilton_novele" },
        { icon: <Globe className="w-4 h-4" />, href: "https://www.niltonnovele.com/" },
      ],
    },
    {
      name: "Bionda Shirley",
      role: "Marketing",
      image: "/bionda1.png",
      socials: [
        { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com" },
        { icon: <Twitter className="w-4 h-4" />, href: "https://x.com/" },
        { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/biondaa_shirley" },
        { icon: <Globe className="w-4 h-4" />, href: "/" },
      ],
    },
    {
      name: "Henzel Tibana",
      role: "Gestor de Projectos",
      image: "/jumpex.jpg",
      socials: [
        { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/henzel-tibana-a07068211" },
        { icon: <Twitter className="w-4 h-4" />, href: "https://x.com/HenzelJt" },
        { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/henzel_tibs" },
        { icon: <Globe className="w-4 h-4" />, href: "https://henzeltibana.com" },
      ],
    },
    {
      name: "Mauro Chemane",
      role: "Direção Criativa",
      image: "/beto.jpeg",
      socials: [
        { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/mauro-chemane/" },
        { icon: <Twitter className="w-4 h-4" />, href: "#" },
        { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/chemane_mauro" },
        { icon: <Globe className="w-4 h-4" />, href: "https://www.behance.net/maurochemane/moodboards" },
      ],
    },
    {
      name: "Alicio Lino",
      role: "Parcerias Estratégicas",
      image: "/farley.jpeg",
      socials: [
        { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/alício-lino-89b983347" },
        { icon: <Twitter className="w-4 h-4" />, href: "#" },
        { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/alicio.lino" },
        { icon: <Globe className="w-4 h-4" />, href: "#" },
      ],
    },
    {
      name: "Filipe Sitoe",
      role: "Operações",
      image: "/filipe.png",
      socials: [
        { icon: <Linkedin className="w-4 h-4" />, href: "" },
        { icon: <Twitter className="w-4 h-4" />, href: "#" },
        { icon: <Instagram className="w-4 h-4" />, href: "" },
        { icon: <Globe className="w-4 h-4" />, href: "#" },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="team-section"
      className="container mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-sm md:text-base text-white/60 mb-3">
          Conheça a nossa equipa
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Elenco principal da{" "}
          <span className="text-blue-500">SyncTechX</span>
        </h2>
        <p className="text-white/50 mt-3 text-sm md:text-base">
          Equipa movida por jovens visionários
        </p>
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        <div className="overflow-x-auto pb-4">
          <div
            className={`flex gap-6 w-max transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {team.map((member, index) => (
              <div
                key={index}
                className="w-64 flex-shrink-0 group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 hover:border-blue-500/40"
              >
                <div className="w-full h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-400/70 mb-4 tracking-wide">
                    {member.role}
                  </p>

                  <div className="flex justify-center gap-4">
                    {member.socials.map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-blue-500 transition-colors"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Swipe Hint */}
        <div
          className={`text-center text-xs text-white/40 mt-2 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="inline-block animate-pulse">
            Deslize para ver mais →
          </span>
        </div>
      </div>

      {/* DESKTOP */}
      <div
        className={`hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {team.map((member, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 hover:border-blue-500/40"
          >
            <div className="w-full h-72 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-5 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-blue-400/70 mb-4 tracking-wide">
                {member.role}
              </p>

              <div className="flex justify-center gap-4">
                {member.socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-blue-500 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}