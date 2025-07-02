"use client";

import { PageTransition } from "@/components/page-transition";
import { AnimateInView } from "@/components/animate-in-view";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  User,
  Tag,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Simulated project data (replace with your backend/db logic)
const projectDetails = [
  {
    id: 1,
    title: "BroFessor",
    client: "Internal Project",
    category: "Web Development",
    date: "May-June 2025",
    duration: "4 weeks",
    image: "/brofessor.png?height=600&width=1200",
    gallery: [
      "/portfolio/brofessor/1.png?height=600&width=800",
      "/portfolio/brofessor/2.png?height=600&width=800",
      "/portfolio/brofessor/3.png?height=600&width=800",
      "/portfolio/brofessor/4.png?height=600&width=800",
    ],
    description:
      "Brofessor is a smart academic assistant that helps students learn, revise, and stay organized...",
    challenge:
      "Most learning platforms are either too static or overly complex...",
    solution:
      "Built with Next.js and Tailwind CSS, Brofessor integrates Vapi for voice conversations...",
    results:
      "Since launch, Brofessor has been adopted by over 500+ students...",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vapi",
      "Supabase",
      "MongoDB",
      "Clerk",
      "Vercel",
    ],
    testimonial: {
      content:
        "Brofessor has completely changed how I study. It’s like having a personal tutor in my pocket...",
      author: "Carlos M.",
      role: "2nd Year Computer Science Student",
    },
    liveUrl: "#",
  },
  {
    id: 2,
    title: "AMECC Platform",
    client: "AMECC",
    category: "Web Development",
    date: "April 2025",
    duration: "4 weeks",
    image: "/portfolio/amecc/amecc.png?height=600&width=1200",
    gallery: [
      "/portfolio/amecc/1.png?height=600&width=800",
      "/portfolio/amecc/2.png?height=600&width=800",
      "/portfolio/amecc/3.png?height=600&width=800",
      "/portfolio/amecc/4.png?height=600&width=800",
    ],
    description:
      "The AMECC web platform is a centralized digital hub where Mozambican students in Cape Town can register with the association, stay informed, and access student support resources.",
    challenge:
      "Many Mozambican students in Cape Town struggle to find reliable, up-to-date information and support. Existing channels were fragmented, making it hard to stay connected and engaged with the community.",
    solution:
      "We developed a modern, responsive platform that allows students to easily register, explore upcoming and past events, catch up on community news, and contact the association directly for help or academic support.",
    results:
      "Within weeks of launching, dozens of students registered and began using the platform to stay informed, attend events, and reach out for assistance — significantly improving communication between the association and its members.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer-motion",
      "Vercel",
    ],

    testimonial: {
      content:
        "This platform is a game-changer — finally something built for us, with simplicity and accessibility in one place.",
      author: "Shelby M.",
      role: "AMECC's President",
    },
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Compliance & Verification Software",
    client: "HR Country Intelligence",
    category: "Software Development",
    date: "June 2025",
    duration: "2 weeks",
    image: "/portfolio/hrci/4.png?height=600&width=1200",
    gallery: [
      "/portfolio/hrci/1.png?height=600&width=800",
      "/portfolio/hrci/2.png?height=600&width=800",
      "/portfolio/hrci/3.png?height=600&width=800",
      "/portfolio/hrci/5.png?height=600&width=800",
    ],
    description:
      "A secure compliance software that allows HR professionals to perform comprehensive background checks and verify candidates’ identities, academic records, and professional qualifications.",
    challenge:
      "Traditional verification methods are time-consuming, inconsistent, and prone to human error. HR teams needed a more efficient and trustworthy system for screening candidates before hiring.",
    solution:
      "We built a fast, user-friendly desktop-based system in Java that automates background checks, cross-references official databases, and generates detailed verification reports—all while maintaining strict data security and compliance protocols.",
    results:
      "Since its deployment, the platform has helped HR Country Intelligence reduce manual verification time by over 60% and significantly improve trust in candidate data during recruitment processes.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Thymeleaf",
      "REST API",
      "Docker",
    ],
    testimonial: {
      content:
        "This software is a time saving machine in our daily processes and activities.",
      author: "Teolisa N.",
      role: "HR Country Intelligence",
    },
    liveUrl: "#",
  },
  {
    id: 4,
    title: "TeamSync",
    client: "SaaS Product",
    category: "Software Development",
    date: "May 2025",
    duration: "2 weeks",
    image: "/portfolio/teamsync/1.png?height=600&width=1200",
    gallery: [
      "/portfolio/teamsync/2.png?height=600&width=800",
      "/portfolio/teamsync/3.png?height=600&width=800",
      "/portfolio/teamsync/4.png?height=600&width=800",
      "/portfolio/teamsync/5.png?height=600&width=800",
    ],
    description:
      "TeamSync is a modern internal chat application designed to help organizations streamline communication and increase productivity by keeping work conversations away from distractions like WhatsApp and social media.",
    challenge:
      "Many teams rely on consumer messaging apps for internal communication, which often leads to distractions, poor organization, and blurred boundaries between personal and professional conversations.",
    solution:
      "We developed TeamSync, a secure, distraction-free messaging platform tailored for internal organizational use. It features team channels, private messaging, media sharing, and role-based access control — all optimized for productivity and accountability.",
    results:
      "Organizations using TeamSync reported better focus, improved communication flow, and a clear separation between work and personal messaging. The platform has become a reliable tool for resolving internal issues quickly and efficiently, all within a professional digital space.",
    technologies: ["Flutter", "MongoDB", "Dart", "React"],
    testimonial: {
      content:
        "No ads, no distractions, no extras. Pure simplicity. Promotes Productivity.",
      author: "Jaime C.",
      role: "Human Resources",
    },
    liveUrl: "#",
  },
  {
    id: 5,
    title: "E-Commerce",
    client: "NDA",
    category: "web",
    date: "March 2025",
    duration: "1 week",
    image: "/logo/logo.png?height=600&width=1200",
    gallery: [
      "/logo/logo.png?height=600&width=800",
      "/logo/logo.png?height=600&width=800",
      "/logo/logo.png?height=600&width=800",
      "/logo/logo.png?height=600&width=800",
    ],
    description: "-",
    challenge: "-",
    solution: "-",
    results: "-",
    technologies: ["N/A"],
    testimonial: {
      content: "-",
      author: "-",
      role: "-",
    },
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Rapodromo",
    client: "Rapodromo",
    category: "web",
    date: "May 2025",
    duration: "4 weeks",
    image: "/portfolio/rapodromo/4.png?height=600&width=1200",
    gallery: [
      "/portfolio/rapodromo/1.png?height=600&width=800",
      "/portfolio/rapodromo/2.png?height=600&width=800",
      "/portfolio/rapodromo/3.png?height=600&width=800",
      "/portfolio/rapodromo/5.png?height=600&width=800",
    ],
    description:
      "Rapódromo is a digital platform built for a rising Mozambican rap battle league, offering fans a one-stop hub to follow the season, watch battles, buy tickets, connect with the community, and shop for exclusive merchandise.",
    challenge:
      "Fans previously had no central place to follow season updates, rewatch battles, or interact with the league. Ticket purchases were handled manually via WhatsApp, making the process slow, unreliable, and hard to scale.",
    solution:
      "We built a dynamic and responsive web platform that streamlines the fan experience. It includes a full season leaderboard, battle recaps, a community chat section, live stream integration, digital ticketing, and a merchandise store — all under one roof.",
    results:
      "Since launch, Rapódromo fans have been more engaged, with faster ticket sales, active community discussions, and a significant increase in merchandise orders. The platform has helped professionalize the league and strengthen the bond between artists and their audience.",
    technologies: ["Flutter", "MongoDB", "Dart", "React"],
    testimonial: {
      content: "-",
      author: "-",
      role: "-",
    },
    liveUrl: "#",
  },
];

export default function ProjectDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const projectId = parseInt(params.id, 10);
  const project = projectDetails.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground text-lg">Project not found.</p>
      </main>
    );
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimateInView>
              <Link
                href="/portfolio"
                className="inline-flex items-center text-primary hover:text-primary/80 mb-8 group focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Portfolio
              </Link>
            </AnimateInView>

            <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
              <div>
                <AnimateInView>
                  <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </AnimateInView>

                <AnimateInView delay={0.1}>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                    {project.title}
                  </h1>
                </AnimateInView>

                <AnimateInView delay={0.2}>
                  <Tabs defaultValue="overview" className="mt-8">
                    <TabsList className="mb-6">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="challenge">Challenge</TabsTrigger>
                      <TabsTrigger value="solution">Solution</TabsTrigger>
                      <TabsTrigger value="results">Results</TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="overview"
                      className="text-muted-foreground space-y-4"
                    >
                      <p>{project.description}</p>
                    </TabsContent>
                    <TabsContent
                      value="challenge"
                      className="text-muted-foreground space-y-4"
                    >
                      <p>{project.challenge}</p>
                    </TabsContent>
                    <TabsContent
                      value="solution"
                      className="text-muted-foreground space-y-4"
                    >
                      <p>{project.solution}</p>
                    </TabsContent>
                    <TabsContent
                      value="results"
                      className="text-muted-foreground space-y-4"
                    >
                      <p>{project.results}</p>
                    </TabsContent>
                  </Tabs>
                </AnimateInView>

                <AnimateInView delay={0.3}>
                  <h2 className="text-2xl font-bold mt-12 mb-6">
                    Project Gallery
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-video overflow-hidden rounded-lg"
                      >
                        <Image
                          src={image}
                          alt={`Project image ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </AnimateInView>

                <AnimateInView delay={0.4}>
                  <h2 className="text-2xl font-bold mt-12 mb-6">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </AnimateInView>
              </div>

              <div>
                <AnimateInView delay={0.2}>
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/10 mb-8">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold mb-4">
                        Project Details
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <User className="h-5 w-5 text-primary" />
                          <span className="font-medium">Client:</span>
                          <span className="text-muted-foreground">
                            {project.client}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="h-5 w-5 text-primary" />
                          <span className="font-medium">Category:</span>
                          <span className="text-muted-foreground">
                            {project.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span className="font-medium">Date:</span>
                          <span className="text-muted-foreground">
                            {project.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="font-medium">Duration:</span>
                          <span className="text-muted-foreground">
                            {project.duration}
                          </span>
                        </div>
                      </div>
                      <div className="pt-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full group">
                            <span>View Live Site</span>
                            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </AnimateInView>

                <AnimateInView delay={0.3}>
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Client Testimonial
                      </h3>
                      <div className="space-y-4">
                        <p className="text-muted-foreground italic">
                          "{project.testimonial.content}"
                        </p>
                        <div>
                          <p className="font-medium">
                            {project.testimonial.author}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {project.testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimateInView>

                <AnimateInView delay={0.4}>
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">
                      Interested in a similar project?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Let's discuss how we can help bring your vision to life.
                    </p>
                    <Link href="#contact">
                      <Button className="w-full">Contact Us</Button>
                    </Link>
                  </div>
                </AnimateInView>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
