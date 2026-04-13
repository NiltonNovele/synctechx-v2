"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function ClientLogoStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scroll = scrollRef.current;
    const content = contentRef.current;
    if (!scroll || !content) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 1.5;

    const animate = () => {
      if (!isPaused) {
        scrollPos += speed;

        // ✅ use actual content width (reliable)
        if (scrollPos >= content.offsetWidth) {
          scrollPos = 0;
        }

        scroll.style.transform = `translateX(-${scrollPos}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const logos = [
    { name: "AMECC", src: "/amecclogo2.png" },
    { name: "Bola Ao Cesto", src: "/bac.png" },
    { name: "Chairman MediaHouse", src: "/chairman.png" },
    { name: "Escolas De Judo Edson Madeira", src: "/ejem.png" },
    { name: "Bander Multi-Service", src: "/banderms.jpg" },
    { name: "CACEP", src: "/cacep.png" },
  ];

  return (
    <section className="py-16 bg-black border-t border-b border-white/10 relative overflow-hidden">
      {/* Top Text */}
      <div className="container mx-auto px-6 mb-10">
        <p className="text-center text-white/40 text-xs md:text-sm uppercase tracking-widest font-light">
          Trabalhamos com fundadores, operadores e equipas que levam a sério a transformação
        </p>
      </div>

      {/* Scrolling Logos */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={scrollRef}
          className="flex w-max"
          style={{ willChange: "transform" }}
        >
          {/* ORIGINAL */}
          <div ref={contentRef} className="flex">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center gap-3 px-6 md:px-10">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={40}
                  height={40}
                  className="object-contain w-8 h-8 md:w-10 md:h-10 opacity-80"
                />
                <span className="text-white/70 text-sm md:text-base font-light whitespace-nowrap">
                  {logo.name}
                </span>
                <span className="ml-6 md:ml-10 text-white/20">•</span>
              </div>
            ))}
          </div>

          {/* DUPLICATE */}
          <div className="flex">
            {logos.map((logo, index) => (
              <div key={`dup-${index}`} className="flex items-center gap-3 px-6 md:px-10">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={40}
                  height={40}
                  className="object-contain w-8 h-8 md:w-10 md:h-10 opacity-80"
                />
                <span className="text-white/70 text-sm md:text-base font-light whitespace-nowrap">
                  {logo.name}
                </span>
                <span className="ml-6 md:ml-10 text-white/20">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-12 md:w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-12 md:w-20 bg-gradient-to-l from-black to-transparent z-10" />
      </div>

      {/* Bottom Quote */}
      <div className="container mx-auto px-6 mt-10">
        <p className="text-center text-white/60 text-sm md:text-base font-light italic max-w-2xl mx-auto">
          "Nós tornamos os negócios totalmente eficazes pela IA e preparados para o futuro"
        </p>
      </div>
    </section>
  );
}