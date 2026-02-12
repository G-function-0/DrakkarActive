import { SiteHeader } from "@/components/layout/site-header"
import { HeroSection } from "@/components/home/hero-section"
import { SplitScrollSection } from "@/components/home/split-scroll-section"
import { FeaturedCategories } from "@/components/home/featured-categories"
import { NewArrivalsSection } from "@/components/home/new-arrivals-section"
import { GenderSplitSection } from "@/components/home/gender-split-section"



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-body bg-background text-foreground">
      {/* <SiteHeader /> */}

      <main className="flex-grow">
        <HeroSection />
        <SplitScrollSection />
        <FeaturedCategories />
        <GenderSplitSection />
        <NewArrivalsSection />
      </main>
    </div>
  );
}
