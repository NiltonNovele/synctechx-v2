"use client";

import { useEffect, useRef, useState } from "react";
import {
  Search,
  Cpu,
  Settings,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const steps = [
    {
      number: "01",
      icon: <Search className="h-6 w-6" />,
      title: "Descoberta + Mapeamento",
      description: "Entendemos o seu negócio, processos e oportunidades.",
      details: [
        "Análise dos processos actuais da empresa",
        "Identificação de tarefas manuais e repetitivas",
        "Mapeamento de oportunidades de automação",
        "Definição de prioridades com foco em impacto",
        "Planeamento técnico da solução ideal",
      ],
    },
    {
      number: "02",
      icon: <Cpu className="h-6 w-6" />,
      title: "Arquitetura + Desenvolvimento",
      description: "Criamos a solução digital alinhada aos seus objectivos.",
      details: [
        "Desenho da arquitectura da solução",
        "Integração com sistemas e ferramentas existentes",
        "Desenvolvimento de website, sistema, app ou agente de IA",
        "Configuração de segurança, dados e permissões",
        "Validação visual e funcional com a sua equipa",
      ],
    },
    {
      number: "03",
      icon: <Settings className="h-6 w-6" />,
      title: "Integração + Otimização",
      description: "Implementamos, ajustamos e acompanhamos os resultados.",
      details: [
        "Publicação e configuração no ambiente final",
        "Treinamento e suporte à equipa",
        "Monitoramento de desempenho",
        "Melhorias contínuas com base em dados reais",
        "Suporte técnico para evolução da solução",
      ],
    },
  ];

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

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative z-10 overflow-hidden py-16 md:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_35%)]" />

      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`mx-auto mb-12 max-w-4xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              Nosso processo
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Da ideia à solução, seguimos um{" "}
            <span className="text-blue-500">processo simples e eficiente</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
            Trabalhamos em etapas claras para entender o problema, construir a
            solução certa e garantir que tudo funcione bem no seu negócio.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 lg:block" />

          <div className="grid gap-5 lg:gap-8">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`group relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.07] md:p-8 lg:ml-14 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 130 + 150}ms` }}
              >
                <div className="absolute -left-[4.15rem] top-8 hidden h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500 text-black shadow-lg shadow-blue-500/20 lg:flex">
                  {step.icon}
                </div>

                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                  <div>
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-black lg:hidden">
                        {step.icon}
                      </div>

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                          Passo {step.number}
                        </p>
                        <h3 className="mt-1 text-2xl font-semibold text-white md:text-3xl">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="max-w-md text-sm leading-7 text-white/55 md:text-base">
                      {step.description}
                    </p>

                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all duration-300 group-hover:gap-3"
                    >
                      Começar esta etapa
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {step.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <p className="text-sm leading-6 text-white/65">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          className={`mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 text-center backdrop-blur-sm transition-all delay-500 duration-700 md:flex-row md:p-6 md:text-left ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <h3 className="text-lg font-semibold text-white">
              Pronto para iniciar o seu projecto?
            </h3>
            <p className="mt-1 text-sm text-white/55">
              Vamos analisar a sua ideia e definir o melhor caminho técnico.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-blue-400 md:w-auto"
          >
            Falar connosco
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}