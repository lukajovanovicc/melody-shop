"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const products = [
  {
    id: 1,
    name: "Fender Stratocaster",
    price: 1299,
    rating: 5,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Best Seller",
    category: "guitars",
  },
  {
    id: 2,
    name: "Yamaha Digital Piano",
    price: 899,
    rating: 5,
    image: "/placeholder.svg?height=300&width=300",
    badge: "New",
    category: "keyboards",
  },
  {
    id: 3,
    name: "Pearl Drum Kit",
    price: 2199,
    rating: 4,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Professional",
    category: "drums",
  },
  {
    id: 4,
    name: "Audio-Technica Headphones",
    price: 199,
    rating: 5,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Popular",
    category: "audio",
  },
  {
    id: 5,
    name: "Gibson Les Paul",
    price: 2499,
    rating: 5,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Premium",
    category: "guitars",
  },
  {
    id: 6,
    name: "Roland Electronic Drums",
    price: 1799,
    rating: 4,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Electronic",
    category: "drums",
  },
  {
    id: 7,
    name: "Shure SM58 Microphone",
    price: 99,
    rating: 5,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Classic",
    category: "audio",
  },
  {
    id: 8,
    name: "Korg Synthesizer",
    price: 1599,
    rating: 4,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Synth",
    category: "keyboards",
  },
  {
    id: 9,
    name: "Taylor Acoustic Guitar",
    price: 1899,
    rating: 5,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Acoustic",
    category: "guitars",
  },
  {
    id: 10,
    name: "Casio Digital Piano",
    price: 599,
    rating: 4,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Budget",
    category: "keyboards",
  },
  {
    id: 11,
    name: "DW Drum Set",
    price: 3299,
    rating: 5,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Pro",
    category: "drums",
  },
  {
    id: 12,
    name: "Sony Studio Headphones",
    price: 299,
    rating: 4,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Studio",
    category: "audio",
  },
]

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    filterProducts(query, selectedCategory, sortBy)
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    filterProducts(searchQuery, category, sortBy)
  }

  const handleSort = (sort: string) => {
    setSortBy(sort)
    filterProducts(searchQuery, selectedCategory, sort)
  }

  const filterProducts = (query: string, category: string, sort: string) => {
    let filtered = products

    // Filter by search query
    if (query) {
      filtered = filtered.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
    }

    // Filter by category
    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category)
    }

    // Sort products
    filtered = [...filtered].sort((a, b) => {
      switch (sort) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setFilteredProducts(filtered)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-muted-foreground text-lg">Discover our complete collection of musical instruments</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <Select value={selectedCategory} onValueChange={handleCategoryFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="guitars">Guitars</SelectItem>
              <SelectItem value="keyboards">Keyboards</SelectItem>
              <SelectItem value="drums">Drums</SelectItem>
              <SelectItem value="audio">Audio</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={handleSort}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Link href={`/products/${product.id}`}>
                  <div className="relative cursor-pointer">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 left-2">{product.badge}</Badge>
                  </div>
                </Link>
                <div className="p-4">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-semibold mb-2 hover:text-primary cursor-pointer">{product.name}</h3>
                  </Link>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">${product.price}</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
