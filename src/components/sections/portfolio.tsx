"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronUp,
  ChevronDown,
  Sparkles,
  Layers,
} from "lucide-react";

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

  const projects: Project[] = [
    {
      title: "Trilho Académico",
      description:
        "O Trilho Académico é o único teste vocacional em Moçambique que identifica o curso ideal para a tua personalidade e sugere universidades em Moçambique e no estrangeiro, incluindo opções de bolsas.",
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
      description:
        "A Certi PM é uma plataforma especializada em formação e certificação em gestão de projectos, que capacita profissionais e organizações com metodologias práticas e padrões reconhecidos internacionalmente.",
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
      description:
        "A BFashion é uma loja online criada com o propósito de tornar a moda acessível, moderna e cheia de personalidade. Trabalhamos diariamente para oferecer peças que combinam conforto, qualidade e elegância.",
      status: "Live",
      demoLink: "https://bfashion.sale",
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
      description:
        "A Escola de Judo Edson Madeira usa o desporto como ferramenta de educação, disciplina e transformação social. Ajudamos crianças e jovens a acreditarem no seu potencial, dentro e fora do tatami.",
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
      description:
        "Plataforma digital para apresentar a comunidade Bola Ao Cesto, actividades, programas e presença online da marca.",
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

  const filteredProjects = useMemo(() => {
    return filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);
  }, [filter]);

  const project = filteredProjects[selectedProject];

  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedProject, filter]);

  const scrollList = (direction: "up" | "down") => {
    if (!listRef.current) return;

    listRef.current.scrollBy({
      top: direction === "up" ? -180 : 180,
      behavior: "smooth",
    });
  };

  const statusClass = (status: Project["status"]) => {
    if (status === "Live") return "bg-emerald-400 text-emerald-950";
    if (status === "Desenvolvimento") return "bg-yellow-400 text-yellow-950";
    return "bg-orange-400 text-orange-950";
  };

  const canOpenProject = project?.demoLink && project.demoLink !== "#";

  if (!project) return null;

  return (
    <section id="portfolio" className="relative z-10 overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_35%)]" />

      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`mx-auto mb-10 max-w-4xl text-center transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              Portfólio
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Alguns dos nossos{" "}
            <span className="text-blue-500">projectos mais recentes</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
            Uma seleção de aplicativos, plataformas e soluções inteligentes
            desenvolvidas com foco em impacto, performance e qualidade visual.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3 md:mb-12">
          {(["All", "AI", "Platforms"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setSelectedProject(0);
              }}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "border-blue-400/40 bg-blue-500 text-black shadow-lg shadow-blue-500/20"
                  : "border-white/10 bg-white/[0.03] text-white/60 hover:border-blue-400/30 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {cat === "All" ? "Todos" : cat}
            </button>
          ))}
        </div>

        <div
          className={`mx-auto grid max-w-7xl grid-cols-1 gap-6 transition-all delay-150 duration-700 lg:grid-cols-[1.5fr_0.8fr] lg:gap-8 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/20 backdrop-blur-sm md:p-5">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30">
              <img
                src={project.images[activeImageIndex]}
                alt={project.title}
                className="h-[230px] w-full object-cover transition-transform duration-700 hover:scale-[1.025] sm:h-[360px] lg:h-[500px]"
              />

              <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold ${statusClass(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>

                <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-xs font-medium text-white/75 backdrop-blur">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="mt-4 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {project.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImageIndex(i)}
                  className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border transition-all duration-300 md:h-24 md:w-36 ${
                    activeImageIndex === i
                      ? "border-blue-400 ring-2 ring-blue-400/30"
                      : "border-white/10 opacity-65 hover:border-white/30 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.title} preview ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="h-11 w-11 rounded-xl border border-white/10 bg-white object-contain p-1"
                  />

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                      Projecto seleccionado
                    </p>
                    <h3 className="text-2xl font-semibold text-white md:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="max-w-3xl text-sm leading-7 text-white/60 md:text-base">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/65"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={canOpenProject ? project.demoLink : undefined}
                target={canOpenProject ? "_blank" : undefined}
                rel={canOpenProject ? "noopener noreferrer" : undefined}
                aria-disabled={!canOpenProject}
                className={`inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-300 ${
                  canOpenProject
                    ? "bg-blue-500 text-black hover:-translate-y-1 hover:bg-blue-400"
                    : "cursor-not-allowed border border-white/10 bg-white/5 text-white/35"
                }`}
              >
                {canOpenProject ? "Ver projecto" : "Acesso restrito"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/20 backdrop-blur-sm md:p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <div className="mb-1 flex items-center gap-2 text-white">
                  <Layers className="h-4 w-4 text-blue-400" />
                  <h3 className="font-semibold">Lista de projectos</h3>
                </div>
                <p className="text-sm text-white/45">
                  Selecione um projecto para ver os detalhes.
                </p>
              </div>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/50">
                {filteredProjects.length}
              </span>
            </div>

            <div className="hidden justify-center gap-2 lg:flex">
              <button
                onClick={() => scrollList("up")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition hover:border-blue-400/40 hover:text-blue-400"
              >
                <ChevronUp className="h-4 w-4" />
              </button>
            </div>

            <div
              ref={listRef}
              className="mt-3 flex max-h-[650px] gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden lg:pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {filteredProjects.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => setSelectedProject(i)}
                  className={`min-w-[280px] rounded-2xl border p-3 text-left transition-all duration-300 lg:min-w-0 ${
                    selectedProject === i
                      ? "border-blue-400/50 bg-blue-500/10 shadow-lg shadow-blue-500/10"
                      : "border-white/10 bg-black/20 hover:border-white/25 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex gap-3">
                    <img
                      src={p.logo}
                      alt={`${p.title} logo`}
                      className="h-12 w-12 shrink-0 rounded-xl border border-white/10 bg-white object-contain p-1"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-start justify-between gap-2">
                        <h4 className="truncate text-sm font-semibold text-white">
                          {p.title}
                        </h4>
                        <span
                          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusClass(
                            p.status
                          )}`}
                        >
                          {p.status}
                        </span>
                      </div>

                      <p className="line-clamp-2 text-xs leading-5 text-white/50">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="hidden justify-center gap-2 lg:flex">
              <button
                onClick={() => scrollList("down")}
                className="mt-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition hover:border-blue-400/40 hover:text-blue-400"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-3 text-center text-xs text-white/35 lg:hidden">
              Deslize para ver mais projectos →
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}