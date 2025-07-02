"use client";

import type React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    technologies: string[];
  };
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="h-full"
    >
      <Link href={`/services/${service.id}`} className="block h-full">
        <Card className="h-full bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 group h-full equal-height service-card overflow-hidden">
          <CardHeader className="p-6">
            <motion.div
              className="mb-4 rounded-full bg-blue-600/10 p-3 w-fit"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px 5px rgba(37, 99, 235, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {service.icon}
            </motion.div>
            <CardTitle className="service-title transition-colors group-hover:text-blue-600">
              {service.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0 flex flex-col h-full">
            <CardDescription className="text-base mb-4 flex-grow">
              {service.description}
            </CardDescription>

            <div className="flex flex-wrap gap-2 mb-4">
              {service.technologies.slice(0, 4).map((tech, i) => (
                <motion.span
                  key={i}
                  className="inline-flex items-center rounded-full bg-blue-600/10 px-2 py-1 text-xs text-blue-600"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(37, 99, 235, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {tech}
                </motion.span>
              ))}
              {service.technologies.length > 4 && (
                <motion.span
                  className="inline-flex items-center rounded-full bg-blue-600/10 px-2 py-1 text-xs text-blue-600"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(37, 99, 235, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  +{service.technologies.length - 4}
                </motion.span>
              )}
            </div>

            <div className="flex justify-end mt-auto pt-2 border-t border-blue-600/10">
              <motion.div
                className="text-sm text-blue-600 flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Learn more
                <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
