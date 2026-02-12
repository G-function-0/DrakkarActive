"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const scrollImages = [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop",
]

export function SplitScrollSection() {
    return (
        <section className="relative w-full flex flex-col lg:flex-row bg-background 3xl:max-w-[1600px] 3xl:mx-auto">
            {/* Left Content - Sticky */}
            <div className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex items-center justify-center p-8 md:p-16 lg:p-24 z-10 bg-background">
                <div className="space-y-6 max-w-xl">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tighter">
                        Engineered for <br />
                        <span className="text-primary italic">The Shield Wall</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl font-light">
                        Premium athletic wear designed to withstand your toughest battles.
                        Built with advanced moisture-wicking technology and
                        unbreakable durability.
                    </p>
                    <div className="pt-4">
                        <Button asChild size="lg" className="h-14 px-8 text-base font-bold tracking-widest uppercase rounded-none">
                            <Link href="/collections/all">
                                Shop Collection
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Right Content - Scrolling Images */}
            <div className="w-full lg:w-1/2 bg-black">
                <div className="flex flex-col">
                    {scrollImages.map((src, index) => (
                        <div key={index} className="relative h-[80vh] w-full">
                            <Image
                                src={src}
                                alt={`Lifestyle shot ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                            {/* Overlay gradient for better blending */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
