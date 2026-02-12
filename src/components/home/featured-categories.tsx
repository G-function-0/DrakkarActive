"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const categories = [
    {
        title: "Men",
        href: "/collections/men",
        image: "https://images.unsplash.com/photo-1761358531246-b43146ab86de?q=80&w=687&auto=format&fit=crop",
        className: "col-span-1 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-2",
        cta: "Shop Men"
    },
    {
        title: "Women",
        href: "/collections/women",
        image: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=687&auto=format&fit=crop",
        className: "col-span-1 md:col-span-1 md:row-span-1",
        cta: "Shop Women"
    },
    {
        title: "Accessories",
        href: "/collections/accessories",
        image: "https://images.unsplash.com/photo-1659081445898-3b0dc8c829e4?q=80&w=1470&auto=format&fit=crop",
        className: "col-span-1 md:col-span-1 md:row-span-1",
        cta: "Shop Accessories"
    },
    {
        title: "New Drops",
        href: "/collections/new-arrivals",
        image: "https://images.unsplash.com/photo-1734668472056-b3383673172d?q=80&w=1470&auto=format&fit=crop",
        className: "col-span-1 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1",
        cta: "Shop New"
    },
]

export function FeaturedCategories() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 3xl:max-w-[1600px]">
                <div className="flex items-end justify-between mb-12">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight">
                        Built for <span className="text-primary italic">Battle</span>
                    </h2>
                    <Button variant="link" className="hidden md:flex text-primary font-bold uppercase tracking-widest text-xs">
                        View All Collections
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-2 gap-4 h-[1200px] md:h-[800px]">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            href={category.href}
                            className={cn(
                                "group relative overflow-hidden rounded-sm bg-gray-100",
                                category.className
                            )}
                        >
                            <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                                <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase text-white mb-4 tracking-tighter">
                                    {category.title}
                                </h3>
                                <div className="h-10 overflow-hidden">
                                    <span className="inline-block px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                                        {category.cta}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
