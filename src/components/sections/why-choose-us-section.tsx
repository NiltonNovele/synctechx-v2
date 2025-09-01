"use client";

import { useEffect, useState } from "react";
import { Check, Zap, Users, Shield, Rocket } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function WhyChooseUsSection() {
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

    const element = document.getElementById("why-choose-us");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const benefits = [
    {
      text: "Construído 100% personalizado em suas ferramentas (não são hacks sem código)",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      text: "Agência ágil, liderada pelo fundador — sem rodeios",
      icon: <Rocket className="w-5 h-5" />,
    },
    {
      text: "Estrutura comprovada, suporte completo e personalizado",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      text: "Retentores flexíveis ou construções completas",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl animate-pulse-slower" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.3) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-medium text-white/80">
              Por que nos escolher
            </span>
          </div>

          {/* Main Headline */}
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Nós não apenas automatizamos.{" "}
            <span className="text-blue-500">
              Nós projetamos a alavancagem da IA.
            </span>
          </h2>

          {/* Description */}
          <p
            className={`text-xl text-white/70 mb-16 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            A maioria das "ferramentas de IA" são superficiais. Nós vamos mais a
            fundo — projetando agentes que se integram aos seus fluxos de
            trabalho, equipe e stack reais.{" "}
            <span className="text-white">
              Isto não é SaaS. É uma parceria de alto nível para desbloquear
              margem, escala e velocidade por meio da IA.
            </span>
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                  <div className="text-blue-500">{benefit.icon}</div>
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-white font-medium leading-relaxed">
                      {benefit.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div
            className={`transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <a href="#contact">
              <Button
                size="lg"
                className="group px-8 py-6 text-sm font-medium bg-blue-500 hover:bg-blue-500/90 text-black rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20 hover:scale-105"
              >
                Vamos projetar sua vantagem de IA
                <Zap className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 w-2 h-2 bg-blue-500/40 rounded-full animate-float-slow" />
      <div className="absolute top-3/4 right-12 w-1 h-1 bg-blue-500/60 rounded-full animate-float-medium" />
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-blue-500/30 rounded-full animate-float-fast" />
    </section>
  );
}
