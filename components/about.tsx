import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0f172a]/90">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-600/10 px-3 py-1 text-sm text-blue-600">
                About Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Passionate Team Dedicated to Excellence
              </h2>
              <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed">
                With over 5 years of experience in the industry, we specialize
                in delivering high-quality solutions that help businesses grow
                and succeed in the digital landscape.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-white/10 border border-blue-600/20 backdrop-blur">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="text-4xl font-bold text-blue-400">5+</div>
                  <p className="text-sm text-blue-100">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border border-blue-600/20 backdrop-blur">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="text-4xl font-bold text-blue-400">100+</div>
                  <p className="text-sm text-blue-100">Projects Completed</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border border-blue-600/20 backdrop-blur">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="text-4xl font-bold text-blue-400">50+</div>
                  <p className="text-sm text-blue-100">Happy Clients</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border border-blue-600/20 backdrop-blur">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="text-4xl font-bold text-blue-400">10+</div>
                  <p className="text-sm text-blue-100">Awards Won</p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4 text-white">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span>
                  Dedicated to delivering projects on time and within budget
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span>
                  Committed to clear communication throughout the project
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span>Focused on creating solutions that drive results</span>
              </div>
            </div>
            <div>
              <Button
                size="lg"
                className="mt-4 bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Download Our Portfolio
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-[450px] w-[350px] overflow-hidden rounded-lg border border-blue-600/20 bg-white/10 backdrop-blur">
              <Image
                src="/logo/Shibaccus.png?height=900&width=700"
                alt="About Us"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f172a] to-transparent p-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">SyncTechX</h3>
                  <p className="text-sm text-blue-400">Tech Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
