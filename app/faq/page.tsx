import { PageTransition } from "@/components/page-transition";
import { AnimateInView } from "@/components/animate-in-view";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { MessageSquare, Mail, Phone, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of digital services including web development, mobile app development, SEO optimization, and a lot more. Each service is tailored to meet the specific needs of your business.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on the scope and complexity. A simple website might take 1-2 weeks, while more complex projects with custom functionality could take 1-2 months. During our initial consultation, we'll provide you with a detailed timeline based on your specific requirements.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer transparent pricing based on the scope of work. We have standard packages for common projects, but we also provide custom quotes for projects with specific requirements. You can view our standard pricing on the Pricing page, or contact us for a custom quote.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes, we offer various maintenance and support packages to ensure your digital assets continue to perform optimally. These packages include regular updates, security monitoring, content updates, and technical support. The duration of support is included in each pricing package, with options to extend.",
  },
  {
    question: "What is your design process?",
    answer:
      "Our design process begins with understanding your business goals and target audience. We then create wireframes and mockups for your approval before moving to development. Throughout the process, we maintain open communication and incorporate your feedback to ensure the final product meets your expectations.",
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Yes, we work with clients from around the world. With modern communication tools, distance is not a barrier to successful collaboration. We're flexible with scheduling meetings across different time zones to ensure smooth communication throughout your project.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We stay up-to-date with the latest technologies and frameworks. For web development, we commonly use React, Next.js, and TypeScript. For mobile development, we use React Native or native iOS/Android development depending on project requirements. We select the most appropriate technology stack based on your specific needs.",
  },
  {
    question: "How do we get started working together?",
    answer:
      "Getting started is easy! Simply fill out the contact form with details about your project, and we'll get back to you within 24 hours to schedule an initial consultation. During this consultation, we'll discuss your requirements in detail and determine the best approach for your project.",
  },
  {
    question: "Do you provide content for websites?",
    answer:
      "While we primarily focus on design and development, we can recommend professional copywriters who can create compelling content for your website. Alternatively, if you prefer to provide your own content, we can guide you on the type of content needed for each section of your website.",
  },
  {
    question: "What happens after my project is launched?",
    answer:
      "After launch, we provide a handover session where we'll walk you through your new website or application and show you how to manage content if applicable. We also offer post-launch support to address any issues that may arise, as well as ongoing maintenance packages to keep your digital assets up-to-date and secure.",
  },
];

export default function FaqPage() {
  return (
    <PageTransition>
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateInView>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-600/10 px-3 py-1 text-sm text-blue-600">
                  FAQ
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Frequently Asked Questions
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our services, process,
                  and working relationship.
                </p>
              </div>
            </div>
          </AnimateInView>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card className="bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 overflow-hidden focus-within:outline-none focus-within:ring-4 focus-within:ring-blue-600/20 focus-within:ring-offset-4 focus-within:ring-offset-background">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AnimateInView key={index} delay={index * 0.05}>
                        <AccordionItem
                          value={`item-${index}`}
                          className="faq-item focus-within:outline-none focus-within:ring-4 focus-within:ring-blue-600/20 focus-within:ring-offset-4 focus-within:ring-offset-background"
                        >
                          <AccordionTrigger className="faq-question">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="faq-answer">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      </AnimateInView>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <AnimateInView delay={0.2}>
                <Card className="bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 neon-border focus-within:outline-none focus-within:ring-4 focus-within:ring-blue-600/20 focus-within:ring-offset-4 focus-within:ring-offset-background">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                      Still Have Questions?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      If you couldn't find the answer to your question, feel
                      free to reach out directly through any of these channels.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-600/5 hover:bg-blue-600/10 transition-colors">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <div>
                          <h4 className="font-medium">Email Us</h4>
                          <p className="text-sm text-muted-foreground">
                            info@synctechx.com
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-600/5 hover:bg-blue-600/10 transition-colors">
                        <Phone className="h-5 w-5 text-blue-600" />
                        <div>
                          <h4 className="font-medium">Call Us</h4>
                          <p className="text-sm text-muted-foreground">
                            +258 (84) 029 3361
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-600/5 hover:bg-blue-600/10 transition-colors">
                        <MessageSquare className="h-5 w-5 text-blue-600" />
                        <div>
                          <h4 className="font-medium">Live Chat</h4>
                          <p className="text-sm text-muted-foreground">
                            Available Mon-Fri, 9AM-6PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimateInView>

              <AnimateInView delay={0.3}>
                <Card className="bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 neon-border focus-within:outline-none focus-within:ring-4 focus-within:ring-blue-600/20 focus-within:ring-offset-4 focus-within:ring-offset-background">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <p className="text-muted-foreground mb-6">
                      Ready to discuss your project? Get in touch and let's
                      create something amazing together.
                    </p>
                    <Link href="/contact">
                      <Button className="w-full bg-blue-600 hover:bg-blue-600/90 neon-glow focus:outline-none focus:ring-4 focus:ring-blue-600/20 focus:ring-offset-4 focus:ring-offset-background">
                        Contact Us
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimateInView>
            </div>
          </div>

          <AnimateInView delay={0.5}>
            <div className="mt-16 p-8 bg-card/30 backdrop-blur-sm border border-blue-600/10 rounded-xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold silver-text mb-4">
                  Common Topics
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Browse through these popular categories to find more
                  information about our services and processes.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link href="/services">
                  <div className="p-4 bg-blue-600/5 rounded-lg border border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 text-center focus:outline-none focus:ring-4 focus:ring-blue-600/20 focus:ring-offset-4 focus:ring-offset-background">
                    <h3 className="font-bold mb-1">Services</h3>
                    <p className="text-xs text-muted-foreground">
                      Learn about our comprehensive service offerings
                    </p>
                  </div>
                </Link>

                <Link href="/pricing">
                  <div className="p-4 bg-blue-600/5 rounded-lg border border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 text-center focus:outline-none focus:ring-4 focus:ring-blue-600/20 focus:ring-offset-4 focus:ring-offset-background">
                    <h3 className="font-bold mb-1">Pricing</h3>
                    <p className="text-xs text-muted-foreground">
                      View our transparent pricing structure
                    </p>
                  </div>
                </Link>

                <Link href="/portfolio">
                  <div className="p-4 bg-blue-600/5 rounded-lg border border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 text-center focus:outline-none focus:ring-4 focus:ring-blue-600/20 focus:ring-offset-4 focus:ring-offset-background">
                    <h3 className="font-bold mb-1">Portfolio</h3>
                    <p className="text-xs text-muted-foreground">
                      Explore our recent projects and case studies
                    </p>
                  </div>
                </Link>

                <Link href="/contact">
                  <div className="p-4 bg-blue-600/5 rounded-lg border border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 text-center focus:outline-none focus:ring-4 focus:ring-blue-600/20 focus:ring-offset-4 focus:ring-offset-background">
                    <h3 className="font-bold mb-1">Contact</h3>
                    <p className="text-xs text-muted-foreground">
                      Get in touch with our team for inquiries
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </AnimateInView>
        </div>
      </main>
    </PageTransition>
  );
}
