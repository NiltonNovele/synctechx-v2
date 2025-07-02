"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AnimateInView } from "./animate-in-view";
import { motion } from "framer-motion";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // This would be replaced with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description:
            "Thank you for your message. We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description:
            "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-300/10 px-3 py-1 text-blue-600">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get In Touch
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind? Let's discuss how we can help bring your
                vision to life.
              </p>
            </div>
          </div>
        </AnimateInView>

        <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
          <div className="space-y-6">
            <AnimateInView delay={0.1}>
              <Card className="bg-card/50 backdrop-blur-sm border-blue-300/10 hover:border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/5 focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:ring-offset-2 focus-within:ring-offset-background">
                <CardContent className="flex items-center gap-4 p-6">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-300/10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Mail className="h-6 w-6 text-blue-600" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">
                      contact@synctechx.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimateInView>

            <AnimateInView delay={0.2}>
              <Card className="bg-card/50 backdrop-blur-sm border-blue-300/10 hover:border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/5 focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:ring-offset-2 focus-within:ring-offset-background">
                <CardContent className="flex items-center gap-4 p-6">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-300/10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Phone className="h-6 w-6 text-blue-600" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+258 (84) 029 3361</p>
                  </div>
                </CardContent>
              </Card>
            </AnimateInView>

            <AnimateInView delay={0.3}>
              <Card className="bg-card/50 backdrop-blur-sm border-blue-300/10 hover:border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/5 focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:ring-offset-2 focus-within:ring-offset-background">
                <CardContent className="flex items-center gap-4 p-6">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-300/10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">
                      Maputo, Mz | Cape Town, SA
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimateInView>
          </div>

          <AnimateInView delay={0.4}>
            <Card className="bg-card/50 backdrop-blur-sm border-blue-300/10 hover:border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/5 focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:ring-offset-2 focus-within:ring-offset-background">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-blue-300/10 focus:border-blue-400/50 transition-all focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-blue-300/10 focus:border-blue-400/50 transition-all focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-background"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-blue-300/10 focus:border-blue-400/50 transition-all focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] border-blue-300/10 focus:border-blue-400/50 transition-all focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-background"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full group focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-background"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
