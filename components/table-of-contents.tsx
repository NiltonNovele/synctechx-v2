"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Extract headings and create sections
  const sections =
    content.match(/<h[2-3][^>]*>(.*?)<\/h[2-3]>/g)?.map((heading) => {
      const level = heading.startsWith("<h2") ? 2 : 3;
      const text = heading.replace(/<\/?h[2-3][^>]*>/g, "");
      const id = `section-${text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "")}`;

      return { level, text, id };
    }) || [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -80% 0px",
        threshold: 0,
      }
    );

    // Observe all section headings
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Add a small delay to ensure DOM is ready
      setTimeout(() => {
        const headerOffset = 120; // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Set active section after scrolling
        setActiveSection(id);
      }, 100);
    }
  };

  return (
    <Card className="bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 sticky top-24">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
        <nav
          className="space-y-1 custom-scrollbar"
          style={{ maxHeight: "60vh", overflowY: "auto" }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={`${section.level === 3 ? "ml-4" : ""}`}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left py-1.5 px-2 rounded-md text-${
                  section.level === 2 ? "base font-medium" : "sm"
                } 
                transition-colors
                ${
                  activeSection === section.id
                    ? "bg-blue-600/10 text-blue-600 font-medium"
                    : section.level === 3
                    ? "text-muted-foreground hover:bg-blue-600/5 hover:text-blue-600/80"
                    : "hover:bg-blue-600/5 hover:text-blue-600/80"
                }`}
              >
                {section.text}
              </button>
            </motion.div>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
}
