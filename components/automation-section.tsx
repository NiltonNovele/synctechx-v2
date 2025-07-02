"use client";

import { AnimateInView } from "./animate-in-view";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Zap, Workflow, Clock, Bot, Repeat, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AutomationSection() {
  const automationServices = [
    {
      title: "Workflow Automation",
      description:
        "We streamline your business processes by automating repetitive tasks and complex workflows.",
      icon: <Workflow className="h-10 w-10 text-primary" />,
    },
    {
      title: "AI Integration",
      description:
        "Integrate artificial intelligence to perfeorm heavy and reptitive tasks.",
      icon: <Bot className="h-10 w-10 text-primary" />,
    },
    {
      title: "CI/CD Pipelines",
      description:
        "We set up continuous integration and deployment pipelines to automate your software delivery process.",
      icon: <Repeat className="h-10 w-10 text-primary" />,
    },
    {
      title: "Test Automation",
      description:
        "Our automated testing frameworks ensure your software is thoroughly tested with minimal manual effort.",
      icon: <Settings className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView>
          <div className="text-center mb-12">
            <motion.div
              className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary tag mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Automation Tools
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-100 mb-4">
              Streamline Your Operations
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground">
              We develop custom automation solutions that save time, reduce
              errors, and increase efficiency across your organization.
            </p>
          </div>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimateInView delay={0.1}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-sky-400">Why Automate?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 mt-1">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Save Time</h4>
                    <p className="text-muted-foreground">
                      Automation eliminates repetitive manual tasks, freeing up
                      your team to focus on high-value activities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 mt-1">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">
                      Increase Efficiency
                    </h4>
                    <p className="text-muted-foreground">
                      Automated processes run faster and more consistently than
                      manual ones, improving overall productivity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 mt-1">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">
                      Reduce Errors
                    </h4>
                    <p className="text-muted-foreground">
                      Automation minimizes human error, ensuring consistent
                      quality and reliable outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.2}>
            <Card className="glass-card border-primary/10 h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-sky-400">
                  Our Automation Approach
                </h3>
                <ol className="space-y-4">
                  {[
                    "Process Analysis",
                    "Solution Design",
                    "Implementation",
                    "Monitoring & Optimization",
                  ].map((step, i) => (
                    <li className="flex items-start gap-3" key={i}>
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold">{step}</h4>
                        <p className="text-muted-foreground text-sm">
                          {
                            [
                              "We thoroughly analyze your existing processes to identify automation opportunities.",
                              "We design custom automation solutions tailored to your specific requirements.",
                              "We develop and deploy the automation solution with minimal disruption to your operations.",
                              "We continuously monitor and optimize the automation to ensure maximum efficiency.",
                            ][i]
                          }
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </AnimateInView>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {automationServices.map((service, index) => (
            <AnimateInView key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="h-full"
              >
                <Card className="glass-card h-full border-primary/10 hover:border-primary/30 focus-within:ring-2 focus-within:ring-primary/50 focus-within:ring-offset-2 focus-within:ring-offset-background">
                  <CardContent className="p-6 flex flex-col h-full">
                    <motion.div
                      className="mb-4 rounded-full bg-primary/10 p-3 w-fit"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 15px 5px rgba(60, 130, 230, 0.3)", // blue glow
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 text-blue-100 transition-colors">
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

        <AnimateInView delay={0.3}>
          <div className="text-center">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-blue-md focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
              >
                Explore Automation Services
              </Button>
            </Link>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
