"use client"

import { ProductCard } from "@/components/product/product-card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const newArrivals = [
    {
        title: "Stealth Performance Tee",
        price: "₹1,499",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
        hoverImage: "https://images.unsplash.com/photo-1765226343530-e61c653a79ea?q=80&w=726&auto=format&fit=crop",
        badge: "New Drop",
        colors: ["#1a1a1a", "#44A5BD", "#ffffff"],
    },
    {
        title: "Flex Pro Leggings",
        price: "₹2,299",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
        hoverImage: "https://images.unsplash.com/photo-1765226343530-e61c653a79ea?q=80&w=726&auto=format&fit=crop",
        badge: "Best Seller",
        colors: ["#003139", "#000000"],
    },
    {
        title: "Viking Graphic Hoodie",
        price: "₹3,499",
        image: "https://images.unsplash.com/photo-1584466977787-cb6cfbdffc6f?q=80&w=687&auto=format&fit=crop",
        hoverImage: "https://images.unsplash.com/photo-1765226343530-e61c653a79ea?q=80&w=726&auto=format&fit=crop",
        colors: ["#1a1a1a", "#555555"],
    },
    {
        title: "Impact Training Shorts",
        price: "₹1,199",
        image: "https://images.unsplash.com/photo-1756387594526-9eb2874fa86d?q=80&w=687&auto=format&fit=crop",
        hoverImage: "https://images.unsplash.com/photo-1765226343530-e61c653a79ea?q=80&w=726&auto=format&fit=crop",
        badge: "Limited",
        colors: ["#003139", "#E5DC00"],
    },
    {
        title: "Core Compression Long Sleeve",
        price: "₹1,899",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
        hoverImage: "https://images.unsplash.com/photo-1765226343530-e61c653a79ea?q=80&w=726&auto=format&fit=crop",
        colors: ["#000000", "#ffffff"],
    },
]

export function NewArrivalsSection() {
    return (
        <section className="py-20 md:py-32 bg-background border-t border-gray-100">
            <div className="container mx-auto px-4 3xl:max-w-[1600px]">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight">New Arrivals</h2>
                    <Button variant="link" asChild className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                        <Link href="/collections/new-arrivals">View All</Link>
                    </Button>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {newArrivals.map((product, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                                <ProductCard {...product} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious className="left-0" />
                        <CarouselNext className="right-0" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}
