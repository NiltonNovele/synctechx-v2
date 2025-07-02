"use client";

import { Card, CardContent } from "@/components/ui/card";
import { NewsletterForm } from "@/components/newsletter-form";
import { motion } from "framer-motion";

export function BlogNewsletterBanner() {
  return (
    <Card className="bg-gradient-to-r from-blue-200/10 via-blue-100/5 to-blue-200/10 border-blue-300/20 overflow-hidden relative">
      <CardContent className="p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-xl mx-auto text-center">
          <motion.h3
            className="text-2xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Stay Updated with Our Latest Articles
          </motion.h3>

          <motion.p
            className="text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Subscribe to our newsletter and never miss new articles, news, and
            insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <NewsletterForm />
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}
