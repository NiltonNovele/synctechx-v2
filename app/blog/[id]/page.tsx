"use client";

import { useEffect, useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { AnimateInView } from "@/components/animate-in-view";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Tag,
  Bookmark,
  ThumbsUp,
  Copy,
  Check,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { NewsletterForm } from "@/components/newsletter-form";
import { TableOfContents } from "@/components/table-of-contents";
import { BlogPostActions } from "@/components/blog-post-actions";
import { EstimatedReadingTime } from "@/components/estimated-reading-time";
import { BlogCommentSection } from "@/components/blog-comment-section";
import { BlogNewsletterBanner } from "@/components/blog-newsletter-banner";
import { BlogAuthorCard } from "@/components/blog-author-card";
import { BlogRelatedPosts } from "@/components/blog-related-posts";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  authorImage: string;
  authorBio: string;
  category: string;
  readTime: string;
  featured: boolean;
  tags: string[];
};

type RelatedPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const { toast } = useToast();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/blog/${params.id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch blog post");
        }

        const data = await response.json();
        setPost(data.post);
        setRelatedPosts(data.relatedPosts || []);

        // Set random counts for demo purposes
        setLikeCount(Math.floor(Math.random() * 100) + 5);
        setCommentCount(Math.floor(Math.random() * 20) + 1);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Failed to load blog post. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [params.id]);

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      });

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    });
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));

    if (!liked) {
      toast({
        title: "Post liked!",
        description: "Thanks for your feedback.",
      });
    }
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);

    toast({
      title: bookmarked ? "Bookmark removed" : "Post bookmarked!",
      description: bookmarked
        ? "This post has been removed from your bookmarks."
        : "This post has been added to your bookmarks.",
    });
  };

  if (isLoading) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading article...</p>
          </div>
        </div>
      </PageTransition>
    );
  }

  if (error || !post) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-muted-foreground mb-6">
              {error || "Failed to load blog post"}
            </p>
            <Link href="/blog">
              <Button>Return to Blog</Button>
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimateInView>
              <Link
                href="/blog"
                className="inline-flex items-center text-primary hover:text-primary/80 mb-8 group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Blog
              </Link>
            </AnimateInView>

            <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
              <div>
                <AnimateInView>
                  <div className="mb-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                        <Tag className="h-3 w-3 mr-1" /> {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" /> {post.date}
                      </span>
                      <EstimatedReadingTime content={post.content} />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                      {post.title}
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                </AnimateInView>

                <AnimateInView delay={0.1}>
                  <div className="relative aspect-[21/9] overflow-hidden rounded-lg mb-8">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </AnimateInView>

                <AnimateInView delay={0.2}>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-primary/10">
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{post.author}</p>
                        <p className="text-sm text-muted-foreground">Author</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-2 rounded-full ${
                          liked
                            ? "bg-primary/20 text-primary"
                            : "bg-primary/5 text-muted-foreground hover:text-primary hover:bg-primary/10"
                        } transition-colors`}
                        onClick={handleLike}
                        aria-label={liked ? "Unlike post" : "Like post"}
                      >
                        <ThumbsUp className="h-5 w-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-2 rounded-full ${
                          bookmarked
                            ? "bg-primary/20 text-primary"
                            : "bg-primary/5 text-muted-foreground hover:text-primary hover:bg-primary/10"
                        } transition-colors`}
                        onClick={handleBookmark}
                        aria-label={
                          bookmarked ? "Remove bookmark" : "Bookmark post"
                        }
                      >
                        <Bookmark className="h-5 w-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-primary/5 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors relative"
                        onClick={copyToClipboard}
                        aria-label="Copy link"
                      >
                        {copied ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </motion.button>
                    </div>
                  </div>
                </AnimateInView>

                <AnimateInView delay={0.3}>
                  <article className="prose prose-lg dark:prose-invert max-w-none mb-12 relative z-10">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.content.replace(
                          /<(h[2-3])(.*?)>(.*?)<\/h[2-3]>/g,
                          (match, tag, attrs, content) => {
                            const id = `section-${content
                              .toLowerCase()
                              .replace(/\s+/g, "-")
                              .replace(/[^\w-]/g, "")}`;
                            return `<${tag}${attrs} id="${id}" style="scroll-margin-top: 120px; position: relative; z-index: 1;">${content}</${tag}>`;
                          }
                        ),
                      }}
                    />
                  </article>
                </AnimateInView>

                <AnimateInView delay={0.4}>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </AnimateInView>

                <AnimateInView delay={0.5}>
                  <div className="p-4 bg-card/30 backdrop-blur-sm border border-primary/10 rounded-lg mb-8">
                    <BlogPostActions
                      postId={post.id}
                      initialLikes={likeCount}
                      initialBookmarked={bookmarked}
                    />
                  </div>
                </AnimateInView>

                <AnimateInView delay={0.6}>
                  <div className="mb-8">
                    <BlogAuthorCard
                      author={post.author}
                      authorImage={post.authorImage}
                      authorBio={post.authorBio}
                    />
                  </div>
                </AnimateInView>

                {relatedPosts.length > 0 && (
                  <AnimateInView delay={0.7}>
                    <BlogRelatedPosts posts={relatedPosts} />
                  </AnimateInView>
                )}

                <AnimateInView delay={0.7}>
                  <div className="mb-12">
                    <BlogNewsletterBanner />
                  </div>
                </AnimateInView>

                <AnimateInView delay={0.8}>
                  <BlogCommentSection postId={post.id} />
                </AnimateInView>
              </div>

              <div className="space-y-6">
                <AnimateInView delay={0.2}>
                  <TableOfContents content={post.content} />
                </AnimateInView>

                <AnimateInView delay={0.3}>
                  <Card className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 neon-border">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Subscribe</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get notified when new articles are published. No spam,
                        ever.
                      </p>
                      <NewsletterForm />
                    </CardContent>
                  </Card>
                </AnimateInView>

                <AnimateInView delay={0.4}>
                  <Card className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 neon-border">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <motion.span
                            key={index}
                            className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary cursor-pointer"
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "rgba(200, 40, 60, 0.2)",
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                            tabIndex={0}
                          >
                            #{tag}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimateInView>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
