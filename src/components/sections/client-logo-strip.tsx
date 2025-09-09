"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function ClientLogoStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    const content = contentRef.current;
    if (!scroll || !content) return;

    // Clone the content for seamless scrolling
    scroll.appendChild(content.cloneNode(true));

    let animationId: number;
    let scrollPos = 0;

    const animate = () => {
      scrollPos += 0.5;
      if (scrollPos >= content.offsetWidth) {
        scrollPos = 0;
      }
      if (scroll) scroll.style.transform = `translateX(-${scrollPos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const logos = [
    { name: "AMECC", src: "/amecclogo2.png" },
    { name: "Bola Ao Cesto", src: "/bac.png" },
    { name: "Chairman MediaHouse", src: "/chairman.png" },
    { name: "Escolas De Judo Edson Madeira", src: "/ejem.png" },
  ];

  return (
    <section className="py-16 bg-black border-t border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-white/40 text-sm uppercase tracking-widest font-light mb-8">
          Trabalhamos com fundadores, operadores e equipes que levam a sério a
          transformação
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div ref={scrollRef} className="whitespace-nowrap flex">
          <div ref={contentRef} className="inline-flex gap-16 px-8">
            {logos.map((logo, index) => (
              <div key={index} className="inline-flex items-center gap-3">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-white/70 font-light">{logo.name}</span>
                <span className="mx-8 text-white/20">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Fades */}
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 mt-8">
        <p className="text-center text-white/60 font-light italic">
          "Nós tornamos os negócios totalmente eficazes pela IA e preparados
          para o futuro"
        </p>
      </div>
    </section>
  );
}
