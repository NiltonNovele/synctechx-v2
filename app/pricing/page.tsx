"use client";

import { PageTransition } from "@/components/page-transition";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimateInView } from "@/components/animate-in-view";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for small businesses and startups",
    price: "MZN 5,999",
    features: [
      "Custom Website Design",
      "Mobile Responsive",
      "5 Pages",
      "Contact Form",
      "Basic SEO Setup",
      "1 Month Support",
    ],
    popular: false,
    delay: 0,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "MZN 9,999",
    features: [
      "Everything in Basic",
      "10 Pages",
      "Blog Integration",
      "Social Media Integration",
      "Advanced SEO Setup",
      "E-commerce (up to 20 products)",
      "3 Months Support",
    ],
    popular: true,
    delay: 0.1,
  },
  {
    name: "Enterprise",
    description: "For established businesses with complex needs",
    price: "MZN 14,999",
    features: [
      "Everything in Professional",
      "Unlimited Pages",
      "Custom Functionality",
      "E-commerce (unlimited products)",
      "Payment Gateway Integration",
      "Performance Optimization",
      "Advanced Analytics",
      "Full-time Support",
    ],
    popular: false,
    delay: 0.2,
  },
];

export default function PricingPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimateInView>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <motion.div
                    className="inline-block rounded-lg bg-blue-600/10 px-3 py-1 text-sm text-blue-600 tag"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Pricing
                  </motion.div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    Transparent Pricing
                  </h1>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Choose the perfect plan for your business needs. All plans
                    include quality work and exceptional service.
                  </p>
                </div>
              </div>
            </AnimateInView>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {pricingPlans.map((plan) => (
                <AnimateInView key={plan.name} delay={plan.delay}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="h-full"
                  >
                    <Card
                      className={`h-full relative overflow-hidden bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 group ${
                        plan.popular ? "border-blue-600" : ""
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-blue-600 text-primary-foreground px-3 py-1 text-xs">
                          Most Popular
                        </div>
                      )}
                      <CardHeader className="p-6">
                        <div className="mb-4 flex justify-center">
                          <svg
                            className="w-16 h-16 text-blue-600 group-hover:animate-pulse-glow"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M12 6v6l4 2"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors neon-text">
                          {plan.name}
                        </CardTitle>
                        <CardDescription className="group-hover:text-muted-foreground/80 transition-colors">
                          {plan.description}
                        </CardDescription>
                        <div className="mt-4">
                          <span className="text-4xl font-bold group-hover:text-blue-600 transition-colors">
                            {plan.price}
                          </span>
                          <span className="text-muted-foreground ml-2">
                            / project
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 pt-0 flex-grow">
                        <ul className="space-y-3 min-h-[280px]">
                          {plan.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2"
                            >
                              <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
                              <span className="group-hover:text-foreground/90 transition-colors">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Link href="/contact" className="w-full">
                          <Button
                            className={`w-full btn-hover-effect neon-glow ${
                              plan.popular
                                ? "bg-blue-600 hover:bg-blue-600/90"
                                : "bg-blue-600 hover:bg-blue-600/90"
                            }`}
                          >
                            Get Started
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </AnimateInView>
              ))}
            </div>

            <AnimateInView delay={0.3}>
              <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-4 neon-text">
                  Need a Custom Solution?
                </h2>
                <p className="text-muted-foreground max-w-[600px] mx-auto mb-6">
                  Don't see a plan that fits your needs? Contact me for a custom
                  quote tailored to your specific requirements.
                </p>
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button size="lg" variant="outline" className="neon-border">
                      Request Custom Quote
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </AnimateInView>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
