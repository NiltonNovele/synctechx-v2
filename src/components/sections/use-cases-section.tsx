"use client";

import { useEffect, useState } from "react";
import { Mail, Megaphone, Users, Cog, Brain, ArrowUpRight } from "lucide-react";

export function UseCasesSection() {
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

    const element = document.getElementById("use-cases");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const agents = [
    {
      icon: <Mail className="w-6 h-6" />,
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
      icon: <Megaphone className="w-6 h-6" />,
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
      icon: <Users className="w-6 h-6" />,
      title: "Agente de Atendimento ao Cliente",
      description: "Melhore a experiência do cliente",
      capabilities: [
        "Onboarding de clientes",
        "Lembretes de progresso",
        "Atualizações de estado",
        "Recolha de feedback",
      ],
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Agente de Operações",
      description: "Otimize as operações",
      capabilities: [
        "Automatização de processos",
        "Execução de SOPs",
        "Agendamento de tarefas",
        "Garantia de qualidade",
      ],
    },
    {
      icon: <Brain className="w-6 h-6" />,
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
      icon: <Brain className="w-6 h-6" />,
      title: "Agente de Insights",
      description: "Liberte decisões baseadas em dados",
      capabilities: [
        "Dashboards de relatórios em tempo real",
        "Sumarização de reuniões e chamadas",
        "Instantâneos automáticos de desempenho",
        "Deteção de KPIs e tendências",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-6 py-24 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span className="text-xs font-medium text-white/80">
            Portfólio de Agentes de IA
          </span>
        </div>

        <h2 className="text-4xl font-light text-white mb-6 leading-tight">
          Agentes que impulsionam{" "}
          <span className="text-blue-500">cada parte</span> do seu negócio
        </h2>

        <p className="text-lg text-white/60 max-w-3xl mx-auto">
          Agentes de IA especializados, projetados para transformar cada função
          crítica da sua organização
        </p>
      </div>

      {/* Agent Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {agents.map((agent, index) => (
          <div
            key={index}
            className={`group transition-all duration-700 delay-${
              index * 100 + 300
            } ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full group-hover:border-blue-500/30">
              {/* Icon */}
              <div className="mb-6">
                <div className="p-3 rounded-full w-12 h-12 flex items-center justify-center bg-blue-500/10 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-500">{agent.icon}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-white mb-2 group-hover:text-blue-500 transition-colors duration-300">
                {agent.title}
              </h3>
              <p className="text-white/60 mb-6">{agent.description}</p>

              {/* Capabilities List */}
              <ul className="space-y-3 mb-6">
                {agent.capabilities.map((capability, capIndex) => (
                  <li
                    key={capIndex}
                    className="flex items-center gap-3 text-white/70"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-sm">{capability}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="flex items-center gap-2 text-sm font-medium text-blue-500 group-hover:gap-3 transition-all duration-300">
                <span>Saber mais</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* "And much more..." text */}
      <div className="text-right mt-12 pr-10 mr-12">
        <p className="text-white/40 italic">e muito mais...</p>
      </div>
    </div>
  );
}
