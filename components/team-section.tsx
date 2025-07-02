"use client";

import { AnimateInView } from "./animate-in-view";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Instagram, Twitter, Globe } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Nilton Novele",
      role: "Technology Lead",
      image: "/blog/authors/nilton.jpeg?height=400&width=400",
      links: {
        website: "https://niltonnovele.com",
        linkedin: "https://www.linkedin.com/in/nilton-novele-82211821b/",
        github: "https://github.com/NiltonNovele",
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
        linkedin:
          "https://www.linkedin.com/in/anderson-joão-manjate-75abaa31a/",
        twitter: "https://synctechx.com/",
        instagram: "https://www.instagram.com/mr.manjate_/",
      },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background/80 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView>
          <div className="text-center mb-12">
            <motion.div
              className="inline-block rounded-lg bg-blue-600/10 px-3 py-1 text-sm text-blue-600 tag mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Meet Our Team
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl silver-text mb-4">
              SyncTechX Core Team
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground">
              Youth-driven team
            </p>
          </div>
        </AnimateInView>

        <div className="grid gap-10 md:grid-cols-4 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card className="bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 overflow-hidden h-full rounded-xl">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image || "/logo/Shibaccus.png"}
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
                    <p className="text-blue-600 text-sm mb-4">{member.role}</p>
                    <div className="flex gap-4 items-center">
                      {member.links?.linkedin && (
                        <a
                          href={member.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-600/80 transition" />
                        </a>
                      )}
                      {member.links?.twitter && (
                        <a
                          href={member.links.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter"
                        >
                          <Twitter className="w-5 h-5 text-blue-600 hover:text-blue-600/80 transition" />
                        </a>
                      )}
                      {member.links?.instagram && (
                        <a
                          href={member.links.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                        >
                          <Instagram className="w-5 h-5 text-blue-600 hover:text-blue-600/80 transition" />
                        </a>
                      )}
                      {member.links?.website && (
                        <a
                          href={member.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Website"
                        >
                          <Globe className="w-5 h-5 text-blue-600 hover:text-blue-600/80 transition" />
                        </a>
                      )}
                      {member.links?.github && (
                        <a
                          href={member.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <Github className="w-5 h-5 text-blue-600 hover:text-blue-600/80 transition" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/about">
            <motion.div
              className="inline-flex items-center text-blue-600 hover:text-blue-600/80"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Learn more about our team
              <ExternalLink className="ml-2 h-4 w-4" />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
