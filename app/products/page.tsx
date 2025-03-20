import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard from "@/components/product-card"
import Breadcrumb from "@/components/breadcrumb"

export default function ProductsPage() {
  // Sample product categories
  const categories = [
    "Pressure Washers",
    "Vacuum Cleaners",
    "Steam Cleaners",
    "Floor Scrubbers",
    "Carpet Cleaners",
    "Accessories",
  ]

  // Sample products data
  const products = [
    {
      id: 1,
      title: "Professional Pressure Washer",
      description: "High-pressure cleaning solution for tough dirt and grime.",
      price: "$599.99",
      image: "/placeholder.svg?height=300&width=300",
      category: "Pressure Washers",
    },
    {
      id: 2,
      title: "Industrial Vacuum Cleaner",
      description: "Powerful suction for commercial cleaning applications.",
      price: "$349.99",
      image: "/placeholder.svg?height=300&width=300",
      category: "Vacuum Cleaners",
    },
    {
      id: 3,
      title: "Steam Cleaner Pro",
      description: "Chemical-free cleaning with the power of steam.",
      price: "$429.99",
      image: "/placeholder.svg?height=300&width=300",
      category: "Steam Cleaners",
    },
    {
      id: 4,
      title: "Commercial Floor Scrubber",
      description: "Efficient floor cleaning for large commercial spaces.",
      price: "$1,299.99",
      image: "/placeholder.svg?height=300&width=300",
      category: "Floor Scrubbers",
    },
    {
      id: 5,
      title: "Carpet Cleaner Deluxe",
      description: "Deep clean carpets and upholstery with ease.",
      price: "$499.99",
      image: "/placeholder.svg?height=300&width=300",
      category: "Carpet Cleaners",
    },
    {
      id: 6,
      title: "Compact Pressure Washer",
      description: "Portable yet powerful pressure washing for home use.",
      price: "$299.99",
      image: "/placeholder.svg?height=300&width=300",
      category: "Pressure Washers",
    },
    {
      id: 7,
      title: "Backpack Vacuum",
      description: "Ergonomic design for comfortable extended use.",
      price: "$249.99",
      image: "/placeholder.svg?height=300&width=300",
      category: "Vacuum Cleaners",
    },
    {
      id: 8,
      title: "Handheld Steam Cleaner",
      description: "Compact steam cleaning for hard-to-reach areas.",
      price: "$129.99",
      image: "/placeholder.svg?height=300&width=300",
      category: "Steam Cleaners",
    },
    {
      id: 9,
      title: "Pressure Washer Accessories Kit",
      description: "Complete set of nozzles and attachments.",
      price: "$89.99",
      image: "/placeholder.svg?height=300&width=300",
      category: "Accessories",
    },
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
                { label: "Products", href: "/products", active: true },
              ]}
            />
            <h1 className="text-3xl md:text-4xl font-bold mt-4">Our Products</h1>
            <p className="text-white/90 mt-2 max-w-2xl">
              Discover our range of high-quality cleaning equipment designed for both commercial and residential use.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                  <h2 className="text-lg font-semibold mb-4">Categories</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/products" className="text-primary font-medium">
                        All Products
                      </Link>
                    </li>
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link href={`/products?category=${category}`} className="text-gray-600 hover:text-primary">
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <h2 className="text-lg font-semibold mb-4">Price Range</h2>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="price-1" className="mr-2" />
                        <label htmlFor="price-1" className="text-gray-600">
                          Under $100
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="price-2" className="mr-2" />
                        <label htmlFor="price-2" className="text-gray-600">
                          $100 - $300
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="price-3" className="mr-2" />
                        <label htmlFor="price-3" className="text-gray-600">
                          $300 - $500
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="price-4" className="mr-2" />
                        <label htmlFor="price-4" className="text-gray-600">
                          $500 - $1000
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="price-5" className="mr-2" />
                        <label htmlFor="price-5" className="text-gray-600">
                          Over $1000
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="w-full">
                      <Filter className="h-4 w-4 mr-2" /> Apply Filters
                    </Button>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="lg:col-span-3">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                  <h2 className="text-2xl font-bold">All Products</h2>
                  <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <div className="relative w-full sm:w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input placeholder="Search products..." className="pl-10" />
                    </div>
                    <select className="border rounded-md px-3 py-2 bg-white">
                      <option>Sort by: Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest First</option>
                    </select>
                  </div>
                </div>

                <Tabs defaultValue="grid" className="mb-8">
                  <TabsList>
                    <TabsTrigger value="grid">Grid View</TabsTrigger>
                    <TabsTrigger value="list">List View</TabsTrigger>
                  </TabsList>
                  <TabsContent value="grid">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {products.map((product) => (
                        <ProductCard
                          key={product.id}
                          title={product.title}
                          description={product.description}
                          price={product.price}
                          image={product.image}
                        />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="list">
                    <div className="space-y-6">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-sm overflow-hidden"
                        >
                          <div className="relative h-48 md:h-auto md:w-1/3">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                            <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xl font-bold text-primary">{product.price}</span>
                              <Button>Add to Cart</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>

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
      </main>
    </div>
  )
}

