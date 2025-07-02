"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateInView } from "./animate-in-view";
import { ArrowRight, Sparkles, Zap, Award } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-6">
            <AnimateInView>
              <div className="space-y-4">
                <motion.div
                  className="inline-block rounded-lg bg-blue-600/10 px-3 py-1 text-sm text-white-600 tag"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Innovative Tech Solutions
                </motion.div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white-700">
                  Elevate Your Digital Presence
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Cutting-edge solutions crafted by our international team of
                  experienced developers delivering excellence Africa-wide.
                </p>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.2}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-600/90 group btn-hover-effect neon-glow relative overflow-hidden focus:ring-0"
                  >
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="group neon-border relative overflow-hidden hover:bg-blue-600/5 hover:text-blue-600 focus:ring-0"
                  >
                    <span className="relative z-10">View Portfolio</span>
                    <ArrowRight className="relative z-10 ml-2 h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Button>
                </Link>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.3}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: <Sparkles className="h-5 w-5 text-white-600 mr-2" />,
                    text: "Innovative Solutions",
                  },
                  {
                    icon: <Zap className="h-5 w-5 text-white-600 mr-2" />,
                    text: "Fast Delivery",
                  },
                  {
                    icon: <Award className="h-5 w-5 text-white-600 mr-2" />,
                    text: "Quality Guaranteed",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center glass-card rounded-lg p-3 border border-blue-600/10 neon-border"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)", // blue shadow
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    tabIndex={0}
                  >
                    {item.icon}
                    <span className="text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </AnimateInView>
          </div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Circular profile image container with enhanced styling */}
            <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden border-4 border-blue-600">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent"></div>
              <Image
                src="/logo/logo.png?height=640&width=640"
                alt=" Team"
                width={640}
                height={640}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-blue-400/20 animate-pulse-glow"></div>
              <div
                className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-blue-600/20 animate-pulse-glow"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </motion.div>
        </div>

        {/* Tech stack section */}
        {/* <AnimateInView delay={0.4}>
          <div className="mt-24 pt-16 border-t border-primary/10">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Our Partners & Clients
              </h3>
              <p className="text-muted-foreground text-sm">
                Trusted by industry leaders and open-source communities
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-12 md:gap-14">
              {[
                {
                  name: "AMECC",
                  icon: "/amecclogo.png",
                  link: "https://amecc.vercel.app",
                },
                {
                  name: "HR Country Intelligence",
                  icon: "/hrcilogo.jpg",
                  link: "#",
                },
                {
                  name: "KinesisMz",
                  icon: "/kinesislogo.png",
                  link: "https://kinesis.co.mz",
                },
                {
                  name: "Node.js",
                  icon: "/nodejslogo.png",
                  link: "https://nodejs.org",
                },
                {
                  name: "Tailwind CSS",
                  icon: "/tailwindcsslogo.png",
                  link: "https://tailwindcss.com",
                },
                {
                  name: "MongoDB",
                  icon: "/mongodblogo.png",
                  link: "https://www.mongodb.com",
                },
              ].map((tech, index) => (
                <motion.a
                  key={`${tech.name}-${index}`}
                  href={tech.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center group transition-all"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-2 transition-transform duration-200 group-hover:scale-110"
                  />
                  <span className="text-sm text-muted-foreground font-medium text-center">
                    {tech.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </AnimateInView> */}
      </div>
    </section>
  );
}
