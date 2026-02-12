"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function GenderSplitSection() {
    return (
        <section className="flex flex-col md:flex-row h-[600px] md:h-[800px] w-full 3xl:max-w-[1600px] 3xl:mx-auto">
            {/* Men */}
            <div className="relative w-full md:w-1/2 h-full group overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1000&auto=format&fit=crop"
                    alt="Men's Training"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase text-white mb-6 tracking-tighter">
                        Men
                    </h2>
                    <Button asChild size="lg" className="h-12 px-8 bg-white text-black hover:bg-white/90 font-bold uppercase tracking-widest rounded-none">
                        <Link href="/collections/men">Shop Men</Link>
                    </Button>
                </div>
            </div>

            {/* Women */}
            <div className="relative w-full md:w-1/2 h-full group overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1571388072750-31a921b3d900?q=80&w=1325&auto=format&fit=crop"
                    alt="Women's Training"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase text-white mb-6 tracking-tighter">
                        Women
                    </h2>
                    <Button asChild size="lg" className="h-12 px-8 bg-white text-black hover:bg-white/90 font-bold uppercase tracking-widest rounded-none">
                        <Link href="/collections/women">Shop Women</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
