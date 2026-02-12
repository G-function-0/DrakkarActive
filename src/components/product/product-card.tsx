"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductCardProps {
    title: string
    price: string
    image: string
    hoverImage: string
    badge?: string
    colors?: string[] // hex codes
    variants?: string[] // List of image URLs
    className?: string
}

export function ProductCard({
    title,
    price,
    image,
    hoverImage,
    badge,
    colors = [],
    variants = [],
    className,
}: ProductCardProps) {
    const [currentImage, setCurrentImage] = useState(image)
    const [isHovered, setIsHovered] = useState(false)

    // Use variants if available, otherwise fallback to primary + hover images
    const displayImages = variants.length > 0 ? variants : [image, hoverImage].filter(Boolean)

    // Generate slug from title
    const slug = title.toLowerCase().replace(/ /g, '-')

    return (
        <div
            className={cn("group relative flex flex-col gap-2 bg-transparent", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false)
                setCurrentImage(image) // Reset to primary on leave
            }}
        >
            {/* Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 mb-2 rounded-md">
                {/* Badge */}
                {badge && (
                    <div className="absolute top-2 left-2 z-20 px-2 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-wider">
                        {badge}
                    </div>
                )}

                {/* Main Image */}
                <Link href={`/products/${slug}`} className="block w-full h-full relative z-10">
                    <img
                        src={currentImage || image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </Link>

                {/* Thumbnails Overlay (Visible on Hover) */}
                <div className={cn(
                    "absolute bottom-0 left-0 w-full p-2 flex gap-1 justify-center bg-black/20 backdrop-blur-sm transition-opacity duration-300 z-30",
                    isHovered && displayImages.length > 1 ? "opacity-100" : "opacity-0 pointer-events-none"
                )}>
                    {displayImages.slice(0, 5).map((img, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={() => setCurrentImage(img)}
                            className={cn(
                                "w-10 h-10 border-2 cursor-pointer transition-all bg-white relative overflow-hidden rounded-sm",
                                currentImage === img ? "border-accent scale-110" : "border-transparent opacity-80 hover:opacity-100"
                            )}
                        >
                            <img src={img} alt={`Variant ${idx}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start">
                    <h3 className="text-sm font-medium uppercase tracking-wide group-hover:underline decoration-1 underline-offset-4 line-clamp-1 cursor-pointer">
                        <Link href={`/products/${slug}`}>{title}</Link>
                    </h3>
                    <span className="text-sm font-bold bg-white text-black border border-black px-1 ml-2 whitespace-nowrap">{price}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{colors.length} Colours</p>
            </div>
        </div>
    )
}
