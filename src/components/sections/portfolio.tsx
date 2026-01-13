"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, ChevronUp, ChevronDown } from "lucide-react";

type Project = {
  title: string;
  description: string;
  status: "Live" | "Restrito" | "Desenvolvimento";
  demoLink: string;
  tools: string[];
  images: string[];
  logo: string;
  category: "AI" | "Platforms";
};

export function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<"All" | "AI" | "Platforms">("All");
  const [selectedProject, setSelectedProject] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const listRef = useRef<HTMLDivElement | null>(null);

  /* ---------------- Intersection Observer ---------------- */
  useEffect(() => {
    const element = document.getElementById("portfolio");
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  /* ---------------- Projects ---------------- */
  const projects: Project[] = [
    {
      title: "Trilho Académico",
      description: "O Trilho Académico é o único teste vocacional em Moçambique que identifica o curso ideal para a tua personalidade e sugere universidades em Moçambique e no estrangeiro, incluindo opções de bolsas.",
      status: "Live",
      demoLink: "https://www.trilhoacademico.edu.mz",
      tools: ["Vite", "TailwindCSS", "OpenAI API"],
      images: [
        "/portfolio/trilho/2.png",
        "/portfolio/trilho/1.png",
        "/portfolio/trilho/3.png",
        "/portfolio/trilho/5.png",
        "/portfolio/trilho/4.png",
      ],
      logo: "/portfolio/trilho/logo.png",
      category: "AI",
    },
    {
      title: "CertiPM",
      description: "A Certi PM é uma plataforma especializada em formação e certificação em gestão de projectos, que capacita profissionais e organizações com metodologias práticas e padrões reconhecidos internacionalmente.",
      status: "Live",
      demoLink: "https://www.certipm.com",
      tools: ["Next.js", "TailwindCSS"],
      images: [
        "/portfolio/certipm/1.png",
        "/portfolio/certipm/2.png",
        "/portfolio/certipm/3.png",
        "/portfolio/certipm/4.png",
        "/portfolio/certipm/5.png",
      ],
      logo: "/portfolio/certipm/logo.png",
      category: "Platforms",
    },
    {
      title: "BFashion",
      description: "A BFashion é uma loja online criada com o propósito de tornar a moda acessível, moderna e cheia de personalidade. Trabalhamos diariamente para oferecer peças que combinam conforto, qualidade e elegância.",
      status: "Desenvolvimento",
      demoLink: "https://bfashion-teste.vercel.app",
      tools: ["Next.js", "TailwindCSS"],
      images: [
        "/portfolio/bfashion/5.png",
        "/portfolio/bfashion/1.png",
        "/portfolio/bfashion/2.png",
        "/portfolio/bfashion/3.png",
        "/portfolio/bfashion/4.png",
      ],
      logo: "/portfolio/bfashion/logo.jpg",
      category: "Platforms",
    },
    {
      title: "EJEM",
      description: "A Escola de Judo Edson Madeira usa o desporto como ferramenta de educação, disciplina e transformação social. Ajudamos crianças e jovens a acreditarem no seu potencial, dentro e fora do tatami.",
      status: "Live",
      demoLink: "https://www.ejem.org",
      tools: ["Next.js", "TailwindCSS"],
      images: [
        "/portfolio/ejem/1.png",
        "/portfolio/ejem/2.png",
        "/portfolio/ejem/3.png",
        "/portfolio/ejem/4.png",
        "/portfolio/ejem/5.png",
      ],
      logo: "/portfolio/ejem/logo.png",
      category: "Platforms",
    },
    {
      title: "BroFessor",
      description: "Platform for the creation of academic papers with AI.",
      status: "Live",
      demoLink: "https://brofessor.niltonnovele.com",
      tools: ["Next.js", "TailwindCSS", "OpenAI API"],
      images: [
        "/portfolio/brofessor/brofessor.png",
        "/portfolio/brofessor/1.png",
        "/portfolio/brofessor/2.png",
        "/portfolio/brofessor/3.png",
        "/portfolio/brofessor/4.png",
      ],
      logo: "/portfolio/brofessor/logo.png",
      category: "AI",
    },
    {
      title: "Bola Ao Cesto",
      description: "A Escola de Judo Edson Madeira usa o desporto como ferramenta de educação, disciplina e transformação social. Ajudamos crianças e jovens a acreditarem no seu potencial, dentro e fora do tatami.",
      status: "Live",
      demoLink: "https://www.bolaocesto.com",
      tools: ["React.js", "TailwindCSS"],
      images: [
        "/portfolio/bac/1.png",
        "/portfolio/bac/2.png",
        "/portfolio/bac/3.png",
        "/portfolio/bac/4.png",
        "/portfolio/bac/5.png",
      ],
      logo: "/portfolio/bac/logo.png",
      category: "Platforms",
    },
    {
      title: "AMECC Platform",
      description:
        "Plataforma para Associação de Estudantes Moçambicanos na Cidade do Cabo.",
      status: "Live",
      demoLink: "https://www.amecc.site",
      tools: ["React", "Node.js", "MongoDB"],
      images: [
        "/portfolio/amecc/1.png",
        "/portfolio/amecc/2.png",
        "/portfolio/amecc/3.png",
        "/portfolio/amecc/4.png",
      ],
      logo: "/portfolio/amecc/logo.png",
      category: "Platforms",
    },
    {
      title: "Compliance Software",
      description:
        "Plataforma de verificação de perfil de candidatos para vagas de emprego.",
      status: "Restrito",
      demoLink: "#",
      tools: ["Next.js", "Supabase", "TailwindCSS"],
      images: [
        "/portfolio/hrci/1.png",
        "/portfolio/hrci/2.png",
        "/portfolio/hrci/3.png",
        "/portfolio/hrci/4.png",
      ],
      logo: "/portfolio/hrci/logo.jpg",
      category: "Platforms",
    },
    {
      title: "TeamSync",
      description:
        "Plataforma de comunicação interna da equipe, dedicada a cada empresa.",
      status: "Restrito",
      demoLink: "#",
      tools: ["Next.js", "Supabase", "TailwindCSS"],
      images: [
        "/portfolio/teamsync/1.png",
        "/portfolio/teamsync/2.png",
        "/portfolio/teamsync/3.png",
        "/portfolio/teamsync/4.png",
        "/portfolio/teamsync/5.png",
      ],
      logo: "/portfolio/teamsync/logo.png",
      category: "Platforms",
    },
    {
      title: "Rapodromo",
      description:
        "Plataforma completa para maior liga de batalhas de rap em Moçambique.",
      status: "Desenvolvimento",
      demoLink: "#",
      tools: ["Next.js", "Supabase", "TailwindCSS"],
      images: [
        "/portfolio/rapodromo/1.png",
        "/portfolio/rapodromo/2.png",
        "/portfolio/rapodromo/3.png",
        "/portfolio/rapodromo/4.png",
        "/portfolio/rapodromo/5.png",
      ],
      logo: "/portfolio/rapodromo/logo.webp",
      category: "Platforms",
    },
  ];

  /* ---------------- Derived Data ---------------- */
  const filteredProjects = useMemo(() => {
    return filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  const project = filteredProjects[selectedProject];

  /* ---------------- Sync image on project change ---------------- */
  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedProject, filter]);

  /* ---------------- Scroll controls ---------------- */
  const scrollList = (direction: "up" | "down") => {
    if (!listRef.current) return;
    listRef.current.scrollBy({
      top: direction === "up" ? -160 : 160,
      behavior: "smooth",
    });
  };

  if (!project) return null;

  /* =============================================================== */
  return (
    <section id="portfolio" className="py-28 relative z-10">
      <div className="container mx-auto px-6">
        {/* ---------------- Header ---------------- */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            <span className="text-xs font-medium text-white/70">
              Portfólio
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Alguns dos nossos{" "}
            <span className="font-semibold">Projetos mais recentes</span>
          </h2>

          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Uma seleção de aplicativos, plataformas e soluções inteligentes que
            desenvolvemos com foco em impacto e qualidade.
          </p>
        </div>

        {/* ---------------- Filters ---------------- */}
        <div className="flex justify-center gap-4 mb-14">
          {["All", "AI", "Platforms"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat as any);
                setSelectedProject(0);
              }}
              className={`px-5 py-2 rounded-xl border transition-all duration-300 font-medium ${
                filter === cat
                  ? "border-white/30 bg-white/10 text-white shadow"
                  : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ---------------- Layout ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 max-w-7xl mx-auto">
          {/* -------- Left -------- */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Main Image */}
            <div className="mb-6 group">
              <img
                src={project.images[activeImageIndex]}
                alt={project.title}
                className="w-full h-[22rem] object-cover rounded-2xl border border-white/10 shadow-xl transition-transform duration-500 group-hover:scale-[1.015]"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4 mb-10">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`relative rounded-lg overflow-hidden border transition-all ${
                    activeImageIndex === i
                      ? "border-white/40 ring-2 ring-white/70"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="h-24 w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Info */}
            <h3 className="text-3xl font-semibold text-white mb-3">
              {project.title}
            </h3>

            <p className="text-white/70 mb-5 text-lg leading-relaxed">
              {project.description}
            </p>

            {/* Status */}
            <div className="flex items-center gap-2 mb-6">
              <span
                className={`w-2 h-2 rounded-full ${
                  project.status === "Live"
                    ? "bg-green-500"
                    : project.status === "Desenvolvimento"
                    ? "bg-yellow-400"
                    : "bg-orange-400"
                }`}
              />
              <span className="text-sm text-white/60">
                {project.status}
              </span>
            </div>

            {/* Tools */}
            {/* <div className="mb-8">
              <h4 className="text-white font-medium mb-3">
                Ferramentas utilizadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full border border-white/10 text-sm text-white/70 bg-white/5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div> */}

            {/* CTA */}
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-medium hover:bg-white hover:text-black transition-all shadow"
            >
              Ver projeto
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* -------- Right -------- */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => scrollList("up")}
              className="p-2 mb-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-white/60"
            >
              <ChevronUp />
            </button>

            <div
              ref={listRef}
              className="flex flex-col gap-3 max-h-[520px] overflow-y-auto pr-1 scrollbar-hide"
            >
              {filteredProjects.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => setSelectedProject(i)}
                  className={`p-3 flex gap-3 rounded-xl border transition-all text-left ${
                    selectedProject === i
                      ? "border-white/30 bg-white/10 shadow"
                      : "border-white/10 hover:border-white/30 hover:bg-white/5"
                  }`}
                >
                  <img
                    src={p.logo}
                    alt=""
                    className="w-10 h-10 object-contain rounded-md border border-white/10"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-white mb-1">
                      {p.title}
                    </h4>
                    <p className="text-xs text-white/60 line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      p.status === "Live"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {p.status}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollList("down")}
              className="p-2 mt-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-white/60"
            >
              <ChevronDown />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
