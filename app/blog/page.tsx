"use client";

import { PageTransition } from "@/components/page-transition";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimateInView } from "@/components/animate-in-view";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, User, Calendar, Tag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BlogSearch } from "@/components/blog-search";
import { NewsletterForm } from "@/components/newsletter-form";

const blogPosts = [
  {
    id: 1,
    title: "10 Web Design Trends to Watch in 2023",
    excerpt:
      "Discover the latest web design trends that are shaping the digital landscape this year.",
    image: "/blog/6.jpg?height=600&width=800",
    date: "June 15, 2025",
    author: "Henzel Tibana",
    category: "Design",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "How to Choose the Right Tech Stack for Your Project",
    excerpt:
      "A comprehensive guide to selecting the perfect technology stack for your next web development project.",
    image: "/blog/5.jpg?height=600&width=800",
    date: "May 28, 2025",
    author: "Nilton Novele",
    category: "Development",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 3,
    title: "The Importance of User Experience in Digital Products",
    excerpt:
      "Learn why user experience is crucial for the success of your digital products and how to improve it.",
    image: "/blog/4.jpg?height=600&width=800",
    date: "April 12, 2025",
    author: "Bionda Shirley",
    category: "UX/UI",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Optimizing Website Performance for Better Conversion Rates",
    excerpt:
      "Discover how improving your website's performance can lead to higher conversion rates and better user engagement.",
    image: "/blog/3.jpg?height=600&width=800",
    date: "March 5, 2023",
    author: "Henzel Tibana",
    category: "Performance",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    title: "The Future of Mobile App Development",
    excerpt:
      "Explore the emerging trends and technologies that will shape the future of mobile application development.",
    image: "/blog/2.jpg?height=600&width=800",
    date: "May 20, 2025",
    author: "Henzel Tibana",
    category: "Mobile",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Building Accessible Websites: A Complete Guide",
    excerpt:
      "Learn how to create websites that are accessible to all users, including those with disabilities.",
    image: "/blog/1.jpg?height=600&width=800",
    date: "April 8, 2025",
    author: "Nilton Novele",
    category: "Accessibility",
    readTime: "10 min read",
    featured: false,
  },
];

const categories = [
  "All",
  "Design",
  "Development",
  "UX/UI",
  "Performance",
  "Mobile",
  "Accessibility",
];

export default function BlogPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimateInView>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-600/10 px-3 py-1 text-sm text-blue-600">
                    Blog
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    Latest Articles
                  </h1>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Insights, tips, and industry updates to help you stay ahead
                    in the digital world.
                  </p>
                </div>
              </div>
            </AnimateInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                {/* Featured Post */}
                {blogPosts
                  .filter((post) => post.featured)
                  .map((post) => (
                    <AnimateInView key={post.id}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                        }}
                        className="mb-10"
                      >
                        <Card className="overflow-hidden bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 rounded-xl">
                          <div className="relative aspect-[21/9] overflow-hidden">
                            <Image
                              src={post.image || "/logo/Shibaccus.png"}
                              alt={post.title}
                              width={1200}
                              height={600}
                              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-blue-600/90 text-primary-foreground px-3 py-1 text-sm rounded-full">
                              Featured
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                          </div>
                          <CardHeader className="p-6">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4 text-blue-600" />{" "}
                                {post.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <User className="h-4 w-4 text-blue-600" />{" "}
                                {post.author}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4 text-blue-600" />{" "}
                                {post.readTime}
                              </span>
                            </div>
                            <CardTitle className="text-2xl hover:text-blue-600 transition-colors">
                              <Link href={`/blog/${post.id}`}>
                                {post.title}
                              </Link>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-6 pt-0">
                            <p className="text-muted-foreground">
                              {post.excerpt}
                            </p>
                          </CardContent>
                          <CardFooter className="p-6 pt-0 flex justify-between items-center">
                            <span className="inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-sm text-blue-600">
                              <Tag className="h-3 w-3 mr-1" /> {post.category}
                            </span>
                            <Link href={`/blog/${post.id}`}>
                              <motion.div
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="group"
                              >
                                <Button
                                  variant="outline"
                                  className="rounded-full border-blue-600/20 hover:border-blue-600/50 hover:bg-blue-600/5 hover:text-blue-600"
                                >
                                  Read Article
                                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                              </motion.div>
                            </Link>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    </AnimateInView>
                  ))}

                {/* Regular Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts
                    .filter((post) => !post.featured)
                    .map((post, index) => (
                      <AnimateInView key={post.id} delay={index * 0.05}>
                        <motion.div
                          whileHover={{ y: -5 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                          }}
                        >
                          <Card className="overflow-hidden h-full bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 rounded-xl">
                            <div className="relative aspect-video overflow-hidden">
                              <Image
                                src={post.image || "/logo/Shibaccus.png"}
                                alt={post.title}
                                width={800}
                                height={450}
                                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                              />
                              <div className="absolute top-2 right-2 bg-blue-600/90 text-primary-foreground px-2 py-1 text-xs rounded-full">
                                {post.category}
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
                            </div>
                            <CardHeader className="p-4">
                              <CardTitle className="line-clamp-2 hover:text-blue-600 transition-colors text-lg">
                                <Link href={`/blog/${post.id}`}>
                                  {post.title}
                                </Link>
                              </CardTitle>
                              <CardDescription className="flex items-center gap-4 text-xs mt-2">
                                <span className="flex items-center gap-1">
                                  <User className="h-3 w-3 text-blue-600" />{" "}
                                  {post.author}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3 text-blue-600" />{" "}
                                  {post.readTime}
                                </span>
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                              <p className="text-muted-foreground text-sm line-clamp-3">
                                {post.excerpt}
                              </p>
                            </CardContent>
                            <CardFooter className="p-4 pt-0">
                              <Link href={`/blog/${post.id}`}>
                                <motion.div
                                  whileHover={{ scale: 1.05, x: 5 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="group"
                                >
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="hover:bg-blue-600/5 hover:text-blue-600 rounded-full"
                                  >
                                    Read More
                                    <ArrowRight className="ml-2 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                                  </Button>
                                </motion.div>
                              </Link>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      </AnimateInView>
                    ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 neon-border">
                  <CardHeader>
                    <CardTitle>Search</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BlogSearch />
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Press{" "}
                      <kbd className="px-1 py-0.5 bg-blue-600/10 rounded text-xs">
                        ⌘K
                      </kbd>{" "}
                      to search
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 neon-border">
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category, index) => (
                        <motion.span
                          key={index}
                          className="inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-sm text-blue-600 cursor-pointer"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(59, 130, 246, 0.2)", // Tailwind blue-500 20%
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                          tabIndex={0}
                        >
                          {category}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 neon-border">
                  <CardHeader>
                    <CardTitle>Recent Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map((post, index) => (
                        <Link href={`/blog/${post.id}`} key={index}>
                          <div className="flex gap-3 group p-2 rounded-md hover:bg-blue-600/5 transition-colors">
                            <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                              <Image
                                src={post.image || "/logo/Shibaccus.png"}
                                alt={post.title}
                                width={64}
                                height={64}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h4 className="text-sm font-medium group-hover:text-blue-600 transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {post.date}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/30 backdrop-blur-sm border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 neon-border">
                  <CardHeader>
                    <CardTitle>Subscribe</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Stay updated with the latest articles and industry
                      insights.
                    </p>
                    <NewsletterForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
