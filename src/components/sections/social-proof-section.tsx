"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Zap, Layers, Shield } from "lucide-react";

export function SocialProofSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    leads: 0,
    efficiency: 0,
    clients: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const duration = 2000;
          const steps = 60;
          const increment = duration / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setCounters({
              leads: Math.floor(progress * 10),
              efficiency: Math.floor(progress * 94),
              clients: Math.floor(progress * 100),
            });

            if (step >= steps) clearInterval(timer);
          }, increment);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("social-proof");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const credibilityPoints = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "10x suas chamadas agendadas",
      description:
        "Nossos agentes de IA encontram leads e agendam chamadas para você, 24 horas por dia, 7 dias por semana, 365 dias por ano",
      metric: `${counters.leads}x`,
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Operações de entrega simplificadas",
      description:
        "Automatize fluxos de trabalho e reduza a sobrecarga operacional",
      metric: `${counters.efficiency}%`,
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Integrações personalizadas",
      description:
        "Conecte-se perfeitamente com sua pilha de tecnologia existente",
      metric: `${counters.clients}%`,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integração com luvas brancas",
      description: "Implementação premium com especialistas dedicados",
      metric: "24/7",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-24 relative z-10">
      {/* Section Headline */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span className="text-xs font-medium text-white/80">
            Para empresas preparadas para o futuro
          </span>
        </div>

        <h2 className="text-4xl font-light text-white mb-6">
          Construído para ambiciosos,{" "}
          <span className="text-blue-500">Alto crescimento</span> Empresas B2B
        </h2>
      </div>

      {/* Credibility Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {credibilityPoints.map((point, index) => (
          <div
            key={index}
            className={`transition-all duration-700 delay-${
              index * 100 + 300
            } ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm h-full hover:bg-white/10 transition-all duration-300">
              {/* Icon */}
              <div className="mb-6">
                <div className="p-3 rounded-full w-12 h-12 flex items-center justify-center bg-blue-500/10">
                  <div className="text-blue-500">{point.icon}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-medium text-white mb-2">
                {point.title}
              </h3>
              <p className="text-white/60 text-sm mb-4">{point.description}</p>

              {/* Metric */}
              <div className="flex items-center gap-2">
                <span className="text-2xl font-light text-blue-500">
                  {point.metric}
                </span>
                <span className="text-xs text-white/40 uppercase">
                  Melhoria
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
