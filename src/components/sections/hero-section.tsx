"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Pre-calculated widths for all texts
  const [textWidths, setTextWidths] = useState<number[]>([]);
  const [dynamicWidth, setDynamicWidth] = useState("auto");

  const rotatingTexts = [
    "Aumentam as vendas",
    "Impulsionam o marketing",
    "Otimizam as operações",
    "Escalam a entrega",
  ];

  // Pre-calculate all text widths on mount for smoother animations
  useEffect(() => {
    if (measureRef.current) {
      const widths: number[] = [];
      const measureElement = measureRef.current;

      rotatingTexts.forEach((text) => {
        measureElement.textContent = text;
        widths.push(measureElement.offsetWidth);
      });

      setTextWidths(widths);
      setDynamicWidth(`${widths[0]}px`); // Set initial width
    }
  }, []);

  // Update width when active index changes
  useEffect(() => {
    if (textWidths.length > 0) {
      setDynamicWidth(`${textWidths[activeIndex]}px`);
    }
  }, [activeIndex, textWidths]);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setPreviousIndex(activeIndex);
      setIsAnimating(true);

      // After animation completes, update the active index
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsAnimating(false);
      }, 700); // Animation duration
    }, 3000); // Total duration per word

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6">
      {/* Hidden element for measuring text widths */}
      <span
        ref={measureRef}
        className="absolute opacity-0 pointer-events-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium"
        style={{ top: "-9999px" }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 mb-6 md:mb-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-medium text-white/80 tracking-wide">
            SyncTechX
          </span>
        </div>

        {/* Enhanced Text Animation */}
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6 md:mb-8 leading-tight transition-all duration-1000 delay-200 px-4 md:px-0 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Agentes de IA personalizados que{" "}
          <span
            ref={containerRef}
            className="inline-block relative align-top overflow-hidden"
            style={{
              width: dynamicWidth,
              height: "1.2em", // keeps a fixed height for smooth transitions
              display: "inline-block",
            }}
          >
            {rotatingTexts.map((text, index) => (
              <span
                key={index}
                className={`absolute left-0 font-medium text-blue-500 whitespace-nowrap transform transition-all duration-700 ease-in-out ${
                  index === activeIndex
                    ? "translate-y-0 opacity-100"
                    : index === previousIndex && isAnimating
                    ? "-translate-y-full opacity-0"
                    : "translate-y-full opacity-0 pointer-events-none"
                }`}
              >
                {text}
              </span>
            ))}
          </span>{" "}
          do seu negócio
        </h1>

        {/* Subheadline */}
        <p
          className={`text-sm md:text-base lg:text-lg text-white/70 mb-8 md:mb-12 max-w-xl md:max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 px-6 md:px-0 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Projetamos sistemas de IA de alto desempenho e totalmente integrados,
          adaptados às suas operações — das vendas à prestação de serviços.
          Desenvolvidos exclusivamente para equipes B2B com visão de futuro.
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="#contact">
            <Button
              size="lg"
              className="group px-6 py-4 md:px-8 md:py-6 text-sm font-medium bg-blue-500 hover:bg-blue-500/90 text-black rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
            >
              Agende uma chamada de descoberta
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
