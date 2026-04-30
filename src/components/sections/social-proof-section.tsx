"use client";

import { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  Zap,
  Layers,
  Shield,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export function SocialProofSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    leads: 0,
    efficiency: 0,
    clients: 0,
  });

  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);

        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const duration = 2000;
        const steps = 60;
        const increment = duration / steps;

        let step = 0;

        const timer = setInterval(() => {
          step++;

          const progress = step / steps;
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setCounters({
            leads: Math.floor(easedProgress * 10),
            efficiency: Math.floor(easedProgress * 94),
            clients: Math.floor(easedProgress * 100),
          });

          if (step >= steps) clearInterval(timer);
        }, increment);
      },
      { threshold: 0.15 }
    );

    const element = document.getElementById("social-proof");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const credibilityPoints = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Mais oportunidades comerciais",
      description:
        "Automatize prospecção, follow-ups e qualificação para manter o funil activo todos os dias.",
      metric: `${counters.leads}x`,
      label: "mais velocidade",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Operações mais simples",
      description:
        "Reduza tarefas repetitivas, organize processos e melhore a produtividade da equipa.",
      metric: `${counters.efficiency}%`,
      label: "mais eficiência",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Integrações à medida",
      description:
        "Conectamos websites, sistemas, CRMs, bases de dados e ferramentas que já usa.",
      metric: `${counters.clients}%`,
      label: "adaptável",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Implementação acompanhada",
      description:
        "Apoio técnico, orientação estratégica e suporte durante todo o processo de implementação.",
      metric: "24/7",
      label: "presença digital",
    },
  ];

  return (
    <section
      id="social-proof"
      className="relative z-10 overflow-hidden py-16 md:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_35%)]" />

      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`mx-auto mb-12 max-w-4xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              Resultados digitais
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Construído para empresas que querem{" "}
            <span className="text-blue-500">crescer com tecnologia</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
            Criamos soluções digitais que ajudam negócios a vender melhor,
            automatizar processos, reduzir esforço manual e ganhar mais
            consistência operacional.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {credibilityPoints.map((point, index) => (
            <article
              key={point.title}
              className={`group rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.07] md:p-6 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 150}ms` }}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-black">
                  {point.icon}
                </div>

                <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/45">
                  {point.label}
                </div>
              </div>

              <div className="mb-5">
                <span className="text-4xl font-semibold tracking-tight text-blue-400 md:text-5xl">
                  {point.metric}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white">
                {point.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                {point.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all duration-300 group-hover:gap-3">
                <span>Ver potencial</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>

        <div
          className={`mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 text-center backdrop-blur-sm transition-all delay-500 duration-700 md:flex-row md:p-6 md:text-left ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <h3 className="text-lg font-semibold text-white">
              Pronto para melhorar a presença digital da sua empresa?
            </h3>
            <p className="mt-1 text-sm leading-6 text-white/55">
              Vamos identificar oportunidades rápidas para automatizar,
              organizar e escalar o seu negócio.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-blue-400 md:w-auto"
          >
            Falar connosco
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}