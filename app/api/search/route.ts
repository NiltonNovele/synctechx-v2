import { NextResponse } from "next/server"

// This would typically come from a database
const blogPosts = [
  {
    id: 1,
    title: "10 Web Design Trends to Watch in 2023",
    excerpt: "Discover the latest web design trends that are shaping the digital landscape this year.",
    image: "/logo/Shibaccus.png?height=600&width=800",
    date: "June 15, 2023",
    author: "Alex Johnson",
    category: "Design",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "How to Choose the Right Tech Stack for Your Project",
    excerpt: "A comprehensive guide to selecting the perfect technology stack for your next web development project.",
    image: "/logo/Shibaccus.png?height=600&width=800",
    date: "May 28, 2023",
    author: "Sarah Williams",
    category: "Development",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 3,
    title: "The Importance of User Experience in Digital Products",
    excerpt: "Learn why user experience is crucial for the success of your digital products and how to improve it.",
    image: "/logo/Shibaccus.png?height=600&width=800",
    date: "April 12, 2023",
    author: "Michael Chen",
    category: "UX/UI",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Optimizing Website Performance for Better Conversion Rates",
    excerpt:
      "Discover how improving your website's performance can lead to higher conversion rates and better user engagement.",
    image: "/logo/Shibaccus.png?height=600&width=800",
    date: "March 5, 2023",
    author: "Emily Rodriguez",
    category: "Performance",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    title: "The Future of Mobile App Development",
    excerpt:
      "Explore the emerging trends and technologies that will shape the future of mobile application development.",
    image: "/logo/Shibaccus.png?height=600&width=800",
    date: "February 20, 2023",
    author: "David Kim",
    category: "Mobile",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Building Accessible Websites: A Complete Guide",
    excerpt: "Learn how to create websites that are accessible to all users, including those with disabilities.",
    image: "/logo/Shibaccus.png?height=600&width=800",
    date: "January 8, 2023",
    author: "Lisa Thompson",
    category: "Accessibility",
    readTime: "10 min read",
    featured: false,
  },
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")
    const category = searchParams.get("category")

    if (!query && !category) {
      return NextResponse.json({ posts: [] }, { status: 200 })
    }

    let filteredPosts = [...blogPosts]

    // Filter by search query
    if (query) {
      const searchTerms = query.toLowerCase().split(" ")
      filteredPosts = filteredPosts.filter((post) => {
        const titleMatch = searchTerms.some((term) => post.title.toLowerCase().includes(term))
        const excerptMatch = searchTerms.some((term) => post.excerpt.toLowerCase().includes(term))
        const categoryMatch = searchTerms.some((term) => post.category.toLowerCase().includes(term))
        const authorMatch = searchTerms.some((term) => post.author.toLowerCase().includes(term))

        return titleMatch || excerptMatch || categoryMatch || authorMatch
      })
    }

    // Filter by category
    if (category && category !== "All") {
      filteredPosts = filteredPosts.filter((post) => post.category === category)
    }

    return NextResponse.json({ posts: filteredPosts }, { status: 200 })
  } catch (error) {
    console.error("Error searching blog posts:", error)
    return NextResponse.json({ error: "Failed to search blog posts" }, { status: 500 })
  }
}

