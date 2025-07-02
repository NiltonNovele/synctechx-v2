"use client";

import React from "react";
import { AnimateInView } from "./animate-in-view";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Users,
  ShieldCheck,
  Globe2,
  Rocket,
  Target,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SyncTechXSection() {
  const pillars = [
    {
      title: "Innovation First",
      description:
        "We constantly challenge norms and explore new technologies to build solutions that move communities and industries forward.",
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
    },
    {
      title: "People-Centered",
      description:
        "From users to teammates, people are at the heart of everything we do. We build tech that feels human.",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      title: "Transparency & Trust",
      description:
        "We foster relationships built on clarity, integrity, and long-term impact—not quick wins.",
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    },
    {
      title: "Global Mindset",
      description:
        "We design with the world in mind—but we begin by solving the challenges in our own backyard.",
      icon: <Globe2 className="h-10 w-10 text-primary" />,
    },
    {
      title: "Agility & Speed",
      description:
        "We're lean, fast, and effective. We prioritize shipping value quickly and iterating with real feedback.",
      icon: <Rocket className="h-10 w-10 text-primary" />,
    },
    {
      title: "Purpose-Driven",
      description:
        "Every product we build exists to solve a real problem or open doors for real people.",
      icon: <Target className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        {/* VISION & MISSION */}
        <AnimateInView>
          <div className="text-center mb-12">
            <motion.div
              className="inline-block rounded-lg bg-blue-600/10 px-3 py-1 text-sm text-blue-600 mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              SyncTechX
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Vision & Mission
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground">
              At <strong>SyncTechX</strong>, we envision a future where African
              innovation leads the global tech narrative. Our mission is to
              empower communities through smart, inclusive, and accessible
              technology that actually solves real-world problems—from education
              and health to business and daily life.
            </p>
          </div>
        </AnimateInView>

        {/* CORE VALUES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <AnimateInView key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="h-full"
              >
                <Card className="glass-card h-full border-blue-600/10 hover:border-blue-600/30 focus-within:ring-2 focus-within:ring-blue-600/50 focus-within:ring-offset-2 focus-within:ring-offset-background">
                  <CardContent className="p-6 flex flex-col h-full">
                    <motion.div
                      className="mb-4 rounded-full bg-blue-600/10 p-3 w-fit"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {/* Replace icon color */}
                      {React.cloneElement(pillar.icon, {
                        className: "h-10 w-10 text-blue-600",
                      })}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                    <p className="text-muted-foreground flex-grow">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimateInView>
          ))}
        </div>

        {/* WHY WORK WITH US */}
        <AnimateInView delay={0.2}>
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Why Work With Us?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you're a founder, partner, or problem-solver, SyncTechX
              offers more than just code—we offer commitment, creativity, and
              real results. We're a small team with a global mindset, ready to
              co-build game-changing products. Let's build what matters.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-600/90 neon-glow focus:ring-2 focus:ring-blue-600/50 focus:ring-offset-2 focus:ring-offset-background"
              >
                Let's Talk
              </Button>
            </Link>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
