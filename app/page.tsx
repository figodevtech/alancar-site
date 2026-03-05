import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSearch } from "@/components/home/hero-search"
import { BrandSection } from "@/components/home/brand-section"
import { FeaturedVehicles } from "@/components/home/featured-vehicles"
import { BodyTypeSection } from "@/components/home/body-type-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSearch />
        <BrandSection />
        <FeaturedVehicles />
        <BodyTypeSection />
      </main>
      <Footer />
    </div>
  )
}
