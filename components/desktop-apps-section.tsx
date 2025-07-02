"use client";

import { AnimateInView } from "./animate-in-view";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Monitor, Layers, Zap, Shield, Cpu, Workflow } from "lucide-react";

export default function DesktopAppsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background/80 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView>
          <div className="text-center mb-12">
            <motion.div
              className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600 tag mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Desktop Applications
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground mb-4">
              Powerful Desktop Solutions
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground">
              We develop high-performance desktop applications that streamline
              workflows, enhance productivity, and deliver exceptional user
              experiences.
            </p>
          </div>
        </AnimateInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <AnimateInView delay={0.1}>
            <div className="relative">
              <motion.div
                className="rounded-xl overflow-hidden border border-blue-300/20 shadow-xl shadow-blue-300/5 h-[350px]"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Image
                  src="/desktopapp.png?height=400&width=600"
                  alt="Desktop Application"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </motion.div>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.2}>
            <div className="space-y-6 flex flex-col justify-center h-full">
              <h3 className="text-2xl font-bold text-foreground">
                Cross-Platform Desktop Applications
              </h3>
              <p className="text-muted-foreground">
                Our team specializes in building robust desktop applications
                that run seamlessly across Windows, macOS, and Linux. We
                leverage modern frameworks like Electron, Qt, and .NET to create
                applications that combine the power of desktop computing with
                the flexibility of web technologies.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  {
                    icon: <Monitor className="h-5 w-5 text-blue-600" />,
                    text: "Cross-platform compatibility",
                  },
                  {
                    icon: <Layers className="h-5 w-5 text-blue-600" />,
                    text: "Rich user interfaces",
                  },
                  {
                    icon: <Zap className="h-5 w-5 text-blue-600" />,
                    text: "High performance",
                  },
                  {
                    icon: <Shield className="h-5 w-5 text-blue-600" />,
                    text: "Enhanced security",
                  },
                  {
                    icon: <Cpu className="h-5 w-5 text-blue-600" />,
                    text: "Hardware integration",
                  },
                  {
                    icon: <Workflow className="h-5 w-5 text-blue-600" />,
                    text: "Offline capabilities",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-full bg-card/30 backdrop-blur-sm border border-blue-300/10"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)", // blue shadow
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    tabIndex={0}
                  >
                    {feature.icon}
                    <span className="text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimateInView>
        </div>

        <AnimateInView delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Enterprise Applications",
                description:
                  "Custom enterprise desktop applications tailored to your specific business needs and workflows.",
                icon: <Monitor className="h-10 w-10 text-blue-600" />,
              },
              {
                title: "Data Analysis Tools",
                description:
                  "Powerful desktop applications for data processing, visualization, and analysis with real-time insights.",
                icon: <Cpu className="h-10 w-10 text-blue-600" />,
              },
              {
                title: "System Utilities",
                description:
                  "Specialized utilities that enhance system performance, security, and user productivity.",
                icon: <Zap className="h-10 w-10 text-blue-600" />,
              },
            ].map((service, index) => (
              <AnimateInView key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="h-full"
                >
                  <Card className="glass-card h-full border-blue-300/10 hover:border-blue-500/30 rounded-xl">
                    <CardContent className="p-6 flex flex-col h-full">
                      <motion.div
                        className="mb-4 rounded-full bg-blue-100 p-3 w-fit"
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 0 15px 5px rgba(59, 130, 246, 0.3)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2 text-foreground transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground flex-grow">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimateInView>
            ))}
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
