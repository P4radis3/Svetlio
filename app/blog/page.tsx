import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight, Search, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Breadcrumb from "@/components/breadcrumb"

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Pressure Washing",
      excerpt:
        "Learn the best techniques and tips for effective pressure washing for different surfaces and applications.",
      date: "March 15, 2023",
      author: "John Smith",
      image: "/placeholder.svg?height=400&width=600",
      category: "Guides",
    },
    {
      id: 2,
      title: "5 Benefits of Professional Carpet Cleaning",
      excerpt:
        "Discover why professional carpet cleaning is essential for maintaining a healthy and clean home environment.",
      date: "February 28, 2023",
      author: "Sarah Johnson",
      image: "/placeholder.svg?height=400&width=600",
      category: "Tips & Tricks",
    },
    {
      id: 3,
      title: "How to Choose the Right Vacuum Cleaner",
      excerpt: "A comprehensive guide to selecting the perfect vacuum cleaner for your specific cleaning needs.",
      date: "January 20, 2023",
      author: "Michael Brown",
      image: "/placeholder.svg?height=400&width=600",
      category: "Buying Guides",
    },
    {
      id: 4,
      title: "Commercial Cleaning: Best Practices for Businesses",
      excerpt:
        "Essential cleaning practices that every business should implement to maintain a clean and healthy workplace.",
      date: "December 12, 2022",
      author: "Emily Davis",
      image: "/placeholder.svg?height=400&width=600",
      category: "Commercial",
    },
    {
      id: 5,
      title: "Eco-Friendly Cleaning Solutions for Your Home",
      excerpt:
        "Discover environmentally friendly cleaning methods and products that are effective and safe for your family.",
      date: "November 5, 2022",
      author: "David Wilson",
      image: "/placeholder.svg?height=400&width=600",
      category: "Eco-Friendly",
    },
    {
      id: 6,
      title: "Maintaining Your Cleaning Equipment: A Complete Guide",
      excerpt: "Learn how to properly maintain your cleaning equipment to ensure optimal performance and longevity.",
      date: "October 18, 2022",
      author: "Jennifer Lee",
      image: "/placeholder.svg?height=400&width=600",
      category: "Maintenance",
    },
  ]

  // Sample categories
  const categories = [
    "All",
    "Guides",
    "Tips & Tricks",
    "Buying Guides",
    "Commercial",
    "Eco-Friendly",
    "Maintenance",
    "News",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-12 text-white">
          <div className="container">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog", active: true },
              ]}
            />
            <h1 className="text-3xl md:text-4xl font-bold mt-4">Our Blog</h1>
            <p className="text-white/90 mt-2 max-w-2xl">
              Stay updated with the latest news, tips, and insights from the cleaning industry.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-4">Search</h2>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full border border-gray-300 rounded-md px-4 py-2"
                      />
                      <Button size="sm" className="absolute right-1 top-1">
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-4">Categories</h2>
                    <ul className="space-y-2">
                      {categories.map((category, index) => (
                        <li key={index}>
                          <Link
                            href={category === "All" ? "/blog" : `/blog?category=${category}`}
                            className={`text-gray-600 hover:text-primary ${category === "All" ? "text-primary font-medium" : ""}`}
                          >
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold mb-4">Recent Posts</h2>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map((post) => (
                        <div key={post.id} className="flex gap-3">
                          <div className="relative h-16 w-16 flex-shrink-0">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium hover:text-primary">
                              <Link href={`/blog/${post.id}`}>{post.title}</Link>
                            </h3>
                            <p className="text-xs text-gray-500">{post.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2 hover:text-primary">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h2>
                        <div className="flex items-center text-gray-500 text-sm mb-4">
                          <div className="flex items-center mr-4">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-primary font-medium flex items-center hover:underline"
                        >
                          Read More <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-12">
                  <nav className="flex items-center gap-2">
                    <Button variant="outline" size="icon" disabled>
                      <ChevronRight className="h-4 w-4 rotate-180" />
                    </Button>
                    <Button variant="outline" size="sm" className="bg-primary text-white">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Stay updated with our latest news, tips, and special offers by subscribing to our newsletter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 border border-gray-300 rounded-md px-4 py-2"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

