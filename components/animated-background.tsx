"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    const particlesArray: Particle[] = [];
    const numberOfParticles = 50;

    const isLightMode = document.documentElement.classList.contains("light");

    const colors = isLightMode
      ? [
          "rgba(60, 130, 230, 0.15)", // Light blue
          "rgba(60, 130, 230, 0.10)", // Lighter blue
          "rgba(60, 130, 230, 0.12)", // Medium light
          "rgba(40, 110, 210, 0.15)", // Slightly darker
          "rgba(80, 150, 250, 0.10)", // Brighter blue
        ]
      : [
          "rgba(100, 180, 255, 0.25)", // Soft light blue
          "rgba(100, 180, 255, 0.15)", // Lighter
          "rgba(100, 180, 255, 0.20)", // Mid
          "rgba(80, 160, 240, 0.25)", // Darker
          "rgba(120, 200, 255, 0.15)", // Brighter
        ];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );

      if (isLightMode) {
        gradient.addColorStop(0, "rgba(245, 250, 255, 0.2)");
        gradient.addColorStop(0.5, "rgba(235, 245, 255, 0.2)");
        gradient.addColorStop(1, "rgba(225, 240, 255, 0.2)");
      } else {
        gradient.addColorStop(0, "rgba(10, 20, 40, 0.2)");
        gradient.addColorStop(0.5, "rgba(8, 16, 30, 0.2)");
        gradient.addColorStop(1, "rgba(6, 12, 25, 0.2)");
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      connectParticles();
      requestAnimationFrame(animate);
    };

    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            const opacity = isLightMode
              ? 0.04 - distance / 6000
              : 0.08 - distance / 3000;

            const lineColor = isLightMode
              ? `rgba(60, 130, 230, ${opacity})`
              : `rgba(120, 200, 255, ${opacity})`;

            ctx.strokeStyle = lineColor;
            ctx.lineWidth = isLightMode ? 0.4 : 0.6;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          particlesArray.length = 0;
          init();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    init();
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-background"
      style={{ pointerEvents: "none" }}
    />
  );
}
