"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimateInView } from "./animate-in-view";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReadMoreButton } from "./read-more-button";

const categories = [
  { id: "all", label: "All Work" },
  { id: "web", label: "Web Development" },
  { id: "design", label: "Design" },
  { id: "mobile", label: "Mobile Apps" },
];

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    category: "web",
    image: "/logo/Shibaccus.png?height=600&width=800",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "mobile",
    image: "/logo/Shibaccus.png?height=600&width=800",
  },
  {
    id: 3,
    title: "Brand Identity Design",
    category: "design",
    image: "/logo/Shibaccus.png?height=600&width=800",
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "web",
    image: "/logo/Shibaccus.png?height=600&width=800",
  },
  {
    id: 5,
    title: "Food Delivery App",
    category: "mobile",
    image: "/logo/Shibaccus.png?height=600&width=800",
  },
  {
    id: 6,
    title: "Corporate Branding",
    category: "design",
    image: "/logo/Shibaccus.png?height=600&width=800",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-600/10 px-3 py-1 text-sm text-blue-600">
                Portfolio
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Recent Projects
              </h2>
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
              <TabsList className="mb-8">
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
                      <AnimateInView key={project.id} delay={index * 0.1}>
                        <Link href={`/portfolio/${project.id}`}>
                          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10 group focus-within:ring-2 focus-within:ring-blue-600/50 focus-within:ring-offset-2 focus-within:ring-offset-background">
                            <CardContent className="p-0">
                              <div className="relative aspect-video overflow-hidden">
                                <Image
                                  src={project.image || "/logo/Shibaccus.png"}
                                  alt={project.title}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                                  <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-white flex flex-col items-center"
                                  >
                                    <span className="font-bold">
                                      View Project
                                    </span>
                                    <ArrowRight className="mt-2 h-5 w-5" />
                                  </motion.div>
                                </div>
                              </div>
                              <div className="p-4">
                                <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                                  {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground capitalize">
                                  {project.category}
                                </p>
                                <div className="mt-3">
                                  <ReadMoreButton
                                    href={`/portfolio/${project.id}`}
                                    size="sm"
                                  />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </AnimateInView>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
