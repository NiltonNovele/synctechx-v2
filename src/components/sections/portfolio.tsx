"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUpRight, ChevronUp, ChevronDown } from "lucide-react";

export function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  const [filter, setFilter] = useState("All");
  const [mainImage, setMainImage] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("portfolio");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const scrollList = (direction: "up" | "down") => {
    if (!listRef.current) return;
    const scrollAmount = 150;
    listRef.current.scrollBy({
      top: direction === "up" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const projects = [
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
      title: "AMECC Platform",
      description:
        "Plataforma para Associação de Estudantes Moçambicanos na Cidade do Cabo.",
      status: "Live",
      demoLink: "https://www.amecc.site",
      tools: ["React", "Node.js", "MongoDB"],
      images: [
        "/portfolio/amecc/3.png",
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
        "/portfolio/hrci/3.png",
        "/portfolio/hrci/4.png",
        "/portfolio/hrci/3.png",
        "/portfolio/hrci/2.png",
        "/portfolio/hrci/1.png",
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
        "/portfolio/teamsync/3.png",
        "/portfolio/teamsync/1.png",
        "/portfolio/teamsync/2.png",
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
        "/portfolio/rapodromo/3.png",
        "/portfolio/rapodromo/1.png",
        "/portfolio/rapodromo/2.png",
        "/portfolio/rapodromo/4.png",
        "/portfolio/rapodromo/5.png",
      ],
      logo: "/portfolio/rapodromo/logo.webp",
      category: "Platforms",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const project = filteredProjects[selectedProject] || filteredProjects[0];

  useEffect(() => {
    if (project) {
      setMainImage(project.images[0]);
    }
  }, [project]);

  return (
    <section id="portfolio" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            <span className="text-xs font-medium text-white/70">Portfólio</span>
          </div>

          <h2 className="text-4xl font-light text-white mb-6 leading-tight">
            Alguns dos nossos{" "}
            <span className="text-white font-semibold">
              Projetos mais recentes
            </span>
          </h2>

          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Uma seleção de aplicativos, plataformas e soluções inteligentes que
            construímos.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {["All", "AI", "Platforms"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setSelectedProject(0);
              }}
              className={`px-5 py-2 rounded-xl border transition-all duration-300 font-medium ${
                filter === cat
                  ? "border-white/30 bg-white/10 text-white shadow-md"
                  : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Left Panel */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {project && (
              <>
                {/* Big Image */}
                <div className="mb-6 relative group">
                  <img
                    src={mainImage || project.images[0]}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-2xl border border-white/10 shadow-xl transition-all duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {project.images.slice(1).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      onClick={() => setMainImage(img)}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className={`h-24 w-full object-cover rounded-lg border cursor-pointer transition-all duration-300 ${
                        mainImage === img
                          ? "border-white/40 ring-2 ring-white/70"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    />
                  ))}
                </div>

                {/* Info */}
                <h3 className="text-3xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Status */}
                <div className="flex items-center gap-2 mb-6">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      project.status === "Live"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  />
                  <span className="text-sm text-white/60">
                    {project.status}
                  </span>
                </div>

                {/* Tools */}
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">
                    Ferramentas utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full border border-white/10 text-sm text-white/70 bg-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Demo Button */}
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-white/30 text-white font-medium hover:bg-white hover:text-black transition-all shadow-md"
                >
                  Ver
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </>
            )}
          </div>

          {/* Right Panel */}
          <div className="relative flex flex-col items-center">
            {/* Scroll Up */}
            <button
              onClick={() => scrollList("up")}
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:text-white text-white/60 mb-2 shadow-sm"
            >
              <ChevronUp className="w-5 h-5" />
            </button>

            {/* Project List */}
            <div
              ref={listRef}
              className={`flex flex-col gap-3 transition-all duration-700 max-h-[500px] overflow-y-auto pr-1 scrollbar-hide ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {filteredProjects.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedProject(i)}
                  className={`p-3 flex items-center gap-3 rounded-xl border transition-all duration-300 text-left backdrop-blur-sm ${
                    selectedProject === i
                      ? "border-white/30 bg-white/10 shadow-lg"
                      : "border-white/10 hover:border-white/30 hover:bg-white/5"
                  }`}
                >
                  <img
                    src={p.logo}
                    alt={`${p.title} logo`}
                    className="w-10 h-10 object-contain rounded-md border border-white/10"
                  />
                  <div className="flex-1">
                    <h4
                      className={`text-sm font-medium mb-1 ${
                        selectedProject === i ? "text-white" : "text-white/80"
                      }`}
                    >
                      {p.title}
                    </h4>
                    <p className="text-xs text-white/60 line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      p.status === "Live" ? "text-green-400" : "text-yellow-400"
                    }`}
                  >
                    {p.status}
                  </span>
                </button>
              ))}
            </div>

            {/* Scroll Down */}
            <button
              onClick={() => scrollList("down")}
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:text-white text-white/60 mt-2 shadow-sm"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
