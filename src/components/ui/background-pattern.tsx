"use client";

import { useEffect, useRef } from "react";

interface BackgroundPatternProps {
  variant: "light" | "dark";
}

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  accent?: boolean;
};

export function BackgroundPattern({ variant }: BackgroundPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    let width = 0;
    let height = 0;
    let dots: Dot[] = [];

    const isDark = variant === "dark";

    const colors = {
      dot: isDark ? "255,255,255" : "0,0,0",
      line: isDark ? "59,130,246" : "37,99,235",
      accent: isDark ? "59,130,246" : "37,99,235",
      glow: isDark ? "14,165,233" : "59,130,246",
    };

    const createDots = () => {
      const isMobile = window.innerWidth < 768;
      const density = isMobile ? 0.000035 : 0.000055;
      const dotCount = Math.floor(width * height * density);

      dots = Array.from({ length: dotCount }, (_, index) => {
        const accent = index < Math.max(3, Math.floor(dotCount * 0.12));

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (isMobile ? 0.12 : 0.18),
          vy: (Math.random() - 0.5) * (isMobile ? 0.12 : 0.18),
          size: accent ? Math.random() * 1.8 + 1.2 : Math.random() * 1.2 + 0.5,
          opacity: accent ? Math.random() * 0.35 + 0.25 : Math.random() * 0.25 + 0.08,
          accent,
        };
      });
    };

    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      createDots();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.2,
        0,
        width * 0.5,
        height * 0.2,
        Math.max(width, height) * 0.7
      );

      gradient.addColorStop(
        0,
        isDark ? `rgba(${colors.glow}, 0.09)` : `rgba(${colors.glow}, 0.06)`
      );
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      dots.forEach((dot, i) => {
        for (let j = i + 1; j < dots.length; j++) {
          const other = dots[j];
          const distance = Math.hypot(dot.x - other.x, dot.y - other.y);
          const maxDistance = window.innerWidth < 768 ? 95 : 145;

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * (isDark ? 0.16 : 0.09);

            ctx.strokeStyle = `rgba(${colors.line}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      dots.forEach((dot) => {
        ctx.fillStyle = dot.accent
          ? `rgba(${colors.accent}, ${dot.opacity})`
          : `rgba(${colors.dot}, ${dot.opacity})`;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();

        if (dot.accent) {
          ctx.fillStyle = `rgba(${colors.accent}, ${dot.opacity * 0.14})`;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size * 5, 0, Math.PI * 2);
          ctx.fill();
        }

        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < -20) dot.x = width + 20;
        if (dot.x > width + 20) dot.x = -20;
        if (dot.y < -20) dot.y = height + 20;
        if (dot.y > height + 20) dot.y = -20;
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}