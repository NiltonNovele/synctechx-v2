"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface RelatedPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

interface BlogRelatedPostsProps {
  posts: RelatedPost[];
}

export function BlogRelatedPosts({ posts }: BlogRelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <Link href={`/blog/${post.id}`}>
              <Card className="overflow-hidden h-full bg-card/30 backdrop-blur-sm border-blue-300/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200/20 group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image || "/logo/Shibaccus.png"}
                    alt={post.title}
                    width={400}
                    height={225}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600/90 text-blue-50 px-2 py-1 text-xs rounded-full">
                    {post.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {post.date}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
