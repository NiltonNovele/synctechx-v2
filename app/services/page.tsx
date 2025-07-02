"use client";

import { PageTransition } from "@/components/page-transition";
import { AnimateInView } from "@/components/animate-in-view";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Code,
  Palette,
  PenTool,
  Smartphone,
  Globe,
  Megaphone,
  Layers,
  Database,
  LineChart,
  Shield,
  Zap,
  Cpu,
  CheckCircle,
  ArrowRight,
  Brain,
  Cloud,
  Workflow,
  Monitor,
  Headphones,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ServiceCard } from "@/components/service-card";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom websites built with modern technologies for optimal performance and user experience.",
    icon: <Code className="h-10 w-10 text-primary" />,
    features: [
      "Responsive design for all devices",
      "SEO-optimized structure",
      "Fast loading speeds",
      "Secure and scalable architecture",
      "Content management systems",
      "E-commerce functionality",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
    ],
    caseStudies: [
      {
        title: "E-commerce Platform Redesign",
        description:
          "Increased conversion rates by 35% through improved UX and performance optimization",
      },
      {
        title: "SaaS Dashboard Development",
        description:
          "Built a scalable admin dashboard that reduced customer support inquiries by 40%",
      },
    ],
  },

  {
    id: "mobile-development",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    features: [
      "Native iOS development",
      "Native Android development",
      "Cross-platform solutions",
      "App Store optimization",
      "Push notifications",
      "Offline functionality",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "AppCenter",
    ],
    caseStudies: [
      {
        title: "Fitness Tracking App",
        description:
          "Developed a cross-platform app with 100,000+ downloads in the first month",
      },
      {
        title: "Retail Store Companion App",
        description:
          "Created an app that increased in-store purchases by 22% through personalized recommendations",
      },
    ],
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and drive more organic traffic to your website.",
    icon: <Globe className="h-10 w-10 text-primary" />,
    features: [
      "Keyword research and analysis",
      "On-page optimization",
      "Technical SEO audits",
      "Content strategy",
      "Link building",
      "Performance monitoring",
    ],
    technologies: [
      "Google Analytics",
      "SEMrush",
      "Ahrefs",
      "Moz",
      "Screaming Frog",
      "Google Search Console",
    ],
    caseStudies: [
      {
        title: "Local Business SEO Campaign",
        description:
          "Achieved first page rankings for 15 target keywords, increasing organic traffic by 150%",
      },
      {
        title: "E-commerce SEO Overhaul",
        description:
          "Improved organic search visibility by 85%, resulting in 65% more organic revenue",
      },
    ],
  },
  {
    id: "ecommerce-solutions",
    title: "E-commerce Solutions",
    description:
      "Complete online store setups with payment gateways, inventory management, and more.",
    icon: <Layers className="h-10 w-10 text-primary" />,
    features: [
      "Custom storefront development",
      "Payment gateway integration",
      "Inventory management",
      "Order fulfillment systems",
      "Customer account management",
      "Analytics and reporting",
    ],
    technologies: [
      "Shopify",
      "WooCommerce",
      "Magento",
      "Stripe",
      "PayPal",
      "BigCommerce",
    ],
    caseStudies: [
      {
        title: "Fashion Retailer Online Store",
        description:
          "Built a custom e-commerce platform that increased sales by 75% in the first quarter",
      },
      {
        title: "Multi-vendor Marketplace",
        description:
          "Developed a marketplace solution that now hosts over 200 vendors with 10,000+ products",
      },
    ],
  },
  {
    id: "database-design",
    title: "Database Design",
    description:
      "Efficient and scalable database architectures tailored to your business needs.",
    icon: <Database className="h-10 w-10 text-primary" />,
    features: [
      "Database architecture",
      "Data modeling",
      "Performance optimization",
      "Migration services",
      "Data security",
      "Backup and recovery solutions",
    ],
    technologies: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Firebase",
      "Amazon RDS",
    ],
    caseStudies: [
      {
        title: "Healthcare Data Migration",
        description:
          "Migrated legacy database to modern architecture, improving query performance by 300%",
      },
      {
        title: "E-commerce Database Optimization",
        description:
          "Reduced database load times by 75% through optimization and caching strategies",
      },
    ],
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    description:
      "Data-driven insights to help you make informed business decisions.",
    icon: <LineChart className="h-10 w-10 text-primary" />,
    features: [
      "Custom dashboard development",
      "Real-time data visualization",
      "Automated reporting",
      "KPI tracking",
      "User behavior analysis",
      "Conversion funnel optimization",
    ],
    technologies: [
      "Google Analytics",
      "Tableau",
      "Power BI",
      "Looker",
      "Mixpanel",
      "Amplitude",
    ],
    caseStudies: [
      {
        title: "Retail Analytics Dashboard",
        description:
          "Created a real-time dashboard that helped identify $1.2M in revenue opportunities",
      },
      {
        title: "Marketing Campaign Analytics",
        description:
          "Developed attribution modeling that improved marketing ROI by 35%",
      },
    ],
  },
  {
    id: "security-audits",
    title: "Security Audits",
    description:
      "Comprehensive security assessments to protect your digital assets.",
    icon: <Shield className="h-10 w-10 text-primary" />,
    features: [
      "Vulnerability assessment",
      "Penetration testing",
      "Code security review",
      "Security policy development",
      "Compliance auditing",
      "Security training",
    ],
    technologies: [
      "OWASP Tools",
      "Burp Suite",
      "Metasploit",
      "Nessus",
      "Wireshark",
      "Kali Linux",
    ],
    caseStudies: [
      {
        title: "Financial Services Security Audit",
        description:
          "Identified and remediated 12 critical vulnerabilities before they could be exploited",
      },
      {
        title: "E-commerce Security Enhancement",
        description:
          "Implemented security measures that prevented an estimated $500K in potential fraud",
      },
    ],
  },
  {
    id: "performance-optimization",
    title: "Process Automation",
    description:
      "Automate all your processes to speed up your workflow, enhance productivity and improve accuracy.",
    icon: <Zap className="h-10 w-10 text-primary" />,
    features: [
      "Load time optimization",
      "Code minification",
      "Image optimization",
      "Caching strategies",
      "Database query optimization",
      "Server-side rendering",
    ],
    technologies: [
      "Lighthouse",
      "WebPageTest",
      "GTmetrix",
      "Redis",
      "Cloudflare",
      "Next.js",
    ],
    caseStudies: [
      {
        title: "Media Site Speed Improvement",
        description:
          "Reduced page load time by 65%, decreasing bounce rate by 30%",
      },
      {
        title: "E-commerce Checkout Optimization",
        description:
          "Streamlined checkout process, increasing conversion rate by 25%",
      },
    ],
  },
  {
    id: "api-development",
    title: "API Development",
    description:
      "Custom API solutions to connect your systems and enable seamless data flow.",
    icon: <Cpu className="h-10 w-10 text-primary" />,
    features: [
      "RESTful API design",
      "GraphQL implementation",
      "API documentation",
      "Authentication and authorization",
      "Rate limiting and caching",
      "Versioning and maintenance",
    ],
    technologies: ["Node.js", "Express", "Apollo", "Swagger", "Postman", "JWT"],
    caseStudies: [
      {
        title: "Payment Processing API",
        description:
          "Developed a secure API handling $10M+ in monthly transactions with 99.99% uptime",
      },
      {
        title: "Inventory Management API",
        description:
          "Created a real-time API that synchronizes inventory across 50+ retail locations",
      },
    ],
  },
  {
    id: "ai-ml-solutions",
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions that learn, adapt, and deliver exceptional results for complex problems.",
    icon: <Brain className="h-10 w-10 text-primary" />,
    features: [
      "Predictive analytics",
      "Natural language processing",
      "Computer vision",
      "Recommendation systems",
      "Anomaly detection",
      "Automated decision systems",
    ],
    technologies: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "OpenAI API",
      "Hugging Face",
      "AWS SageMaker",
    ],
    caseStudies: [
      {
        title: "Retail Demand Forecasting",
        description:
          "Implemented ML model that improved inventory forecasting accuracy by 35%",
      },
      {
        title: "Customer Support AI Assistant",
        description:
          "Developed an AI chatbot that resolved 65% of support queries without human intervention",
      },
    ],
  },
  {
    id: "desktop-applications",
    title: "Desktop Applications",
    description:
      "Powerful desktop software that streamlines workflows and enhances productivity.",
    icon: <Monitor className="h-10 w-10 text-primary" />,
    features: [
      "Cross-platform development",
      "Native application development",
      "System integration",
      "Offline functionality",
      "Data synchronization",
      "Automated updates",
    ],
    technologies: ["Electron", "Qt", ".NET", "Java", "Python", "C++"],
    caseStudies: [
      {
        title: "Productivity Suite",
        description:
          "Built desktop application that improved team productivity by 25%",
      },
      {
        title: "Media Processing Tool",
        description:
          "Developed specialized software that reduced processing time by 70%",
      },
    ],
  },
  {
    id: "customer-support",
    title: "Customer Support Solutions",
    description:
      "Comprehensive support systems to enhance customer satisfaction and retention.",
    icon: <Headphones className="h-10 w-10 text-primary" />,
    features: [
      "Helpdesk implementation",
      "Knowledge base development",
      "Chatbot integration",
      "Ticket management systems",
      "Customer feedback tools",
      "Support analytics",
    ],
    technologies: [
      "Zendesk",
      "Intercom",
      "Freshdesk",
      "Dialogflow",
      "HelpScout",
      "Olark",
    ],
    caseStudies: [
      {
        title: "SaaS Support System",
        description:
          "Implemented support solution that improved customer satisfaction scores by 40%",
      },
      {
        title: "E-commerce Support Automation",
        description:
          "Developed automated support system that handled 70% of common inquiries",
      },
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We begin by understanding your business goals, target audience, and project requirements. This phase includes in-depth research, stakeholder interviews, and competitive analysis to establish a solid foundation for your project.",
    image: "/logo/Shibaccus.png?height=300&width=400",
    deliverables: [
      "Project Brief",
      "Requirements Document",
      "Project Timeline",
      "Initial Wireframes",
    ],
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "We create wireframes and interactive prototypes to visualize the final product. Our design process is iterative, allowing for feedback and refinement to ensure the final design meets your expectations and user needs.",
    image: "/logo/Shibaccus.png?height=300&width=400",
    deliverables: [
      "UI/UX Design",
      "Interactive Prototypes",
      "Design System",
      "User Flow Diagrams",
    ],
    icon: <PenTool className="h-10 w-10 text-primary" />,
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our team of experts builds your solution using the latest technologies and best practices. We follow agile methodologies with regular sprints and check-ins to ensure transparency and flexibility throughout the development process.",
    image: "/logo/Shibaccus.png?height=300&width=400",
    deliverables: [
      "Working Application",
      "Code Documentation",
      "Testing Reports",
      "Progress Updates",
    ],
    icon: <Code className="h-10 w-10 text-primary" />,
  },
  {
    number: "04",
    title: "Testing & QA",
    description:
      "We thoroughly test your product before launching it to ensure everything works perfectly. Our comprehensive testing includes functional testing, performance testing, security testing, and user acceptance testing.",
    image: "/logo/Shibaccus.png?height=300&width=400",
    deliverables: [
      "Quality Assurance Report",
      "Bug Fixes",
      "Performance Optimization",
      "Security Validation",
    ],
    icon: <Shield className="h-10 w-10 text-primary" />,
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "Once testing is complete, we deploy your solution to production environments with minimal disruption. We ensure proper configuration, monitoring, and backup systems are in place for a smooth launch.",
    image: "/logo/Shibaccus.png?height=300&width=400",
    deliverables: [
      "Deployment Plan",
      "Production Environment",
      "Monitoring Setup",
      "Backup Systems",
    ],
    icon: <Rocket className="h-10 w-10 text-primary" />,
  },
  {
    number: "06",
    title: "Support & Maintenance",
    description:
      "Our relationship doesn't end at launch. We provide ongoing support and maintenance to ensure your solution continues to perform optimally and evolve with your business needs.",
    image: "/logo/Shibaccus.png?height=300&width=400",
    deliverables: [
      "Support Plan",
      "Regular Updates",
      "Performance Monitoring",
      "Feature Enhancements",
    ],
    icon: <Headphones className="h-10 w-10 text-primary" />,
  },
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateInView>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.div
                  className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary tag"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Services
                </motion.div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  What We Offer
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive solutions to help your business grow and succeed
                  in the digital landscape.
                </p>
              </div>
            </div>
          </AnimateInView>

          {/* Service Categories */}
          <div className="mt-12">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                <TabsList className="bg-card/30 backdrop-blur-sm">
                  <TabsTrigger value="all">All Services</TabsTrigger>
                  <TabsTrigger value="web">Web & Mobile</TabsTrigger>
                  <TabsTrigger value="design">Design & UX</TabsTrigger>
                  <TabsTrigger value="data">Data & Analytics</TabsTrigger>
                  <TabsTrigger value="marketing">Marketing & SEO</TabsTrigger>
                  <TabsTrigger value="infrastructure">
                    Infrastructure
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {services.map((service, index) => (
                    <AnimateInView key={service.id} delay={index * 0.05}>
                      <ServiceCard service={service} />
                    </AnimateInView>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="web" className="mt-0">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {services
                    .filter((s) =>
                      [
                        "web-development",
                        "mobile-development",
                        "ecommerce-solutions",
                        "api-development",
                      ].includes(s.id)
                    )
                    .map((service, index) => (
                      <AnimateInView key={service.id} delay={index * 0.05}>
                        <ServiceCard service={service} />
                      </AnimateInView>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="design" className="mt-0">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {services
                    .filter((s) =>
                      ["ui-ux-design", "graphic-design"].includes(s.id)
                    )
                    .map((service, index) => (
                      <AnimateInView key={service.id} delay={index * 0.05}>
                        <ServiceCard service={service} />
                      </AnimateInView>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="data" className="mt-0">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {services
                    .filter((s) =>
                      [
                        "database-design",
                        "analytics-reporting",
                        "ai-ml-solutions",
                      ].includes(s.id)
                    )
                    .map((service, index) => (
                      <AnimateInView key={service.id} delay={index * 0.05}>
                        <ServiceCard service={service} />
                      </AnimateInView>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="marketing" className="mt-0">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {services
                    .filter((s) =>
                      [
                        "seo-optimization",
                        "digital-marketing",
                        "customer-support",
                      ].includes(s.id)
                    )
                    .map((service, index) => (
                      <AnimateInView key={service.id} delay={index * 0.05}>
                        <ServiceCard service={service} />
                      </AnimateInView>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="infrastructure" className="mt-0">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {services
                    .filter((s) =>
                      [
                        "security-audits",
                        "performance-optimization",
                        "cloud-services",
                        "devops-automation",
                      ].includes(s.id)
                    )
                    .map((service, index) => (
                      <AnimateInView key={service.id} delay={index * 0.05}>
                        <ServiceCard service={service} />
                      </AnimateInView>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <AnimateInView delay={0.3}>
            <div className="mt-20 mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold rose-silver-text mb-4">
                  Our Development Process
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  We follow a structured, collaborative approach to ensure your
                  project is delivered on time and exceeds your expectations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {processSteps.map((step, index) => (
                  <AnimateInView key={index} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      <Card className="glass-card h-full border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-center gap-4 mb-4">
                            <motion.div
                              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl"
                              whileHover={{
                                scale: 1.1,
                                boxShadow:
                                  "0 0 15px 5px rgba(200, 40, 60, 0.3)",
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                              }}
                            >
                              {step.number}
                            </motion.div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                          </div>

                          <p className="text-muted-foreground mb-4 flex-grow">
                            {step.description}
                          </p>

                          <div className="mt-4">
                            <h4 className="font-semibold mb-2">
                              Deliverables:
                            </h4>
                            <ul className="grid grid-cols-2 gap-2">
                              {step.deliverables.map((deliverable, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-center gap-2 text-sm"
                                  whileHover={{ x: 3 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                  }}
                                >
                                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                  <span>{deliverable}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </AnimateInView>
                ))}
              </div>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.4}>
            <div className="mt-12 p-8 bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4 rose-silver-text">
                    Why Choose Us?
                  </h2>
                  <div className="space-y-4">
                    <motion.div
                      className="p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(200, 40, 60, 0.1)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      <h3 className="font-bold text-lg mb-2">Expertise</h3>
                      <p className="text-muted-foreground">
                        Our team consists of skilled professionals with years of
                        experience in their respective fields. We stay
                        up-to-date with the latest technologies and industry
                        trends to deliver cutting-edge solutions.
                      </p>
                    </motion.div>

                    <motion.div
                      className="p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(200, 40, 60, 0.1)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      <h3 className="font-bold text-lg mb-2">Quality</h3>
                      <p className="text-muted-foreground">
                        We never compromise on quality and always deliver
                        solutions that exceed expectations. Our rigorous quality
                        assurance process ensures that every project meets the
                        highest standards.
                      </p>
                    </motion.div>

                    <motion.div
                      className="p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(200, 40, 60, 0.1)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      <h3 className="font-bold text-lg mb-2">Communication</h3>
                      <p className="text-muted-foreground">
                        We maintain clear and consistent communication
                        throughout the project lifecycle. You'll always be
                        informed about progress, milestones, and any decisions
                        that need to be made.
                      </p>
                    </motion.div>

                    <motion.div
                      className="p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(200, 40, 60, 0.1)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      <h3 className="font-bold text-lg mb-2">Support</h3>
                      <p className="text-muted-foreground">
                        We provide ongoing support and maintenance to ensure
                        your solution continues to perform optimally. Our
                        support team is always ready to assist with any issues
                        or questions you may have.
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4 rose-silver-text">
                    Our Approach
                  </h2>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      <div className="p-2 rounded-full bg-primary/10 mt-1">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">
                          User-Centered Design
                        </h4>
                        <p className="text-muted-foreground">
                          We put users at the center of our design process,
                          creating intuitive and engaging experiences that meet
                          their needs and expectations.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      <div className="p-2 rounded-full bg-primary/10 mt-1">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">
                          Agile Methodology
                        </h4>
                        <p className="text-muted-foreground">
                          We follow agile principles to ensure flexibility,
                          transparency, and continuous improvement throughout
                          the development process.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      <div className="p-2 rounded-full bg-primary/10 mt-1">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">
                          Collaborative Partnership
                        </h4>
                        <p className="text-muted-foreground">
                          We work closely with you as partners, valuing your
                          input and ensuring your vision is realized in the
                          final product.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      <div className="p-2 rounded-full bg-primary/10 mt-1">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">
                          Continuous Learning
                        </h4>
                        <p className="text-muted-foreground">
                          We're committed to continuous learning and
                          improvement, staying ahead of industry trends to
                          deliver innovative solutions.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <div className="mt-8">
                    <Link href="/contact">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <Button
                          size="lg"
                          className="group btn-hover-effect rose-gold-glow bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium"
                        >
                          Get in Touch
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.5}>
            <div className="mt-20 text-center">
              <h2 className="text-3xl font-bold rose-silver-text mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                Let's collaborate to create something amazing together. Contact
                us today to discuss your project needs and how we can help bring
                your vision to life.
              </p>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    size="lg"
                    className="group btn-hover-effect rose-gold-glow bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </AnimateInView>
        </div>
      </main>
    </PageTransition>
  );
}
