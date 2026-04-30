"use client";

import { useEffect, useRef, useState } from "react";

type TaskCard = {
  id: number;
  x: number;
  y: number;
  task: string;
  progress: number;
  completed: boolean;
  opacity: number;
};

export function AIBackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [taskCards, setTaskCards] = useState<TaskCard[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const getIsMobile = () => window.innerWidth < 768;

    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    resizeCanvas();

    const characters = "01AI{}[]();=><SYNCX";
    const isMobile = getIsMobile();

    const streams = Array.from({ length: isMobile ? 26 : 48 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: Math.random() * 1.2 + 0.25,
      opacity: Math.random() * 0.25 + 0.08,
      char: characters[Math.floor(Math.random() * characters.length)],
      size: Math.random() * (isMobile ? 5 : 7) + (isMobile ? 8 : 10),
      drift: Math.random() * 0.35 - 0.175,
    }));

    const nodes = Array.from({ length: isMobile ? 9 : 18 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      pulse: Math.random() * Math.PI * 2,
      energy: Math.random() * 0.7 + 0.2,
      radius: Math.random() * 2.5 + 2,
      connections: [] as number[],
    }));

    const particles = Array.from({ length: isMobile ? 18 : 36 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.25 + 0.08,
      size: Math.random() * 1.8 + 0.8,
      color: Math.random() > 0.75 ? "59,130,246" : "14,165,233",
      life: 0,
      maxLife: Math.random() * 900 + 500,
    }));

    const updateConnections = () => {
      nodes.forEach((node, i) => {
        node.connections = [];

        nodes.forEach((otherNode, j) => {
          if (i === j) return;

          const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);

          if (distance < (isMobile ? 160 : 240) && Math.random() > 0.58) {
            node.connections.push(j);
          }
        });
      });
    };

    updateConnections();

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      streams.forEach((stream) => {
        const pulseOpacity =
          stream.opacity * (0.75 + 0.25 * Math.sin(time * 2 + stream.x * 0.01));

        ctx.font = `${stream.size}px monospace`;
        ctx.fillStyle = `rgba(59, 130, 246, ${pulseOpacity})`;
        ctx.fillText(stream.char, stream.x, stream.y);

        stream.y += stream.speed;
        stream.x += stream.drift;

        if (stream.y > window.innerHeight + 40) {
          stream.y = -40;
          stream.x = Math.random() * window.innerWidth;
          stream.char = characters[Math.floor(Math.random() * characters.length)];
        }

        if (stream.x < -40 || stream.x > window.innerWidth + 40) {
          stream.x = Math.random() * window.innerWidth;
        }
      });

      particles.forEach((particle) => {
        particle.life += 1;

        const lifeRatio = particle.life / particle.maxLife;
        const fadeOpacity = particle.opacity * Math.sin(lifeRatio * Math.PI);

        ctx.fillStyle = `rgba(${particle.color}, ${fadeOpacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.life >= particle.maxLife) {
          particle.x = Math.random() * window.innerWidth;
          particle.y = Math.random() * window.innerHeight;
          particle.life = 0;
          particle.maxLife = Math.random() * 900 + 500;
        }

        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = window.innerHeight;
        if (particle.y > window.innerHeight) particle.y = 0;
      });

      nodes.forEach((node, index) => {
        node.energy = 0.5 + 0.25 * Math.sin(time + index * 0.5);

        node.x += Math.sin(time * 0.3 + index * 0.1) * 0.08;
        node.y += Math.cos(time * 0.4 + index * 0.15) * 0.08;

        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodes[connectionIndex];
          if (!connectedNode) return;

          const avgEnergy = (node.energy + connectedNode.energy) / 2;
          const pulseIntensity = (Math.sin(node.pulse) + 1) / 2;
          const opacity = avgEnergy * pulseIntensity * 0.28;

          const gradient = ctx.createLinearGradient(
            node.x,
            node.y,
            connectedNode.x,
            connectedNode.y
          );

          gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`);
          gradient.addColorStop(0.5, `rgba(14, 165, 233, ${opacity * 0.8})`);
          gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity})`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.stroke();
        });

        const pulseIntensity = (Math.sin(node.pulse) + 1) / 2;
        const nodeOpacity = node.energy * pulseIntensity * 0.65 + 0.2;

        const glow = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 4
        );

        glow.addColorStop(0, `rgba(59, 130, 246, ${nodeOpacity * 0.35})`);
        glow.addColorStop(1, "rgba(59, 130, 246, 0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(59, 130, 246, ${nodeOpacity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + pulseIntensity * 1.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${nodeOpacity * 0.75})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 0.45, 0, Math.PI * 2);
        ctx.fill();

        node.pulse += 0.025;
        if (node.pulse > Math.PI * 2) node.pulse = 0;
      });

      if (Math.floor(time * 100) % 600 === 0) {
        updateConnections();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();

      particles.forEach((particle) => {
        particle.x = Math.min(particle.x, window.innerWidth);
        particle.y = Math.min(particle.y, window.innerHeight);
      });

      nodes.forEach((node) => {
        node.x = Math.min(node.x, window.innerWidth);
        node.y = Math.min(node.y, window.innerHeight);
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const tasks = [
      "Analisando dados",
      "Gerando insights",
      "Otimizando processos",
      "Automatizando tarefas",
      "Sincronizando sistemas",
      "Monitorando desempenho",
      "Processando leads",
      "Ajustando fluxos",
    ];

    const interval = setInterval(() => {
      const isMobile = window.innerWidth < 768;

      if (isMobile && Math.random() > 0.65) return;

      const cardWidth = isMobile ? 170 : 220;
      const margin = isMobile ? 14 : 32;

      const zones = [
        {
          x: margin,
          y: isMobile ? 86 : 110,
        },
        {
          x: window.innerWidth - cardWidth - margin,
          y: isMobile ? 86 : 110,
        },
        {
          x: margin,
          y: window.innerHeight - (isMobile ? 190 : 230),
        },
        {
          x: window.innerWidth - cardWidth - margin,
          y: window.innerHeight - (isMobile ? 190 : 230),
        },
      ];

      const zone = zones[Math.floor(Math.random() * zones.length)];

      const newTask: TaskCard = {
        id: Date.now() + Math.random(),
        x: zone.x,
        y: zone.y,
        task: tasks[Math.floor(Math.random() * tasks.length)],
        progress: 0,
        completed: false,
        opacity: 0,
      };

      setTaskCards((prev) => [...prev.slice(isMobile ? -1 : -2), newTask]);

      let progress = 0;

      const progressInterval = setInterval(() => {
        progress += Math.random() * 14 + 10;

        if (progress >= 100) {
          progress = 100;

          setTaskCards((prev) =>
            prev.map((card) =>
              card.id === newTask.id
                ? { ...card, progress: 100, completed: true, opacity: 0.72 }
                : card
            )
          );

          clearInterval(progressInterval);

          setTimeout(() => {
            setTaskCards((prev) => prev.filter((card) => card.id !== newTask.id));
          }, 1800);

          return;
        }

        setTaskCards((prev) =>
          prev.map((card) =>
            card.id === newTask.id
              ? {
                  ...card,
                  progress,
                  opacity: Math.min((progress / 100) * 0.65, 0.65),
                }
              : card
          )
        );
      }, 220);
    }, 4800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60 md:opacity-75"
        style={{ mixBlendMode: "screen" }}
      />

      {taskCards.map((card) => (
        <div
          key={card.id}
          className="absolute z-10 transition-all duration-1000 ease-out"
          style={{
            left: card.x,
            top: card.y,
            opacity: card.opacity,
            transform: `translateY(${card.completed ? -14 : 0}px) scale(${
              card.completed ? 0.94 : 1
            })`,
          }}
        >
          <div className="min-w-[170px] rounded-2xl border border-white/10 bg-white/[0.06] px-3.5 py-3 shadow-2xl shadow-blue-500/10 backdrop-blur-md md:min-w-[220px] md:px-4">
            <div className="flex items-center gap-3">
              <div
                className={`h-2 w-2 shrink-0 rounded-full ${
                  card.completed ? "bg-emerald-400" : "bg-blue-400"
                }`}
              />

              <span className="truncate text-xs font-medium text-white/65">
                {card.task}
              </span>

              {card.completed && (
                <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                  OK
                </span>
              )}
            </div>

            {!card.completed && (
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300 transition-all duration-500"
                  style={{ width: `${card.progress}%` }}
                />
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="absolute right-4 top-20 z-10 hidden md:block md:right-24 md:top-24">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs font-medium text-white/45">
            Processamento neural
          </span>
        </div>
      </div>

      <div className="absolute bottom-20 left-4 z-10 hidden md:block md:bottom-24 md:left-24">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-md">
          <div className="flex gap-1">
            {[0, 300, 600].map((delay) => (
              <span
                key={delay}
                className="h-4 w-1 rounded bg-blue-400/60 animate-pulse"
                style={{ animationDelay: `${delay}ms` }}
              />
            ))}
          </div>

          <span className="text-xs font-medium text-white/45">
            Análise de dados
          </span>
        </div>
      </div>

      <div
        className="absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.22) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.22) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.14),transparent_38%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.12),transparent_38%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.035),transparent_45%)]" />

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
    </div>
  );
}