"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimateInView } from "@/components/animate-in-view";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-300/5 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="glass-card rounded-2xl p-8 md:p-12 border border-blue-300/20">
          <div className="flex flex-col items-center text-center">
            <AnimateInView>
              <motion.h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 silver-text"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Ready to Start Your Project?
              </motion.h2>
            </AnimateInView>
            <AnimateInView delay={0.1}>
              <p className="max-w-[800px] text-muted-foreground md:text-xl mb-8">
                Let's collaborate to create something amazing together. Get in
                touch today to discuss your project needs.
              </p>
            </AnimateInView>
            <AnimateInView delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 min-w-[180px] group btn-hover-effect neon-glow"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      <span>Contact Us</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/portfolio">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="min-w-[180px] group neon-border-blue"
                    >
                      <span>View Projects</span>
                      <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  );
}
