import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const products = [
  {
    id: 1,
    name: "Fender Stratocaster",
    price: "$1,299",
    rating: 5,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Yamaha Digital Piano",
    price: "$899",
    rating: 5,
    image: "/placeholder.svg?height=300&width=300",
    badge: "New",
  },
  {
    id: 3,
    name: "Pearl Drum Kit",
    price: "$2,199",
    rating: 4,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Professional",
  },
  {
    id: 4,
    name: "Audio-Technica Headphones",
    price: "$199",
    rating: 5,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Popular",
  },
  {
    id: 5,
    name: "Gibson Les Paul",
    price: "$2,499",
    rating: 5,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Premium",
  },
  {
    id: 6,
    name: "Roland Electronic Drums",
    price: "$1,799",
    rating: 4,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Electronic",
  },
  {
    id: 7,
    name: "Shure SM58 Microphone",
    price: "$99",
    rating: 5,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Classic",
  },
  {
    id: 8,
    name: "Korg Synthesizer",
    price: "$1,599",
    rating: 4,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Synth",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg">Hand-picked instruments from our collection</p>
        </div>
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Card className="group hover:shadow-lg transition-shadow">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
