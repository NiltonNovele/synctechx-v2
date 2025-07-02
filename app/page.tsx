"use client";

import Hero from "@/components/hero";
import Process from "@/components/process";
import Cta from "@/components/cta";
import { PageTransition } from "@/components/page-transition";
import Testimonials from "@/components/testimonials";
import TechShowcase from "@/components/tech-showcase";
import FeaturedProjects from "@/components/featured-projects";
import TeamSection from "@/components/team-section";
import MachineLearningSection from "@/components/machine-learning-section";
import DesktopAppsSection from "@/components/desktop-apps-section";
import AutomationSection from "@/components/automation-section";

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Hero />
        <TechShowcase />
        <Process />
        <MachineLearningSection />
        <FeaturedProjects />
        <DesktopAppsSection />
        <AutomationSection />
        <TeamSection />
        {/* <Testimonials /> */}
        <Cta />
      </main>
    </PageTransition>
  );
}
