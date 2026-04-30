"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/src/components/ui/button";
import {
  ArrowRight,
  MessageCircle,
  X,
  Sparkles,
  Bot,
  Send,
  CheckCircle,
} from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [userInput, setUserInput] = useState("");

  const measureRef = useRef<HTMLSpanElement>(null);

  const [textWidths, setTextWidths] = useState<number[]>([]);
  const [dynamicWidth, setDynamicWidth] = useState("auto");

  const rotatingTexts = [
    "aumentam vendas",
    "geram receita",
    "escalam negócios",
    "otimizam processos",
    "automatizam tarefas",
    "reduzem custos",
    "ganham tempo",
    "melhoram resultados",
  ];

  const services = [
    { name: "Agentes de IA", section: "#use-cases" },
    { name: "Websites & Sistemas", section: "#portfolio" },
    { name: "Aplicativos Móveis", section: "#use-cases" },
    { name: "Agendar reunião", section: "#contact" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!measureRef.current) return;

    const measureElement = measureRef.current;

    const widths = rotatingTexts.map((text) => {
      measureElement.textContent = text;
      return measureElement.offsetWidth + 32;
    });

    setTextWidths(widths);
    setDynamicWidth(`${widths[0]}px`);
  }, []);

  useEffect(() => {
    if (textWidths.length > 0) {
      setDynamicWidth(`${textWidths[activeIndex]}px`);
    }
  }, [activeIndex, textWidths]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousIndex(activeIndex);
      setIsAnimating(true);

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsAnimating(false);
      }, 700);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, rotatingTexts.length]);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const message = encodeURIComponent(userInput.trim());
    window.open(`https://wa.me/258847529665?text=${message}`, "_blank");
    setUserInput("");
    setChatOpen(false);
  };

  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 md:px-6">
      <span
        ref={measureRef}
        className="pointer-events-none absolute whitespace-nowrap px-4 text-4xl font-semibold leading-none opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
        style={{ top: "-9999px" }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_38%)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl text-center">
        <div
          className={`mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm transition-all duration-700 md:mb-8 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Sparkles className="h-4 w-4 text-blue-400" />
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/70">
            SyncTechX
          </span>
        </div>

        <h1
          className={`mx-auto max-w-6xl text-4xl font-semibold leading-[1.12] tracking-tight text-white transition-all delay-150 duration-700 sm:text-5xl md:text-6xl lg:text-7xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="block">Soluções digitais e IA que</span>

          <span
            className="relative mx-auto mt-2 block overflow-hidden text-blue-500 sm:inline-block sm:align-bottom"
            style={{
              width: dynamicWidth,
              maxWidth: "100%",
              height: "1.25em",
            }}
          >
            {rotatingTexts.map((text, index) => (
              <span
                key={text}
                className={`absolute left-1/2 top-0 w-max -translate-x-1/2 whitespace-nowrap px-4 leading-none transition-all duration-700 ease-in-out ${
                  index === activeIndex
                    ? "translate-y-0 opacity-100"
                    : index === previousIndex && isAnimating
                    ? "-translate-y-full opacity-0"
                    : "translate-y-full opacity-0"
                }`}
              >
                {text}
              </span>
            ))}
          </span>
        </h1>

        <p
          className={`mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 transition-all delay-300 duration-700 md:text-base lg:text-lg ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Criamos websites, sistemas, automações e agentes de IA personalizados
          para empresas que querem vender melhor, organizar processos e crescer
          com tecnologia.
        </p>

        <div
          className={`mt-8 flex flex-col items-center justify-center gap-3 transition-all delay-500 duration-700 sm:flex-row ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <a href="#contact" className="w-full sm:w-auto">
            <Button className="group h-14 w-full rounded-full bg-blue-500 px-7 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400 sm:w-auto">
              Agende uma chamada de descoberta
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>

          <a
            href="#portfolio"
            className="inline-flex h-14 w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-7 text-sm font-semibold text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.08] sm:w-auto"
          >
            Ver projectos
          </a>
        </div>

        <div
          className={`mx-auto mt-10 grid max-w-3xl gap-3 transition-all delay-700 duration-700 sm:grid-cols-3 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {["IA personalizada", "Design responsivo", "Suporte técnico"].map(
            (item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white/60 backdrop-blur-sm"
              >
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                {item}
              </div>
            )
          )}
        </div>
      </div>

      {/*<div className="fixed bottom-5 right-5 z-50 md:bottom-6 md:right-6">
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            aria-label="Abrir assistente"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-black shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:bg-blue-400 md:h-16 md:w-16"
          >
            <MessageCircle className="h-7 w-7" />
            <span className="absolute inset-0 rounded-full bg-blue-500/40 animate-ping" />
          </button>
        )}

         {chatOpen && (
          <div className="w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-[#050814]/95 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="relative border-b border-white/10 p-5">
              <button
                onClick={() => setChatOpen(false)}
                aria-label="Fechar assistente"
                className="absolute right-4 top-4 rounded-full p-1 text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500 text-black">
                  <Bot className="h-6 w-6" />
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Assistente SyncTechX
                  </h4>
                  <p className="text-xs text-emerald-400">Online agora</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/60">
                Olá! Escolha uma opção ou envie uma mensagem pelo WhatsApp para
                falar connosco.
              </p>
            </div>

            <div className="max-h-64 space-y-3 overflow-y-auto p-4">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.section}
                  onClick={() => setChatOpen(false)}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/75 transition-all hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  {service.name}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>

            <div className="border-t border-white/10 p-3">
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 p-2">
                <input
                  type="text"
                  placeholder="Digite a sua mensagem..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSendMessage();
                  }}
                  className="min-w-0 flex-1 bg-transparent px-2 text-sm text-white outline-none placeholder:text-white/35"
                />

                <button
                  onClick={handleSendMessage}
                  aria-label="Enviar mensagem"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-black transition hover:bg-blue-400"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div> */}
    </section>
  );
}