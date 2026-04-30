"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  Megaphone,
  Users,
  Cog,
  Brain,
  ArrowUpRight,
  Globe,
  Smartphone,
  Shield,
  Database,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export function UseCasesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("use-cases");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const agents = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Agente de Vendas",
      description: "Acelere o seu funil de receitas",
      capabilities: [
        "Prospecção e enriquecimento de leads",
        "Follow-ups inteligentes",
        "Sincronização com CRM",
        "Qualificação de leads",
      ],
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: "Agente de Marketing",
      description: "Escale o seu conteúdo e alcance",
      capabilities: [
        "Geração de conteúdos",
        "Otimização SEO",
        "Reaproveitamento de conteúdos",
        "Automatização de campanhas",
      ],
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Agente de Atendimento",
      description: "Melhore a experiência do cliente",
      capabilities: [
        "Onboarding de clientes",
        "Lembretes de progresso",
        "Atualizações de estado",
        "Recolha de feedback",
      ],
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Agente de Operações",
      description: "Otimize as operações internas",
      capabilities: [
        "Automatização de processos",
        "Execução de SOPs",
        "Agendamento de tarefas",
        "Garantia de qualidade",
      ],
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Agente de Conhecimento",
      description: "Capacite a sua equipa",
      capabilities: [
        "Pesquisa inteligente",
        "Gestão de SOPs",
        "Suporte à equipa",
        "Base de conhecimento",
      ],
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Agente de Insights",
      description: "Decisões baseadas em dados",
      capabilities: [
        "Dashboards em tempo real",
        "Sumarização de reuniões",
        "Relatórios automáticos",
        "Deteção de KPIs e tendências",
      ],
    },
  ];

  const extraServices = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Desenvolvimento Web",
      description: "Websites modernos, rápidos e responsivos.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Aplicativos Móveis",
      description: "Apps intuitivos para Android e iOS.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Consultoria de Segurança",
      description: "Proteção de sistemas, dados e acessos.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Infraestrutura & Cloud",
      description: "Servidores, cloud, monitoramento e otimização.",
    },
  ];

  return (
    <section
      id="use-cases"
      className="relative z-10 overflow-hidden py-16 md:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_35%)]" />

      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`mx-auto mb-12 max-w-4xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              Serviços & soluções
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Soluções digitais que impulsionam{" "}
            <span className="text-blue-500">cada parte</span> do seu negócio
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
            Criamos agentes de IA, websites, sistemas, apps e infraestrutura
            digital para tornar a sua operação mais rápida, inteligente e
            escalável.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, index) => (
            <article
              key={agent.title}
              className={`group rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.07] md:p-6 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 90 + 150}ms` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-black">
                {agent.icon}
              </div>

              <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
                {agent.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/55">
                {agent.description}
              </p>

              <div className="mt-6 space-y-3">
                {agent.capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-start gap-3 text-sm text-white/65"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{capability}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all duration-300 group-hover:gap-3"
              >
                Saber mais
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <div
          className={`mt-10 text-center transition-all delay-300 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm italic text-white/45">
            e muito mais...
          </p>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm md:mt-20 md:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 text-center md:flex-row md:items-end md:text-left">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                Outros serviços
              </p>
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                Tecnologia completa para o seu crescimento
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/55">
              Além dos agentes de IA, oferecemos soluções personalizadas para
              posicionar, proteger e escalar o seu negócio no mundo digital.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {extraServices.map((service, index) => (
              <div
                key={service.title}
                className={`group rounded-3xl border border-white/10 bg-black/20 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-blue-500/10 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 250}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-black">
                  {service.icon}
                </div>

                <h4 className="text-lg font-semibold text-white">
                  {service.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}