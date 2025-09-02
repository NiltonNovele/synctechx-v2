"use client";

import { useEffect, useState } from "react";
import { Linkedin, Instagram, Twitter, Globe } from "lucide-react";

export function AboutFounderSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("team-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const team = [
    {
      name: "Nilton Novele",
      role: "Líder de Tecnologia",
      image: "/nilton.jpeg",
      socials: [
        {
          icon: <Linkedin className="w-4 h-4" />,
          href: "https://www.linkedin.com/in/nilton-novele-82211821b",
        },
        {
          icon: <Instagram className="w-4 h-4" />,
          href: "https://www.instagram.com/niltonnovele",
        },
        {
          icon: <Twitter className="w-4 h-4" />,
          href: "https://x.com/nilton_novele",
        },
        {
          icon: <Globe className="w-4 h-4" />,
          href: "https://www.niltonnovele.com/",
        },
      ],
    },
    {
      name: "Bionda Shirley",
      role: "Líder de marketing",
      image: "/bionda1.png",
      socials: [
        {
          icon: <Linkedin className="w-4 h-4" />,
          href: "https://www.linkedin.com",
        },
        { icon: <Twitter className="w-4 h-4" />, href: "https://x.com/" },
        {
          icon: <Instagram className="w-4 h-4" />,
          href: "https://www.instagram.com/biondaa_shirley",
        },
        { icon: <Globe className="w-4 h-4" />, href: "/" },
      ],
    },
    {
      name: "Henzel Tibana",
      role: "Líder de Operações",
      image: "/jumpex.jpg",
      socials: [
        {
          icon: <Linkedin className="w-4 h-4" />,
          href: "https://www.linkedin.com/in/henzel-tibana-a07068211",
        },
        {
          icon: <Twitter className="w-4 h-4" />,
          href: "https://x.com/HenzelJt",
        },
        {
          icon: <Instagram className="w-4 h-4" />,
          href: "https://www.instagram.com/henzel_tibs",
        },
        {
          icon: <Globe className="w-4 h-4" />,
          href: "https://henzeltibana.com",
        },
      ],
    },
    {
      name: "Mauro Chemane",
      role: "Líder Criativo e de Marca",
      image: "/beto.jpeg",
      socials: [
        {
          icon: <Linkedin className="w-4 h-4" />,
          href: "https://www.linkedin.com/in/mauro-chemane/?fbclid=PAZXh0bgNhZW0CMTEAAadjUpga5koVjjzyvgOVYOeGJX4jDt4lAzdElmjeKpnaVyyv0ivHXRnrEWw4LQ_aem_6lOL0vpsGo7Adl2h8l3UAQ",
        },
        { icon: <Twitter className="w-4 h-4" />, href: "#" },
        {
          icon: <Instagram className="w-4 h-4" />,
          href: "https://www.instagram.com/chemane_mauro",
        },
        {
          icon: <Globe className="w-4 h-4" />,
          href: "https://www.behance.net/maurochemane/moodboards",
        },
      ],
    },
  ];

  return (
    <section
      id="team-section"
      className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-sm md:text-base text-white/60 mb-2">
          Conheça a nossa equipa
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Elenco principal da <span className="text-blue-500">SyncTechX</span>
        </h2>
        <p className="text-white/50 mt-2">Equipa movida por jovens</p>
      </div>

      {/* Team Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105"
          >
            {/* Profile Image */}
            <div className="w-full h-64 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-sm text-blue-500/60 mb-4">{member.role}</p>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-4">
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
