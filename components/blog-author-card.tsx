"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogAuthorCardProps {
  author: string;
  authorImage: string;
  authorBio: string;
}

export function BlogAuthorCard({
  author,
  authorImage,
  authorBio,
}: BlogAuthorCardProps) {
  return (
    <Card className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Avatar className="h-20 w-20">
              <AvatarImage src={authorImage} alt={author} />
              <AvatarFallback>{author.charAt(0)}</AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-1 text-blue-100">{author}</h3>
            <p className="text-sm text-primary mb-3">Author</p>
            <p className="text-muted-foreground text-sm mb-4">{authorBio}</p>

            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-blue-500/30 text-blue-400 hover:border-blue-500 hover:text-blue-500"
              >
                Follow
              </Button>
              <Link href={`/blog?author=${encodeURIComponent(author)}`}>
                <Button
                  size="sm"
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
