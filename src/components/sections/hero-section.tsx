"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/src/components/ui/button";
import { ArrowRight, MessageCircle, X } from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  // --- CHAT STATE ---
  const [chatOpen, setChatOpen] = useState(false);
  const [userInput, setUserInput] = useState(""); // Novo estado para input

  // Pre-calculated widths for all texts
  const [textWidths, setTextWidths] = useState<number[]>([]);
  const [dynamicWidth, setDynamicWidth] = useState("auto");

  const rotatingTexts = [
    "Aumentam as vendas",
    "Impulsionam o marketing",
    "Otimizam as operações",
    "Escalam a entrega",
  ];

  // Services list for the AI assistant
  const services = [
    { name: "IA", section: "#how-it-works" },
    { name: "Aplicativos Móveis", section: "#use-cases" },
    { name: "Consultoria de Segurança", section: "#use-cases" },
    { name: "Contato com a equipe", section: "#contact" },
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

      {/* --- AI Assistant Chat Bubble --- */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Icon */}
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="relative w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <MessageCircle className="w-7 h-7 text-black" />
            {/* Small pulsating ring */}
            <span className="absolute inset-0 rounded-full animate-ping bg-blue-500/40"></span>
          </button>
        )}

        {/* Chat Box */}
        {chatOpen && (
          <div className="w-80 bg-gray-900 border border-white/10 rounded-2xl shadow-xl flex flex-col">
            {/* Close button */}
            <button
              onClick={() => setChatOpen(false)}
              className="absolute top-3 right-3 text-white/60 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  🤖
                </div>
                <h4 className="text-white font-medium">Assistente SyncTechX</h4>
              </div>
              <p className="text-white/60 text-sm mt-2">
                Olá! Como posso te ajudar hoje? Escolha uma opção ou escreva
                abaixo.
              </p>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-60">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.section}
                  onClick={() => setChatOpen(false)}
                  className="block px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-black transition-all text-sm font-medium"
                >
                  {service.name}
                </a>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-1 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
              <button
                className="bg-blue-500 hover:bg-blue-600 text-black p-2 rounded-lg transition"
                onClick={() => {
                  if (userInput.trim()) {
                    alert(`Mensagem enviada: ${userInput}`);
                    setUserInput("");
                  }
                }}
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
