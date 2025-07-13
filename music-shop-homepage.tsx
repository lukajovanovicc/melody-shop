import { Header } from "./components/header"
import { HeroSection } from "./components/hero-section"
import { CategoriesSection } from "./components/categories-section"
import { FeaturedProducts } from "./components/featured-products"
import { FeaturesSection } from "./components/features-section"
import { NewsletterSection } from "./components/newsletter-section"
import { Footer } from "./components/footer"

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <FeaturesSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
