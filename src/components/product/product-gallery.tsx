"use client"

import * as React from "react"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

interface ProductGalleryProps {
    images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = React.useState(images[0])

    return (
        <div className="w-full">
            {/* Mobile Carousel */}
            <div className="lg:hidden">
                <Carousel className="w-full">
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="relative aspect-[3/4] w-full overflow-hidden bg-secondary/5">
                                    <Image
                                        src={image}
                                        alt={`Product view ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            {/* Desktop Thumbnail Strip Layout */}
            <div className="hidden lg:flex gap-4 h-[80vh] sticky top-24">
                {/* Thumbnails (Left) */}
                <div className="w-[100px] flex flex-col gap-4 overflow-y-auto no-scrollbar py-1">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(image)}
                            className={cn(
                                "relative w-full aspect-[3/4] overflow-hidden rounded-sm border-2 transition-all cursor-pointer",
                                selectedImage === image
                                    ? "border-black opacity-100 ring-1 ring-black"
                                    : "border-transparent opacity-70 hover:opacity-100 hover:border-gray-300"
                            )}
                        >
                            <Image
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>

                {/* Main Image (Right) */}
                <div className="flex-1 relative overflow-hidden bg-secondary/5 rounded-sm">
                    <Image
                        src={selectedImage}
                        alt="Product Main View"
                        fill
                        className="object-cover transition-all duration-300"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
