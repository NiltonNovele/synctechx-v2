"use client";

import type React from "react";

import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { AnimateInView } from "@/components/animate-in-view";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  Calendar,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
    isIndividual: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          company: "",
          isIndividual: false,
        });
      } else {
        toast({
          title: "Error",
          description:
            data.error ||
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
    <PageTransition>
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateInView>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.div
                  className="inline-block rounded-lg bg-blue-600/10 px-3 py-1 text-sm text-blue-600 tag"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Contact
                </motion.div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Get In Touch
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind? Let's discuss how I can help bring
                  your vision to life.
                </p>
              </div>
            </div>
          </AnimateInView>

          <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
            <div className="space-y-6">
              <AnimateInView delay={0.1}>
                <Card className="bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 neon-border">
                  <CardContent className="flex items-center gap-4 p-6">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/10"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 15px 5px rgba(59, 130, 246, 0.3)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Mail className="h-6 w-6 text-blue-600" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold neon-text">Email</h3>
                      <a
                        href="mailto:contact@synctechx.com"
                        className="text-muted-foreground hover:text-blue-600 transition-colors"
                        aria-label="Send email to contact@synctechx.com"
                      >
                        Contact@synctechx.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </AnimateInView>

              <AnimateInView delay={0.2}>
                <Card className="bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 neon-border">
                  <CardContent className="flex items-center gap-4 p-6">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/10"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 15px 5px rgba(59, 130, 246, 0.3)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Phone className="h-6 w-6 text-blue-600" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold neon-text">Phone</h3>
                      <a
                        href="tel:+815551234567"
                        className="text-muted-foreground hover:text-blue-600 transition-colors"
                        aria-label="Call +258 (84) 029 3361"
                      >
                        +258 (84) 029 3361
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </AnimateInView>

              <AnimateInView delay={0.3}>
                <Card className="bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 neon-border">
                  <CardContent className="flex items-center gap-4 p-6">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/10"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 15px 5px rgba(59, 130, 246, 0.3)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold neon-text">Location</h3>
                      <p className="text-muted-foreground">
                        Maputo, Mozambique | Cape Town, South Africa
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimateInView>

              <AnimateInView delay={0.4}>
                <Card className="bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 neon-border">
                  <CardContent className="flex items-center gap-4 p-6">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/10"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 15px 5px rgba(59, 130, 246, 0.3)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Clock className="h-6 w-6 text-blue-600" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold neon-text">Working Hours</h3>
                      <p className="text-muted-foreground">
                        Mon - Fri: 9AM - 6PM
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimateInView>

              <AnimateInView delay={0.5}>
                <Card className="bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 neon-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center neon-text">
                      <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                      Schedule a Meeting
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Prefer to schedule a call? Choose a convenient time for a
                      discussion about your project.
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Button className="w-full btn-hover-effect neon-glow">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book a Consultation
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </AnimateInView>
            </div>

            <AnimateInView delay={0.3}>
              <Card className="bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 neon-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center neon-text">
                    <MessageSquare className="h-5 w-5 text-blue-600 mr-2" />
                    Send a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Silva"
                          value={formData.name}
                          onChange={handleChange}
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={
                            errors.name ? "name-error" : undefined
                          }
                          className={`border-blue-600/10 focus:border-blue-600/50 transition-all bg-background/50 ${
                            errors.name ? "border-red-500" : ""
                          }`}
                          disabled={isSubmitting}
                        />
                        {errors.name && (
                          <p
                            id="name-error"
                            className="text-red-500 text-xs flex items-center mt-1"
                          >
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Your Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john.silva@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                          className={`border-blue-600/10 focus:border-blue-600/50 transition-all bg-background/50 ${
                            errors.email ? "border-red-500" : ""
                          }`}
                          disabled={isSubmitting}
                        />
                        {errors.email && (
                          <p
                            id="email-error"
                            className="text-red-500 text-xs flex items-center mt-1"
                          >
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Company Name */}
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={handleChange}
                        aria-required={!formData.isIndividual}
                        disabled={formData.isIndividual || isSubmitting}
                        className={`border-blue-600/10 focus:border-blue-600/50 transition-all bg-background/50 ${
                          errors.company ? "border-red-500" : ""
                        }`}
                      />
                      {errors.company && (
                        <p className="text-red-500 text-xs flex items-center mt-1">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {errors.company}
                        </p>
                      )}
                      <div className="flex items-center space-x-2 mt-1">
                        <input
                          type="checkbox"
                          id="isIndividual"
                          name="isIndividual"
                          checked={formData.isIndividual}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              isIndividual: e.target.checked,
                            }))
                          }
                          disabled={isSubmitting}
                          className="accent-blue-600"
                        />
                        <Label htmlFor="isIndividual" className="text-sm">
                          I'm not representing a company
                        </Label>
                      </div>
                    </div>

                    {/* Subject (Dropdown) */}
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </Label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.subject}
                        aria-describedby={
                          errors.subject ? "subject-error" : undefined
                        }
                        className={`w-full px-3 py-2 rounded-md bg-background/50 border border-blue-600/10 focus:border-blue-600/50 transition-all ${
                          errors.subject ? "border-red-500" : ""
                        }`}
                        disabled={isSubmitting}
                      >
                        <option value="">Select a service...</option>
                        {[
                          "Web Development",
                          "UI/UX Design",
                          "Mobile Development",
                          "SEO Optimization",
                          "E-commerce Solutions",
                          "Database Design",
                          "Analytics & Reporting",
                          "Security Audits",
                          "Performance Optimization",
                          "API Development",
                          "AI & Machine Learning",
                          "DevOps & Automation",
                          "Desktop Applications",
                          "Customer Support Solutions",
                        ].map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p
                          id="subject-error"
                          className="text-red-500 text-xs flex items-center mt-1"
                        >
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        className={`min-h-[150px] border-blue-600/10 focus:border-blue-600/50 transition-all bg-background/50 ${
                          errors.message ? "border-red-500" : ""
                        }`}
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <p
                          id="message-error"
                          className="text-red-500 text-xs flex items-center mt-1"
                        >
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <motion.div
                      whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Button
                        type="submit"
                        className="w-full group btn-hover-effect neon-glow bg-blue relative overflow-hidden"
                        disabled={isSubmitting}
                        aria-label={
                          isSubmitting ? "Sending message..." : "Send message"
                        }
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </AnimateInView>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
