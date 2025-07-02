"use client";

import { PageTransition } from "@/components/page-transition";
import { AnimateInView } from "@/components/animate-in-view";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Filter, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { id: "all", label: "All Work" },
  { id: "web", label: "Web Development" },
  { id: "design", label: "Design" },
  { id: "mobile", label: "Mobile Apps" },
];

const projects = [
  {
    id: 1,
    title: "BroFessor",
    category: "web",
    image: "/brofessor.png?height=600&width=800",
    description:
      "Brofessor is a smart academic assistant that helps students learn, revise, and stay organized.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    client: "Internal Project",
    demoUrl: "https://brofessor.niltonnovele.com",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AMECC Platform",
    category: "web",
    image: "/portfolio/amecc/amecc.png?height=600&width=800",
    description:
      "A responsive platform  for the student association of Mozambican students in Cape Town.",
    technologies: ["React", "GSAP", "Styled Components", "Framer Motion"],
    client: "Photography Studio",
    demoUrl: "https://amecc.vercel.app",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Compliance Software",
    category: "Desktop",
    image: "/portfolio/hrci/4.png?height=600&width=800",
    description:
      "A software that performs background checks and also verifies candidate identity & qualifications.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Thymeleaf",
      "REST API",
      "Docker",
    ],
    client: "HR Country Intelligence",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "TeamSync",
    category: "mobile / web",
    image: "/portfolio/teamsync/1.png?height=600&width=800",
    description:
      "TeamSync is a mobile and web application for organizations to communicate internally on less complex topics, that can be handles through text messaging.",
    technologies: ["Flutter", "MongoDB", "Dart", "React"],
    client: "SaaS Product",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "E-Commerce",
    category: "web",
    image: "/logo/logo.png?height=600&width=800",
    description:
      "Online store, with analytics dasboard, integrated online payment methods, core functionalities (cart, favourites, etc) and admin panel.",
    technologies: ["Next.js", "MongoDB", "Stripe", "M-pesa"],
    client: "NDA",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Rapodromo",
    category: "web",
    image: "/portfolio/rapodromo/4.png?height=600&width=800",
    description:
      "Rap battle platform for Rapodromo and a community for its users and fans.",
    technologies: [
      "React",
      "Node.js",
      "postgreSQL",
      "M-pesa / E-mola / Stripe",
    ],
    client: "Rapodromo",
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function PortfolioPage() {
  return (
    <PageTransition>
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateInView>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Portfolio
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Our Recent Projects
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our latest work and see how we can help bring your
                  vision to life.
                </p>
              </div>
            </div>
          </AnimateInView>

          <div className="mt-10">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center">
                <TabsList className="mb-8 bg-card/30 backdrop-blur-sm">
                  <div className="flex items-center px-3 text-muted-foreground">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter:
                  </div>
                  {categories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              {categories.map((category) => (
                <TabsContent
                  key={category.id}
                  value={category.id}
                  className="mt-0"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects
                      .filter(
                        (project) =>
                          category.id === "all" ||
                          project.category === category.id
                      )
                      .map((project, index) => (
                        <AnimateInView key={project.id} delay={index * 0.05}>
                          <motion.div
                            whileHover={{ y: -10 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 10,
                            }}
                          >
                            <Card className="overflow-hidden h-full bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group h-full rounded-xl">
                              <CardContent className="p-0">
                                <div className="relative aspect-video overflow-hidden">
                                  <Image
                                    src={project.image || "/logo/Shibaccus.png"}
                                    alt={project.title}
                                    width={800}
                                    height={450}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                  />
                                  <div className="absolute top-2 right-2 bg-primary/90 text-primary-foreground px-2 py-1 text-xs rounded-full">
                                    {project.category}
                                  </div>
                                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-4">
                                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    <Link href={`/portfolio/${project.id}`}>
                                      {project.title}
                                    </Link>
                                  </h3>
                                  <p className="text-sm text-muted-foreground capitalize mb-2">
                                    {project.category}
                                  </p>
                                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                    {project.description}
                                  </p>
                                  <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies
                                      .slice(0, 3)
                                      .map((tech, i) => (
                                        <span
                                          key={i}
                                          className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs text-primary"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                    {project.technologies.length > 3 && (
                                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                                        +{project.technologies.length - 3}
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <Link href={`/portfolio/${project.id}`}>
                                      <Button
                                        variant="default"
                                        size="sm"
                                        className="group rounded-full"
                                      >
                                        Details
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                      </Button>
                                    </Link>
                                    <div className="flex gap-2">
                                      {project.demoUrl && (
                                        <Link
                                          href={project.demoUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 rounded-full hover:bg-primary/5 hover:text-primary"
                                          >
                                            <ExternalLink className="h-4 w-4" />
                                          </Button>
                                        </Link>
                                      )}
                                      {project.githubUrl && (
                                        <Link
                                          href={project.githubUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 rounded-full hover:bg-primary/5 hover:text-primary"
                                          >
                                            <Github className="h-4 w-4" />
                                          </Button>
                                        </Link>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </AnimateInView>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <AnimateInView delay={0.3}>
            <div className="mt-16 p-8 bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold silver-text mb-4">
                  Our Project Approach
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  We follow a collaborative and iterative approach to ensure
                  your project meets your business goals and exceeds your
                  expectations.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold">1</span>
                    </div>
                  </div>
                  <h3 className="text-center font-bold mb-2">Discovery</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    We start by understanding your business, goals, target
                    audience, and project requirements.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold">2</span>
                    </div>
                  </div>
                  <h3 className="text-center font-bold mb-2">Planning</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    We create a detailed project plan, including timeline,
                    milestones, and deliverables.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold">3</span>
                    </div>
                  </div>
                  <h3 className="text-center font-bold mb-2">Execution</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Our team works diligently to bring your vision to life, with
                    regular updates and feedback sessions.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold">4</span>
                    </div>
                  </div>
                  <h3 className="text-center font-bold mb-2">Delivery</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    We deliver a polished final product, along with
                    documentation and training if needed.
                  </p>
                </div>
              </div>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.4}>
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold silver-text mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                Let's collaborate to create something amazing together. Contact
                us today to discuss your project needs.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 neon-glow"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </AnimateInView>
        </div>
      </main>
    </PageTransition>
  );
}
