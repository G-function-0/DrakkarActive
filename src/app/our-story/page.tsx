import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import Image from "next/image"

export default function OurStoryPage() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <SiteHeader />

            <main className="flex-grow pt-24 pb-16">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1542766788-a2f588f447ee?q=80&w=2676&auto=format&fit=crop"
                            alt="Misty Viking Landscape"
                            fill
                            className="object-cover opacity-60 grayscale"
                            priority
                        />
                        <div className="absolute inset-0 bg-secondary/60 mix-blend-multiply" />
                    </div>

                    <div className="relative z-10 container mx-auto px-4 text-center text-white">
                        <h1 className="text-4xl md:text-7xl font-heading font-bold uppercase tracking-wider mb-6 leading-tight">
                            Not All Revolutions <br /> Come From Chaos.
                        </h1>
                        <p className="text-xl md:text-2xl font-light font-body max-w-2xl mx-auto text-gray-200">
                            Some are forged in silence. Some are built to last.
                        </p>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-24 bg-white text-secondary">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl font-heading font-bold mb-8 uppercase text-center text-primary">The Drakkar Mindset</h2>

                        <div className="space-y-8 text-lg leading-relaxed font-body text-gray-700">
                            <p>
                                In 2026, the world of performance wear was cluttered with noise. Brands shouted louder, but said less. We looked back to move forward. We looked to the longships&mdash;the <em>Drakkars</em>&mdash;engineered for resilience, built for the open sea, and designed to conquer the unknown.
                            </p>
                            <p>
                                Drakkar Active isn&apos;t just about fabric; it&apos;s about fortitude. We believe that true strength is woven into every thread of your existence. It&apos;s in the early mornings, the late nights, and the quiet moments where you decide to push past your limits.
                            </p>
                            <div className="border-l-4 border-accent pl-6 py-2 my-12 italic text-2xl text-secondary font-medium">
                                &quot;Minimalist in design, maximalist in intent.&quot;
                            </div>
                            <p>
                                Our mission is simple: to equip the modern warrior with gear that endures. No flashy logos required. No unnecessary distractions. Just pure performance, engineered to withstand the friction of your ambition.
                            </p>
                            <p>
                                Welcome to the shield wall. Welcome to Drakkar Active.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </div>
    )
}
