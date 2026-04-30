"use client";

import { useEffect, useState } from "react";
import { Check, Zap, Users, Shield, Rocket, ArrowUpRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("why-choose-us");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const benefits = [
    {
      title: "Soluções personalizadas",
      text: "Criamos ferramentas feitas para o seu processo real, sem depender de soluções genéricas.",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: "Execução rápida",
      text: "Equipa ágil, próxima do cliente e focada em transformar ideias em produtos funcionais.",
      icon: <Rocket className="h-5 w-5" />,
    },
    {
      title: "Segurança e suporte",
      text: "Implementações com estrutura, acompanhamento técnico e suporte contínuo.",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Modelos flexíveis",
      text: "Trabalhamos com projectos completos, melhorias contínuas ou suporte mensal.",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  const stats = [
    { value: "100%", label: "Foco no cliente" },
    { value: "24/7", label: "Presença digital" },
    { value: "IA", label: "Automação inteligente" },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden py-16 md:py-24 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-6 top-20 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl md:left-10" />
        <div className="absolute bottom-20 right-6 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl md:right-10" />

        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(59,130,246,0.55) 1px, transparent 0)",
              backgroundSize: "44px 44px",
            }}
          />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* Left */}
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                  Por que nos escolher
                </span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-6xl">
                Mais do que tecnologia.{" "}
                <span className="text-blue-500">
                  Construímos vantagem digital.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                Ajudamos empresas a transformar processos, ideias e serviços em
                soluções digitais modernas, seguras e escaláveis. Do website ao
                sistema interno, da automação à estratégia, trabalhamos para
                entregar impacto real.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-center backdrop-blur-sm"
                  >
                    <p className="text-xl font-semibold text-white md:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/45">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a href="#contact">
                  <Button
                    size="lg"
                    className="group h-14 w-full rounded-full bg-blue-500 px-7 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400 sm:w-auto"
                  >
                    Vamos criar o seu projecto
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right */}
            <div
              className={`grid gap-4 transition-all delay-150 duration-700 sm:grid-cols-2 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.07] md:p-6"
                  style={{ transitionDelay: `${250 + index * 100}ms` }}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-black">
                    {benefit.icon}
                  </div>

                  <div className="mb-3 flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                    <h3 className="text-lg font-semibold text-white">
                      {benefit.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-7 text-white/55">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom strip */}
          <div
            className={`mt-10 rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 text-center backdrop-blur-sm transition-all delay-300 duration-700 md:mt-14 md:p-6 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mx-auto max-w-4xl text-sm leading-7 text-white/60 md:text-base">
              Não entregamos apenas páginas bonitas. Entregamos experiências
              digitais pensadas para vender melhor, organizar processos,
              automatizar tarefas e posicionar a sua marca com mais força no
              mercado.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-8 top-1/4 h-2 w-2 rounded-full bg-blue-500/40" />
      <div className="absolute right-12 top-3/4 h-1 w-1 rounded-full bg-blue-500/60" />
      <div className="absolute bottom-1/3 left-1/4 h-1.5 w-1.5 rounded-full bg-blue-500/30" />
    </section>
  );
}