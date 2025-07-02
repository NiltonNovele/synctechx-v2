import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  Palette,
  PenTool,
  Smartphone,
  Globe,
  Megaphone,
} from "lucide-react";
import { AnimateInView } from "./animate-in-view";

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites built with modern technologies for optimal performance and user experience.",
    icon: <Code className="h-10 w-10 text-primary" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive and engaging user interfaces that enhance user experience and drive conversions.",
    icon: <Palette className="h-10 w-10 text-primary" />,
  },
  {
    title: "Graphic Design",
    description:
      "Eye-catching visuals that communicate your brand message effectively.",
    icon: <PenTool className="h-10 w-10 text-primary" />,
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: <Smartphone className="h-10 w-10 text-primary" />,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and drive more organic traffic to your website.",
    icon: <Globe className="h-10 w-10 text-primary" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic marketing campaigns to increase your online presence and reach your target audience.",
    icon: <Megaphone className="h-10 w-10 text-primary" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-blue-100/10">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-600/10 px-3 py-1 text-sm text-blue-600">
                Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What We Offer
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive solutions to help your business grow and succeed
                in the digital landscape.
              </p>
            </div>
          </div>
        </AnimateInView>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimateInView key={index} delay={index * 0.1}>
              <Card className="bg-card/50 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 h-full focus-within:ring-2 focus-within:ring-blue-600/50 focus-within:ring-offset-2 focus-within:ring-offset-background">
                <CardHeader>
                  <div className="mb-2 rounded-full bg-blue-600/10 p-3 w-fit transition-transform duration-300 hover:scale-110">
                    {service.icon}
                  </div>
                  <CardTitle className="service-title text-blue-600 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
