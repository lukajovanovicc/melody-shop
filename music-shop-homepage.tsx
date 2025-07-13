import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Guitar,
  Piano,
  Drum,
  Mic,
  Headphones,
  Music,
  Star,
  Truck,
  Shield,
  Award,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">MelodyMart</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Guitars
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Keyboards
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Drums
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Audio
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Accessories
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">Cart (0)</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">New Arrivals</Badge>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Find Your Perfect
                <span className="text-primary block">Musical Companion</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover premium instruments from world-renowned brands. Whether you're a beginner or a professional, we
                have the perfect instrument to bring your music to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Shop Now
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Browse Catalog
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Musical instruments collection"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground text-lg">Explore our wide range of musical instruments</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Guitar, name: "Guitars", count: "250+ items" },
              { icon: Piano, name: "Keyboards", count: "180+ items" },
              { icon: Drum, name: "Drums", count: "120+ items" },
              { icon: Mic, name: "Audio", count: "300+ items" },
              { icon: Headphones, name: "Accessories", count: "500+ items" },
            ].map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <category.icon className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">Hand-picked instruments from our collection</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Fender Stratocaster",
                price: "$1,299",
                rating: 5,
                image: "/placeholder.svg?height=300&width=300",
                badge: "Best Seller",
              },
              {
                name: "Yamaha Digital Piano",
                price: "$899",
                rating: 5,
                image: "/placeholder.svg?height=300&width=300",
                badge: "New",
              },
              {
                name: "Pearl Drum Kit",
                price: "$2,199",
                rating: 4,
                image: "/placeholder.svg?height=300&width=300",
                badge: "Professional",
              },
              {
                name: "Audio-Technica Headphones",
                price: "$199",
                rating: 5,
                image: "/placeholder.svg?height=300&width=300",
                badge: "Popular",
              },
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 left-2">{product.badge}</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{product.price}</span>
                      <Button size="sm">Add to Cart</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose MelodyMart?</h2>
            <p className="text-muted-foreground text-lg">Your trusted partner in musical excellence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: "Free Shipping",
                description: "Free shipping on orders over $99. Fast and secure delivery to your doorstep.",
              },
              {
                icon: Shield,
                title: "Quality Guarantee",
                description: "All instruments come with manufacturer warranty and our quality assurance.",
              },
              {
                icon: Award,
                title: "Expert Support",
                description: "Our team of musicians is here to help you find the perfect instrument.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in Tune</h2>
          <p className="text-lg mb-8 opacity-90">
            Get the latest updates on new arrivals, exclusive deals, and music tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-foreground"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Music className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">MelodyMart</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Your one-stop destination for quality musical instruments and accessories.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Electric Guitars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Acoustic Guitars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Digital Pianos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Drum Sets
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@melodymart.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Music St, Harmony City</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 MelodyMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
