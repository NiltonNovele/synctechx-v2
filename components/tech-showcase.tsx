"use client";

import { AnimateInView } from "./animate-in-view";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  FileCode,
  Bot,
  Monitor,
  Zap,
} from "lucide-react";

export default function TechShowcase() {
  const technologies = [
    {
      category: "Frontend",
      icon: <Code className="h-8 w-8 text-primary" />,
      techs: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8 text-primary" />,
      techs: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
      ],
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      techs: [
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      ],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      techs: [
        {
          name: "React Native",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
        {
          name: "Swift",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
        },
        {
          name: "Kotlin",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        },
      ],
    },
    {
      category: "Machine Learning",
      icon: <Bot className="h-8 w-8 text-primary" />,
      techs: [
        {
          name: "TensorFlow",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        },
        {
          name: "PyTorch",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        },
        {
          name: "Scikit-Learn",
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        },
        {
          name: "Keras",
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
        },
      ],
    },
    {
      category: "Desktop Apps",
      icon: <Monitor className="h-8 w-8 text-primary" />,
      techs: [
        {
          name: "Electron",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
        },
        {
          name: "Qt",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg",
        },
        {
          name: "C#/.NET",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
          name: "JavaFX",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
      ],
    },
    {
      category: "DevOps",
      icon: <Globe className="h-8 w-8 text-primary" />,
      techs: [
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "AWS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        },
        {
          name: "GitHub Actions",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Kubernetes",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        },
      ],
    },
    {
      category: "Testing & QA",
      icon: <FileCode className="h-8 w-8 text-primary" />,
      techs: [
        {
          name: "Jest",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        },
        {
          name: "Cypress",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
        },
        {
          name: "Mocha",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg",
        },
        {
          name: "Selenium",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
        },
      ],
    },
    {
      category: "Cloud Services",
      icon: <Zap className="h-8 w-8 text-primary" />,
      techs: [
        {
          name: "Vercel",
          icon: "https://cdn.worldvectorlogo.com/logos/vercel.svg",
        },
        {
          name: "Netlify",
          icon: "https://cdn.worldvectorlogo.com/logos/netlify.svg",
        },
        {
          name: "Google Cloud",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        },
        {
          name: "Azure",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView>
          <div className="text-center mb-12">
            <motion.div
              className="inline-block rounded-lg bg-blue-600/10 px-3 py-1 text-sm text-blue-600 tag mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Our Expertise
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl silver-text mb-4">
              Technologies We Master
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground">
              We leverage cutting-edge technologies to build robust, scalable,
              and innovative solutions for our clients.
            </p>
          </div>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((category, index) => (
            <AnimateInView key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Card className="glass-card h-full border-blue-600/10 hover:border-blue-600/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-blue-600/10">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold">{category.category}</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {category.techs.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          className="flex flex-col items-center p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                          tabIndex={0}
                        >
                          <div className="w-12 h-12 relative mb-2 flex items-center justify-center">
                            <img
                              src={tech.icon || "/logo/Shibaccus.png"}
                              alt={tech.name}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                          <span className="text-sm">{tech.name}</span>
                        </motion.div>
                      ))}
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
