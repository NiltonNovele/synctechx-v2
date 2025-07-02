"use client"

import { useEffect, useState } from "react"
import { AnimateInView } from "@/components/animate-in-view"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CheckCircle, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

// This would typically come from an API or database
const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom websites built with modern technologies for optimal performance and user experience.",
    longDescription:
      "Our web development services focus on creating responsive, high-performance websites that deliver exceptional user experiences. We use the latest technologies and best practices to build scalable, secure, and maintainable web applications that help you achieve your business goals.",
    icon: "Code",
    features: [
      "Responsive design for all devices",
      "SEO-optimized structure",
      "Fast loading speeds",
      "Secure and scalable architecture",
      "Content management systems",
      "E-commerce functionality",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    benefits: [
      "Increased conversion rates through optimized user experiences",
      "Improved search engine rankings with SEO-friendly code",
      "Reduced bounce rates with fast-loading pages",
      "Enhanced brand credibility with professional design",
      "Scalable solutions that grow with your business",
      "Secure systems that protect your data and users",
    ],
    process: [
      "Requirements gathering and analysis",
      "Information architecture and wireframing",
      "Visual design and prototyping",
      "Frontend and backend development",
      "Testing and quality assurance",
      "Deployment and post-launch support",
    ],
    caseStudies: [
      {
        title: "E-commerce Platform Redesign",
        description: "Increased conversion rates by 35% through improved UX and performance optimization",
      },
      {
        title: "SaaS Dashboard Development",
        description: "Built a scalable admin dashboard that reduced customer support inquiries by 40%",
      },
    ],
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer:
          "The timeline varies depending on the complexity of the project. A simple website might take 2-4 weeks, while more complex web applications can take 2-3 months or more.",
      },
      {
        question: "Do you provide website maintenance services?",
        answer:
          "Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and performing optimally.",
      },
      {
        question: "Can you help with content creation?",
        answer:
          "While our primary focus is on design and development, we can recommend professional copywriters or work with your content team to ensure optimal presentation.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Absolutely. All our websites are built with responsive design principles, ensuring they look and function perfectly on all devices, from desktops to smartphones.",
      },
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces that enhance user experience and drive conversions.",
    longDescription:
      "Our UI/UX design services focus on creating intuitive, engaging interfaces that delight users and drive business results. We combine aesthetic appeal with functional design to create experiences that are both beautiful and easy to use, helping you build stronger connections with your audience.",
    icon: "Palette",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Usability testing",
      "Interaction design",
      "Visual design systems",
      "Accessibility compliance",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Principle"],
    benefits: [
      "Increased user engagement and satisfaction",
      "Higher conversion rates through optimized user flows",
      "Reduced development costs by identifying issues early",
      "Consistent brand experience across all touchpoints",
      "Accessible designs that reach wider audiences",
      "Data-driven design decisions based on user research",
    ],
    process: [
      "User research and competitive analysis",
      "User personas and journey mapping",
      "Information architecture",
      "Wireframing and low-fidelity prototypes",
      "Visual design and high-fidelity prototypes",
      "Usability testing and iteration",
    ],
    caseStudies: [
      {
        title: "Banking App Redesign",
        description: "Simplified user flows resulting in 28% increase in daily active users",
      },
      {
        title: "Healthcare Portal UX Improvement",
        description: "Reduced task completion time by 45% through intuitive navigation redesign",
      },
    ],
    faqs: [
      {
        question: "What's the difference between UI and UX design?",
        answer:
          "UI (User Interface) design focuses on the visual elements users interact with, while UX (User Experience) design encompasses the entire user journey and how users feel when interacting with a product.",
      },
      {
        question: "How do you approach the design process?",
        answer:
          "We follow a user-centered design process that starts with research to understand user needs, followed by wireframing, prototyping, visual design, and usability testing.",
      },
      {
        question: "Do you create design systems?",
        answer:
          "Yes, we create comprehensive design systems that ensure consistency across your digital products and make future development more efficient.",
      },
      {
        question: "How do you ensure designs are accessible?",
        answer:
          "We follow WCAG guidelines and best practices for accessibility, including proper color contrast, keyboard navigation, screen reader compatibility, and more.",
      },
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    longDescription:
      "Our mobile development services deliver high-performance, feature-rich applications for iOS and Android platforms. Whether you need a native app for maximum performance or a cross-platform solution for broader reach, we create mobile experiences that engage users and drive business growth.",
    icon: "Smartphone",
    features: [
      "Native iOS development",
      "Native Android development",
      "Cross-platform solutions",
      "App Store optimization",
      "Push notifications",
      "Offline functionality",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AppCenter"],
    benefits: [
      "Reach users on their preferred devices",
      "Create new revenue streams through mobile channels",
      "Improve customer engagement with push notifications",
      "Enhance brand loyalty with seamless mobile experiences",
      "Gather valuable user data for business insights",
      "Stay competitive in an increasingly mobile-first world",
    ],
    process: [
      "Requirements analysis and platform selection",
      "UX/UI design for mobile interfaces",
      "App architecture planning",
      "Development and integration",
      "Testing across multiple devices",
      "App store submission and launch",
    ],
    caseStudies: [
      {
        title: "Fitness Tracking App",
        description: "Developed a cross-platform app with 100,000+ downloads in the first month",
      },
      {
        title: "Retail Store Companion App",
        description: "Created an app that increased in-store purchases by 22% through personalized recommendations",
      },
    ],
    faqs: [
      {
        question: "Should I build a native or cross-platform app?",
        answer:
          "It depends on your specific needs. Native apps offer the best performance and access to platform-specific features, while cross-platform apps are more cost-effective and faster to develop for multiple platforms.",
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer:
          "Development time varies based on complexity, but typically ranges from 3-6 months for a fully-featured app.",
      },
      {
        question: "Can you help with app store submission?",
        answer:
          "Yes, we handle the entire app store submission process for both Apple App Store and Google Play Store, ensuring your app meets all requirements.",
      },
      {
        question: "Do you provide app maintenance services?",
        answer:
          "Yes, we offer ongoing maintenance and support to keep your app updated with the latest OS versions, fix bugs, and add new features.",
      },
    ],
  },
  {
    id: "ai-ml-solutions",
    title: "AI & Machine Learning",
    description: "Intelligent solutions that learn, adapt, and deliver exceptional results for complex problems.",
    longDescription:
      "Our AI and machine learning services help businesses leverage the power of artificial intelligence to gain insights, automate processes, and create intelligent applications. We develop custom AI solutions that solve complex problems, improve decision-making, and drive innovation across your organization.",
    icon: "Brain",
    features: [
      "Predictive analytics",
      "Natural language processing",
      "Computer vision",
      "Recommendation systems",
      "Anomaly detection",
      "Automated decision systems",
    ],
    technologies: ["TensorFlow", "PyTorch", "scikit-learn", "OpenAI API", "Hugging Face", "AWS SageMaker"],
    benefits: [
      "Automate repetitive tasks to increase efficiency",
      "Gain actionable insights from complex data",
      "Improve decision-making with predictive analytics",
      "Enhance customer experiences with personalization",
      "Identify patterns and trends invisible to human analysis",
      "Stay ahead of competitors with cutting-edge technology",
    ],
    process: [
      "Problem definition and data assessment",
      "Data collection and preparation",
      "Model selection and development",
      "Training and validation",
      "Integration and deployment",
      "Monitoring and continuous improvement",
    ],
    caseStudies: [
      {
        title: "Retail Demand Forecasting",
        description: "Implemented ML model that improved inventory forecasting accuracy by 35%",
      },
      {
        title: "Customer Support AI Assistant",
        description: "Developed an AI chatbot that resolved 65% of support queries without human intervention",
      },
    ],
    faqs: [
      {
        question: "Do I need a large amount of data to implement AI solutions?",
        answer:
          "While having more data generally improves AI model performance, we can work with various data volumes and even help with data collection strategies if needed.",
      },
      {
        question: "How long does it take to develop an AI solution?",
        answer:
          "Development timelines vary based on complexity, but typically range from 2-6 months for a production-ready AI solution.",
      },
      {
        question: "Can AI solutions integrate with our existing systems?",
        answer:
          "Yes, we design AI solutions to integrate seamlessly with your existing infrastructure, whether through APIs, microservices, or other integration methods.",
      },
      {
        question: "How do you ensure AI solutions are ethical and unbiased?",
        answer:
          "We follow ethical AI development practices, including careful data selection, bias detection and mitigation, regular auditing, and transparent documentation of model limitations.",
      },
    ],
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    description: "Scalable cloud solutions for modern businesses with reliability and performance in mind.",
    longDescription:
      "Our cloud services help businesses leverage the power of cloud computing to increase scalability, reduce costs, and improve operational efficiency. We design, implement, and manage cloud solutions that provide the flexibility and reliability your business needs to thrive in today's digital landscape.",
    icon: "Cloud",
    features: [
      "Cloud migration",
      "Infrastructure as code",
      "Serverless architecture",
      "Microservices implementation",
      "Auto-scaling solutions",
      "Disaster recovery planning",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Docker", "Kubernetes"],
    benefits: [
      "Reduce infrastructure costs with pay-as-you-go models",
      "Scale resources up or down based on demand",
      "Improve reliability with distributed systems",
      "Accelerate development with managed services",
      "Enhance security with cloud provider protections",
      "Enable global reach with distributed infrastructure",
    ],
    process: [
      "Cloud readiness assessment",
      "Architecture design and planning",
      "Migration strategy development",
      "Implementation and configuration",
      "Testing and optimization",
      "Ongoing management and support",
    ],
    caseStudies: [
      {
        title: "Enterprise Cloud Migration",
        description: "Migrated legacy systems to cloud infrastructure, reducing operational costs by 40%",
      },
      {
        title: "Serverless Application Architecture",
        description: "Rebuilt application with serverless components, improving scalability and reducing costs by 60%",
      },
    ],
    faqs: [
      {
        question: "Is cloud migration right for my business?",
        answer:
          "Most businesses benefit from cloud migration, but we conduct a thorough assessment to determine the best approach based on your specific needs, existing infrastructure, and business goals.",
      },
      {
        question: "How secure is cloud computing?",
        answer:
          "Major cloud providers offer robust security measures, often exceeding what most organizations can implement on-premises. We also implement additional security best practices tailored to your specific requirements.",
      },
      {
        question: "How long does cloud migration take?",
        answer:
          "Migration timelines vary based on complexity, but typically range from a few weeks for simple applications to several months for large enterprise environments.",
      },
      {
        question: "Which cloud provider is best for my business?",
        answer:
          "We help you select the right provider based on your specific requirements, considering factors like feature sets, pricing, compliance needs, and existing technology stack.",
      },
    ],
  },
]

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const [service, setService] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const foundService = services.find((s) => s.id === params.id)
    if (foundService) {
      setService(foundService)
    } else {
      router.push("/services")
    }
  }, [params.id, router])

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading service details...</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView>
          <Link href="/services" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 group">
            <motion.div
              className="flex items-center"
              whileHover={{ x: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Services
            </motion.div>
          </Link>
        </AnimateInView>

        <AnimateInView delay={0.1}>
          <div className="mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">Service</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">{service.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">{service.longDescription}</p>
          </div>
        </AnimateInView>

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <AnimateInView delay={0.2}>
              <Tabs defaultValue="features" className="mt-8">
                <TabsList className="mb-6">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  <TabsTrigger value="process">Process</TabsTrigger>
                  <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
                </TabsList>

                <TabsContent value="features" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(200, 40, 60, 0.1)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Technologies We Use</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(200, 40, 60, 0.2)" }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="benefits" className="space-y-4">
                  <div className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(200, 40, 60, 0.1)" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="process" className="space-y-4">
                  <div className="space-y-6">
                    {service.process.map((step, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <motion.div
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0"
                          whileHover={{ scale: 1.1, boxShadow: "0 0 15px 5px rgba(200, 40, 60, 0.3)" }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {index + 1}
                        </motion.div>
                        <div className="bg-primary/5 p-4 rounded-lg flex-1 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                          <p>{step}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="case-studies" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.caseStudies.map((caseStudy, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        <Card className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 h-full">
                          <CardContent className="p-6">
                            <h3 className="text-lg font-bold mb-2">{caseStudy.title}</h3>
                            <p className="text-muted-foreground">{caseStudy.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </AnimateInView>

            <AnimateInView delay={0.3}>
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimateInView>
          </div>

          <div>
            <AnimateInView delay={0.2}>
              <Card className="bg-card/30 backdrop-blur-sm border-rose-300/10 sticky top-24 shadow-lg shadow-rose-500/5 hover:shadow-rose-500/10 transition-all duration-300">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-bold">Ready to Get Started?</h3>
                  <p className="text-muted-foreground">
                    Let's discuss how our {service.title} services can help your business grow and succeed.
                  </p>

                  <div className="space-y-4">
                    <Link href="/contact" className="block">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="w-full"
                      >
                        <Button className="w-full h-11 btn-hover-effect rose-gold-glow bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium">
                          Contact Us
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </motion.div>
                    </Link>

                    <Link href="/portfolio" className="block">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="w-full"
                      >
                        <Button
                          variant="outline"
                          className="w-full h-11 rose-gold-border border-rose-300/20 hover:border-rose-300/40 hover:bg-rose-500/5"
                        >
                          View Our Portfolio
                          <ExternalLink className="ml-2 h-4 w-4 transition-opacity duration-300" />
                        </Button>
                      </motion.div>
                    </Link>
                  </div>

                  <div className="pt-5 mt-2 border-t border-rose-300/10">
                    <h4 className="font-semibold mb-3 text-rose-100">Related Services</h4>
                    <div className="space-y-2">
                      {services
                        .filter((s) => s.id !== service.id)
                        .slice(0, 3)
                        .map((relatedService, index) => (
                          <Link key={index} href={`/services/${relatedService.id}`}>
                            <motion.div
                              className="p-3 hover:bg-rose-500/5 rounded-lg transition-all flex items-center justify-between group border border-transparent hover:border-rose-300/20 hover:shadow-sm hover:shadow-rose-500/10"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <span className="text-sm">{relatedService.title}</span>
                              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-rose-400" />
                            </motion.div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimateInView>
          </div>
        </div>

        <AnimateInView delay={0.4}>
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold silver-text mb-6">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              Contact us today to discuss how our {service.title} services can help you achieve your business goals.
            </p>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  className="group btn-hover-effect rose-gold-glow bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium h-12 px-6"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </AnimateInView>
      </div>
    </main>
  )
}

