"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import { AnimateInView } from "./animate-in-view"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "./ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "/logo/Shibaccus.png?height=200&width=200",
    content:
      "Working with this freelancer was an absolute pleasure. They delivered exceptional work that exceeded our expectations and was always responsive to their feedback.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupX",
    image: "/logo/Shibaccus.png?height=200&width=200",
    content:
      "I've worked with many freelancers over the years, but none have been as professional and skilled as this one. They truly understand what it takes to deliver high-quality work.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateNow",
    image: "/logo/Shibaccus.png?height=200&width=200",
    content:
      "The attention to detail and creativity brought to our project was impressive. I highly recommend their services to anyone looking for top-notch work.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CTO",
    company: "TechSolutions",
    image: "/logo/Shibaccus.png?height=200&width=200",
    content:
      "Exceptional technical skills combined with great communication made our project a success. The freelancer was able to translate our complex requirements into a functional solution.",
    rating: 5,
  },
  {
    id: 5,
    name: "Jessica Lee",
    role: "Creative Director",
    company: "DesignHub",
    image: "/logo/Shibaccus.png?height=200&width=200",
    content:
      "The design work was outstanding. They have a great eye for aesthetics and user experience. Our website has received numerous compliments since the redesign.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Keyboard navigation for testimonials
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      nextTestimonial()
    } else if (e.key === "ArrowLeft") {
      prevTestimonial()
    }
  }

  return (
    <section id="testimonials" className="py-20" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <motion.div
                className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary tag"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Testimonials
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                What Clients Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take my word for it. Here's what my clients have to say about working with me.
              </p>
            </div>
          </div>
        </AnimateInView>

        <div className="mt-12 relative">
          <div className="overflow-hidden py-10">
            <div className="max-w-3xl mx-auto min-h-[350px] flex items-center">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <Card className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 neon-border overflow-hidden">
                  <CardContent className="p-8 relative">
                    <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/10" />
                    <div className="flex flex-col items-center text-center">
                      <div className="flex items-center gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonials[activeIndex].rating
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="mb-6 text-muted-foreground text-lg italic relative z-10 min-h-[80px] flex items-center justify-center">
                        "{testimonials[activeIndex].content}"
                      </p>
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary">
                          <Image
                            src={testimonials[activeIndex].image || "/logo/Shibaccus.png"}
                            alt={testimonials[activeIndex].name}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{testimonials[activeIndex].name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-primary" : "w-2 bg-primary/30"
                }`}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1)
                  setActiveIndex(index)
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between pointer-events-none px-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 neon-border pointer-events-auto"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 neon-border pointer-events-auto"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>
            Use <kbd className="px-2 py-1 bg-primary/10 rounded text-xs">←</kbd> and{" "}
            <kbd className="px-2 py-1 bg-primary/10 rounded text-xs">→</kbd> arrow keys to navigate testimonials
          </p>
        </div>
      </div>
    </section>
  )
}

