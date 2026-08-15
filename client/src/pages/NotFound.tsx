import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowUpRight,
  Home,
  Radar,
  ShieldCheck,
} from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#101114] text-white">
      {/* Technical background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.16]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1b4fff]/10 blur-[120px]" />

        <div className="absolute left-8 top-8 hidden h-24 w-24 border-l border-t border-[#1b4fff]/40 md:block" />
        <div className="absolute bottom-8 right-8 hidden h-24 w-24 border-b border-r border-[#1b4fff]/40 md:block" />
      </div>

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/10">
        <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <button
            onClick={handleGoHome}
            className="group flex items-center gap-3"
            aria-label="SyncTechX home"
          >
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden">
              <img
                src="/logo-w.png"
                alt=""
                className="relative z-10 h-8 w-8 object-contain"
              />
            </span>

            <span className="text-xl font-semibold tracking-[-.07em]">
              SyncTech
              <span className="text-[#1b4fff]">X</span>
            </span>
          </button>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
              SYSTEM STATUS
            </span>

            <span className="flex items-center gap-2 border border-white/15 px-3 py-2 font-mono text-[9px] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1b4fff]" />
              ONLINE
            </span>
          </div>
        </div>
      </header>

      {/* Main */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-5 pb-20 pt-32 sm:px-8">
        <div className="w-full max-w-5xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_.9fr] lg:gap-20">
            {/* Left */}
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1b4fff]">
                  ERROR / 404
                </span>

                <span className="h-px w-16 bg-[#1b4fff]/50" />

                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">
                  SIGNAL LOST
                </span>
              </div>

              <div className="relative">
                <h1 className="text-[clamp(7rem,18vw,13rem)] font-black leading-[0.75] tracking-[-0.09em] text-white">
                  404
                </h1>

                <div className="absolute -bottom-3 left-1 text-[10px] font-mono uppercase tracking-[0.2em] text-[#1b4fff]">
                  PATH / NOT_FOUND
                </div>
              </div>

              <h2 className="mt-14 max-w-xl text-4xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                This path doesn't lead anywhere.
              </h2>

              <p className="mt-7 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg">
                The page you're looking for may have moved, been removed, or
                never existed. Let's get you back to a known point.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button
                  onClick={handleGoHome}
                  className="group inline-flex h-auto items-center gap-3 rounded-none bg-[#1b4fff] px-6 py-4 text-sm font-bold text-[#101114] shadow-none transition-colors hover:bg-[#dbe5ff]"
                >
                  <Home className="h-4 w-4" />
                  Return home
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>

                <Button
                  onClick={handleGoBack}
                  variant="outline"
                  className="inline-flex h-auto items-center gap-3 rounded-none border-white/20 bg-transparent px-6 py-4 text-sm font-semibold text-white hover:border-[#1b4fff] hover:bg-transparent hover:text-[#1b4fff]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Go back
                </Button>
              </div>
            </div>

            {/* Right diagnostic panel */}
            <div className="relative">
              <div className="border border-white/15 bg-white/[0.035] p-4 backdrop-blur-sm">
                <div className="border border-white/10">
                  {/* Panel header */}
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Radar
                        size={18}
                        strokeWidth={1.4}
                        className="text-[#1b4fff]"
                      />

                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/60">
                        ROUTE DIAGNOSTIC
                      </span>
                    </div>

                    <span className="font-mono text-[9px] text-[#1b4fff]">
                      404
                    </span>
                  </div>

                  {/* Diagnostic rows */}
                  <div className="divide-y divide-white/10">
                    <div className="grid grid-cols-[100px_1fr] gap-5 px-5 py-5">
                      <span className="font-mono text-[9px] uppercase text-white/30">
                        REQUEST
                      </span>

                      <span className="font-mono text-xs text-white/70">
                        UNKNOWN_ROUTE
                      </span>
                    </div>

                    <div className="grid grid-cols-[100px_1fr] gap-5 px-5 py-5">
                      <span className="font-mono text-[9px] uppercase text-white/30">
                        STATUS
                      </span>

                      <span className="font-mono text-xs text-[#1b4fff]">
                        NOT_FOUND
                      </span>
                    </div>

                    <div className="grid grid-cols-[100px_1fr] gap-5 px-5 py-5">
                      <span className="font-mono text-[9px] uppercase text-white/30">
                        ACCESS
                      </span>

                      <span className="font-mono text-xs text-white/70">
                        NO_RESOURCE
                      </span>
                    </div>

                    <div className="grid grid-cols-[100px_1fr] gap-5 px-5 py-5">
                      <span className="font-mono text-[9px] uppercase text-white/30">
                        ACTION
                      </span>

                      <span className="font-mono text-xs text-white/70">
                        RETURN_TO_KNOWN_PATH
                      </span>
                    </div>
                  </div>

                  {/* Signal */}
                  <div className="border-t border-white/10 bg-white/[0.025] px-5 py-6">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1b4fff] opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1b4fff]" />
                      </span>

                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">
                        Searching for a valid route...
                      </span>
                    </div>

                    <div className="mt-5 h-px w-full bg-white/10">
                      <div className="h-px w-2/3 bg-[#1b4fff]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating labels */}
              <div className="absolute -right-3 -top-4 hidden border border-[#1b4fff]/40 bg-[#101114] px-3 py-2 sm:block">
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#1b4fff]">
                  TRACE / FAILED
                </span>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden bg-[#1b4fff] p-4 text-[#101114] sm:block">
                <ShieldCheck size={18} strokeWidth={1.5} />

                <div className="mt-2 font-mono text-[8px] uppercase tracking-[0.12em]">
                  Security with context
                </div>
              </div>
            </div>
          </div>

          {/* Bottom signal */}
          <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
            <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/30">
              SYNCTECHX / DIGITAL SECURITY
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-white/30">
                VISIBILITY
              </span>

              <div className="h-px w-20 bg-white/15">
                <div className="h-px w-1/2 bg-[#1b4fff]" />
              </div>

              <span className="font-mono text-[9px] text-[#1b4fff]">
                01 / 01
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Oversized wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-0.15em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(5rem,18vw,17rem)] font-black leading-none tracking-[-0.09em] text-white/[0.035]"
      >
        SYNCTECHX
      </div>
    </main>
  );
}