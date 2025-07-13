import { Truck, Shield, Award } from "lucide-react"

const features = [
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
]

export function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose MelodyMart?</h2>
          <p className="text-muted-foreground text-lg">Your trusted partner in musical excellence</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
