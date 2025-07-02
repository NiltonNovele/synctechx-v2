"use client";

import { AnimateInView } from "./animate-in-view";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "BroFessor",
      description:
        "An AI driven platform that allows you to create different companions that allow you to learn verbally, generate summaries, practice quizzes, train companion based on your material and a lor more. ",
      image: "/brofessor.png?height=400&width=800",
      tags: ["Next.js", "TypeScript", "Supabase", "Clerk"],
      link: "/portfolio/1",
      github: "#",
      demo: "https://brofessor.niltonnovele.com",
    },
    {
      title: "Healthcare Management System",
      description:
        "A secure healthcare management system for patient records, appointment scheduling, and telemedicine.",
      image: "/carepulse.png?height=400&width=800",
      tags: ["React", "Node.js", "PostgreSQL", "Docker"],
      link: "/portfolio",
      github: "#",
      demo: "https://carepulse.synctechx.com",
    },
    {
      title: "AMECC platform",
      description:
        "A platform for the Association of Mozambican Students in Cape Town, where students can log queries, find documents and information, update on events and articles.",
      image: "/amecc.png?height=400&width=800",
      tags: ["Next", "Express", "TailwindCSS", "JavaScript"],
      link: "/portfolio",
      github: "#",
      demo: "https://amecc.vercel.app",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView>
          <div className="text-center mb-12">
            <motion.div
              className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600 tag mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Our Work
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground">
              Explore some of our recent projects that showcase our technical
              expertise and problem-solving capabilities.
            </p>
          </div>
        </AnimateInView>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <AnimateInView key={index} delay={index * 0.1}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                <motion.div
                  className="w-full lg:w-1/2"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="relative overflow-hidden rounded-xl border border-blue-300/20 shadow-xl shadow-blue-300/5 h-[300px]">
                    <Image
                      src={project.image || "/logo/Shibaccus.png"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent hover:opacity-80 transition-opacity duration-300"></div>
                  </div>
                </motion.div>

                <div className="w-full lg:w-1/2">
                  <Card className="glass-card border-blue-300/10 hover:border-blue-500/30 transition-all duration-300">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-3 text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <Link href={project.link}>
                          <Button className="bg-blue-600 hover:bg-blue-700 rounded-full">
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href={project.github}>
                          <Button
                            variant="outline"
                            className="rounded-full border-blue-300/20 hover:border-blue-500/50 hover:bg-blue-50 hover:text-blue-600"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                          </Button>
                        </Link>
                        <Link href={project.demo}>
                          <Button
                            variant="ghost"
                            className="text-foreground hover:text-blue-600 hover:bg-blue-50 rounded-full"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/portfolio">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 rounded-full"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
