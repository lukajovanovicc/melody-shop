import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
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
  )
}
