"use client";

import { useEffect, useRef, useState } from "react";
import { Linkedin, Instagram, Twitter, Globe, ArrowUpRight } from "lucide-react";

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

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const team = [
    {
      name: "Nilton Novele",
      role: "Tecnologia",
      image: "/nilton.jpeg",
      socials: [
        {
          label: "LinkedIn",
          icon: <Linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/in/nilton-novele-82211821b",
        },
        {
          label: "Instagram",
          icon: <Instagram className="h-4 w-4" />,
          href: "https://www.instagram.com/niltonnovele",
        },
        {
          label: "Twitter",
          icon: <Twitter className="h-4 w-4" />,
          href: "https://x.com/nilton_novele",
        },
        {
          label: "Website",
          icon: <Globe className="h-4 w-4" />,
          href: "https://www.niltonnovele.com/",
        },
      ],
    },
    {
      name: "Bionda Shirley",
      role: "Marketing",
      image: "/bionda1.png",
      socials: [
        {
          label: "LinkedIn",
          icon: <Linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com",
        },
        {
          label: "Twitter",
          icon: <Twitter className="h-4 w-4" />,
          href: "https://x.com/",
        },
        {
          label: "Instagram",
          icon: <Instagram className="h-4 w-4" />,
          href: "https://www.instagram.com/biondaa_shirley",
        },
        {
          label: "Website",
          icon: <Globe className="h-4 w-4" />,
          href: "/",
        },
      ],
    },
    {
      name: "Henzel Tibana",
      role: "Gestor de Projectos",
      image: "/jumpex.jpg",
      socials: [
        {
          label: "LinkedIn",
          icon: <Linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/in/henzel-tibana-a07068211",
        },
        {
          label: "Twitter",
          icon: <Twitter className="h-4 w-4" />,
          href: "https://x.com/HenzelJt",
        },
        {
          label: "Instagram",
          icon: <Instagram className="h-4 w-4" />,
          href: "https://www.instagram.com/henzel_tibs",
        },
        {
          label: "Website",
          icon: <Globe className="h-4 w-4" />,
          href: "https://henzeltibana.com",
        },
      ],
    },
    {
      name: "Mauro Chemane",
      role: "Direção Criativa",
      image: "/beto.jpeg",
      socials: [
        {
          label: "LinkedIn",
          icon: <Linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/in/mauro-chemane/",
        },
        {
          label: "Twitter",
          icon: <Twitter className="h-4 w-4" />,
          href: "#",
        },
        {
          label: "Instagram",
          icon: <Instagram className="h-4 w-4" />,
          href: "https://www.instagram.com/chemane_mauro",
        },
        {
          label: "Website",
          icon: <Globe className="h-4 w-4" />,
          href: "https://www.behance.net/maurochemane/moodboards",
        },
      ],
    },
    {
      name: "Alicio Lino",
      role: "Parcerias Estratégicas",
      image: "/farley.jpeg",
      socials: [
        {
          label: "LinkedIn",
          icon: <Linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/in/alício-lino-89b983347",
        },
        {
          label: "Twitter",
          icon: <Twitter className="h-4 w-4" />,
          href: "#",
        },
        {
          label: "Instagram",
          icon: <Instagram className="h-4 w-4" />,
          href: "https://www.instagram.com/alicio.lino",
        },
        {
          label: "Website",
          icon: <Globe className="h-4 w-4" />,
          href: "#",
        },
      ],
    },
    {
      name: "Filipe Sitoe",
      role: "Operações",
      image: "/filipe.jpeg",
      socials: [
        {
          label: "LinkedIn",
          icon: <Linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/in/filipe-sitoe-ab3a023a1/",
        },
        {
          label: "Twitter",
          icon: <Twitter className="h-4 w-4" />,
          href: "#",
        },
        {
          label: "Instagram",
          icon: <Instagram className="h-4 w-4" />,
          href: "",
        },
        {
          label: "Website",
          icon: <Globe className="h-4 w-4" />,
          href: "#",
        },
      ],
    },
  ];

  const validSocials = (socials: (typeof team)[number]["socials"]) =>
    socials.filter((social) => social.href && social.href !== "#");

  return (
    <section
      ref={sectionRef}
      id="about-founder"
      className="relative z-10 overflow-hidden py-16 md:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_35%)]" />

      <div className="container mx-auto px-4 md:px-8">
        <div
          className={`mx-auto mb-12 max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              Conheça a equipa
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Elenco principal da{" "}
            <span className="text-blue-500">SyncTechX</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
            Uma equipa multidisciplinar que combina tecnologia, estratégia,
            criatividade, marketing e operações para criar soluções digitais com
            impacto real.
          </p>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div
            className={`mb-4 flex items-center justify-center gap-2 text-sm text-white/45 transition-all delay-150 duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <span>Deslize para ver</span>
            <span className="animate-pulse">→</span>
          </div>

          <div
            className={`-mx-4 overflow-x-auto px-4 pb-4 transition-all delay-150 duration-700 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex snap-x snap-mandatory gap-5">
              {team.map((member) => (
                <article
                  key={member.name}
                  className="group w-[82vw] max-w-[340px] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.07]"
                >
                  <div className="relative h-[430px] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                      <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs font-medium text-white/75 backdrop-blur-md">
                        {member.role}
                      </span>

                      {validSocials(member.socials)[0] && (
                        <a
                          href={validSocials(member.socials)[0].href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} profile`}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/35 text-white backdrop-blur-md transition hover:bg-blue-500 hover:text-black"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-2xl font-semibold text-white">
                        {member.name}
                      </h3>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {validSocials(member.socials).map((social) => (
                          <a
                            key={`${member.name}-${social.label}`}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} ${social.label}`}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/75 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500 hover:text-black"
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop grid */}
        <div
          className={`hidden gap-5 transition-all delay-150 duration-700 md:grid sm:grid-cols-2 lg:grid-cols-3 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {team.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.07]"
            >
              <div className="relative h-[360px] overflow-hidden sm:h-[390px] lg:h-[420px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs font-medium text-white/75 backdrop-blur-md">
                    {member.role}
                  </span>

                  {validSocials(member.socials)[0] && (
                    <a
                      href={validSocials(member.socials)[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} profile`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/35 text-white backdrop-blur-md transition hover:bg-blue-500 hover:text-black"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-2xl font-semibold text-white">
                    {member.name}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {validSocials(member.socials).map((social) => (
                      <a
                        key={`${member.name}-${social.label}`}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} ${social.label}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/75 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500 hover:text-black"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className={`mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 text-center backdrop-blur-sm transition-all delay-300 duration-700 md:flex-row md:p-6 md:text-left ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quer trabalhar connosco no seu próximo projecto?
            </h3>
            <p className="mt-1 text-sm text-white/55">
              Fale com a nossa equipa e descubra como podemos transformar a sua
              ideia numa solução digital.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-blue-400 md:w-auto"
          >
            Falar com a equipa
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}