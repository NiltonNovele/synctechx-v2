"use client";

import { PageTransition } from "@/components/page-transition";
import { AnimateInView } from "@/components/animate-in-view";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Twitter, Linkedin, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Nilton Novele",
    role: "Technology Lead",
    image: "/blog/authors/nilton.jpeg?height=400&width=400",
    links: {
      website: "https://niltonnovele.com",
      linkedin: "https://www.linkedin.com/in/nilton-novele-82211821b/",
      twitter: "https://x.com/nilton_novele",
      instagram: "https://www.instagram.com/niltonnovele/",
    },
  },
  {
    name: "Bionda Shirley",
    role: "Marketing Lead",
    image: "/blog/authors/bionda.jpg?height=400&width=400",
    links: {
      website: "https://synctechx.com",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://synctechx.com/",
      instagram: "https://www.instagram.com/biondaa_shirley/",
    },
  },
  {
    name: "Henzel Tibana",
    role: "Operations Lead",
    image: "/blog/authors/jumpex.jpg?height=400&width=400",
    links: {
      website: "https://synctechx.com",
      linkedin: "https://www.linkedin.com/in/henzel-tibana-a07068211/",
      twitter: "https://x.com/HenzelJt",
      instagram: "https://www.instagram.com/henzel_tibs/",
    },
  },
  {
    name: "Anderson Manjate",
    role: "External Relations Lead",
    image: "/blog/authors/manjate.jpg?height=400&width=400",
    links: {
      website: "https://synctechx.com",
      linkedin: "https://www.linkedin.com/in/anderson-joão-manjate-75abaa31a/",
      twitter: "https://synctechx.com/",
      instagram: "https://www.instagram.com/mr.manjate_/",
    },
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateInView>
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                About Us
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl silver-text mb-4">
                Meet the SyncTechX core Team
              </h1>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed">
                A youth-driven team, compiling diverse skill to bring the best
                of technology to solve real world problems
              </p>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.1}>
            <div className="grid gap-10 md:grid-cols-4 mb-20">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Card className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden h-full rounded-xl">
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={member.image || "/logo/logo.png"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent"></div>
                      </div>
                      <div className="p-6 relative z-10">
                        <h3 className="text-xl font-bold mb-1 text-foreground">
                          {member.name}
                        </h3>
                        <p className="text-primary text-sm mb-4">
                          {member.role}
                        </p>
                        <div className="flex gap-4 items-center">
                          {member.links?.linkedin && (
                            <a
                              href={member.links.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="LinkedIn"
                            >
                              <Linkedin className="w-5 h-5 text-primary hover:text-primary/80 transition" />
                            </a>
                          )}
                          {member.links?.twitter && (
                            <a
                              href={member.links.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Twitter"
                            >
                              <Twitter className="w-5 h-5 text-primary hover:text-primary/80 transition" />
                            </a>
                          )}
                          {member.links?.instagram && (
                            <a
                              href={member.links.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Instagram"
                            >
                              <Instagram className="w-5 h-5 text-primary hover:text-primary/80 transition" />
                            </a>
                          )}
                          {member.links?.website && (
                            <a
                              href={member.links.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Website"
                            >
                              <Globe className="w-5 h-5 text-primary hover:text-primary/80 transition" />
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimateInView>

          <AnimateInView delay={0.2}>
            <div className="grid gap-12 lg:grid-cols-2 mb-20">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter silver-text">
                    Our Story
                  </h2>
                  <p className="text-muted-foreground">
                    As four young adults with different but complementary skills
                    — from design and development to strategy and systems — we
                    found ourselves constantly discussing the challenges we and
                    those around us faced in everyday life.
                  </p>
                  <p className="text-muted-foreground">
                    Frustrated by inefficiencies and missed opportunities, we
                    realized that instead of waiting for solutions, we could
                    build them. What started as late-night brainstorming
                    sessions quickly turned into prototypes, platforms, and
                    purposeful products.
                  </p>
                  <p className="text-muted-foreground">
                    That mindset gave birth to <strong>SyncTechX</strong> — a
                    youth-led tech collective focused on creating smart, simple,
                    and scalable solutions for real-world problems across
                    communities, businesses, and individuals.
                  </p>
                  <p className="text-muted-foreground">
                    Today, we remain committed to turning ideas into impact,
                    blending innovation with empathy, and proving that age and
                    background are no barriers when purpose drives the mission.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Our Values</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>
                        Innovation-driven solutions for modern challenges
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>User-centered design in everything we create</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>
                        Quality and attention to detail in all our work
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Continuous learning and professional growth</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center lg:justify-end">
                <motion.div
                  className="relative h-[450px] w-[350px] overflow-hidden rounded-lg border border-primary/30 bg-card/30 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Image
                    src="/logo/logo.png?height=900&width=700"
                    alt="Our Team"
                    width={700}
                    height={900}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">SyncTechX</h3>
                      <p className="text-sm text-primary">
                        Synchronizing Technology <br /> X - amount of
                        possibilities
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.3}>
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
                Our Global Experience
              </h2>
              <Card className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 rounded-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-primary/20">
                      <Image
                        src="/logo/logo.png?height=200&width=200"
                        alt="Tokyo Skyline"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        Maputo, Mozambique | Cape Town, South Africa
                      </h3>
                      <p className="text-primary mb-4">
                        International Development
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Interestingly, while the core team of SyncTechX is based
                        in Cape Town, the rest of our collaborators operate from
                        Maputo. Rather than being a limitation, this geographic
                        split empowers us to bridge two dynamic cultures and
                        perspectives — Southern Africa's tech-driven pulse and
                        Mozambique’s growing innovation scene.
                      </p>
                      <p className="text-muted-foreground">
                        Our international positioning gives us firsthand
                        exposure to diverse industries and challenges, enabling
                        us to approach each project with a rich blend of
                        cultural insight, adaptability, and forward-thinking
                        technical solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.4}>
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold mb-4 silver-text">
                Our Skills
              </h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground mb-10">
                As Computer Science students, we've developed a diverse set of
                technical skills that we apply to our projects.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Web Development", level: 90 },
                  { name: "UI/UX Design", level: 85 },
                  { name: "Mobile Development", level: 80 },
                  { name: "Database Design", level: 85 },
                  { name: "AI & ML", level: 75 },
                  { name: "API Development", level: 85 },
                  { name: "Desktop Application", level: 80 },
                  { name: "Problem Solving", level: 90 },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Card className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 neon-border">
                      <CardContent className="p-6">
                        <h3 className="font-medium mb-2">{skill.name}</h3>
                        <div className="w-full bg-background/50 h-2 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <div className="text-right text-sm text-primary mt-1">
                          {skill.level}%
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.5}>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 silver-text">
                Let's Work Together
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground mb-8">
                Have a project in mind? We'd love to hear about it and discuss
                how we can help bring your vision to life.
              </p>
              <Link href="/contact">
                <Button size="lg" className="neon-glow">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </AnimateInView>
        </div>
      </main>
    </PageTransition>
  );
}
