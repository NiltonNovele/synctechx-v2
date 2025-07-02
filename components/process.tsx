"use client";

import { AnimateInView } from "@/components/animate-in-view";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Code, Rocket, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const processSteps = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Discovery",
    description:
      "We start by understanding your business goals, target audience, and project requirements.",
    delay: 0.1,
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: "Planning",
    description:
      "Together, we create a detailed roadmap and strategy for your project's success.",
    delay: 0.2,
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Development",
    description:
      "We bring your vision to life with clean, efficient, and scalable code.",
    delay: 0.3,
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Launch",
    description:
      "After thorough testing, your project is deployed and ready to make an impact.",
    delay: 0.4,
  },
];

export default function Process() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <motion.div
                className="inline-block rounded-lg bg-blue-600/10 px-3 py-1 text-sm text-blue-600 tag"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Process
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
                How SyncTechX Works
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A streamlined approach to delivering exceptional results for
                your projects.
              </p>
            </div>
          </div>
        </AnimateInView>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <AnimateInView key={index} delay={step.delay}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="h-full"
              >
                <Card className="h-full bg-card/30 backdrop-blur-sm border-blue-600/10 transition-all duration-300 neon-border equal-height process-card">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <motion.div
                      className="mb-4 rounded-full bg-blue-600/10 p-3 transition-transform duration-300"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 20px 5px rgba(37, 99, 235, 0.3)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 process-title transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground flex-grow">
                      {step.description}
                    </p>
                    <div className="mt-4 flex items-center justify-center">
                      <motion.div
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold"
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 0 15px 5px rgba(37, 99, 235, 0.5)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        {index + 1}
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
