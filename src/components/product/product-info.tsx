"use client"

import * as React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Ruler, Heart, Truck, RefreshCw } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useCart } from "@/context/cart-context"
import { SizeChartModal } from "@/components/product/size-chart-modal"

interface ProductInfoProps {
    product: {
        id: string
        title: string
        price: number
        colors: { name: string; value: string; image: string }[]
        sizes: string[]
        description: string
        details?: string[]
        material: string
        shipping: string
        category: string
        subCategory: string
        badge?: string
        rating?: number
        reviewCount?: number
    }
}

export function ProductInfo({ product }: ProductInfoProps) {
    const [selectedColor, setSelectedColor] = React.useState(product.colors[0])
    const [selectedSize, setSelectedSize] = React.useState<string | null>(null)
    const [showSizeChart, setShowSizeChart] = React.useState(false)
    const { addItem } = useCart()
    const { toggleCart } = useCart()

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size") // Simple alert for now, could be better UI
            return
        }

        addItem({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.colors[0].image, // Default image
            color: selectedColor.name,
            size: selectedSize,
        })
        toggleCart() // Open cart after adding
    }

    return (
        <div className="flex flex-col gap-6">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="flex items-center hover:text-foreground font-medium underline-offset-4 hover:underline">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back
                </Link>
                <span className="text-muted-foreground/50">/</span>
                <Link href="/" className="hover:text-foreground underline-offset-4 hover:underline">Home</Link>
                <span className="text-muted-foreground/50">/</span>
                <span>{product.category}</span>
                <span className="text-muted-foreground/50">/</span>
                <span className="text-foreground font-medium">{product.subCategory}</span>
            </div>

            {/* Category & Rating */}
            <div className="flex justify-between items-start">
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {product.category} • {product.subCategory}
                </div>
                {product.rating && (
                    <div className="flex items-center gap-1 text-sm font-medium underline underline-offset-4 cursor-pointer hover:text-primary">
                        <div className="flex text-black">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < Math.floor(product.rating!) ? "fill-current" : "text-gray-300"}>★</span>
                            ))}
                        </div>
                        <span className="ml-1 decoration-1">{product.reviewCount}</span>
                    </div>
                )}
            </div>

            {/* Title & Price */}
            <div className="space-y-4">
                {product.badge && (
                    <span className="inline-block bg-accent/20 text-secondary-foreground px-2 py-1 text-xs font-bold uppercase tracking-wider">
                        {product.badge}
                    </span>
                )}
                <h1 className="text-3xl md:text-4xl font-heading font-bold uppercase leading-none italic tracking-tighter">
                    {product.title}
                </h1>
                <div>
                    <div className="text-xl md:text-2xl font-bold">₹{product.price}.00</div>
                    <p className="text-xs text-muted-foreground mt-1">MRP in Indian currency per unit. Inclusive of all taxes</p>
                </div>
            </div>

            <div className="h-px bg-gray-200" />

            {/* Colors */}
            <div className="space-y-3">
                <span className="text-sm font-medium text-muted-foreground">
                    {selectedColor.name}
                </span>
                <div className="flex gap-2">
                    {product.colors.map((color) => (
                        <button
                            key={color.name}
                            onClick={() => setSelectedColor(color)}
                            className={cn(
                                "relative w-16 h-16 rounded-md overflow-hidden border-2 transition-all",
                                selectedColor.name === color.name ? "border-black" : "border-transparent opacity-80 hover:opacity-100 placeholder:border-gray-200"
                            )}
                        >
                            <img src={color.image} alt={color.name} className="w-full h-full object-cover" />
                            {selectedColor.name === color.name && (
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-black" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sizes */}
            <div className="space-y-3">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-bold uppercase">Sizes</span>
                    <button
                        onClick={() => setShowSizeChart(true)}
                        className="flex items-center text-xs font-bold underline underline-offset-4 hover:text-primary uppercase tracking-wide"
                    >
                        <Ruler className="h-3 w-3 mr-1" />
                        Size Guide
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    {product.sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={cn(
                                "h-12 border flex items-center justify-center text-sm font-medium transition-colors hover:border-black",
                                selectedSize === size
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-foreground border-gray-300"
                            )}
                        >
                            {size}
                        </button>
                    ))}
                </div>
                {selectedSize && (
                    <p className="text-xs text-green-700 flex items-center font-medium">
                        <span className="mr-1">✓</span> In stock
                    </p>
                )}
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
                <Button onClick={handleAddToCart} className="flex-1 h-12 bg-black hover:bg-black/90 text-white font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 rounded-none">
                    <span>Add to Bag</span>
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                </Button>
                <Button variant="outline" className="h-12 w-12 border-black hover:bg-gray-100 p-0 rounded-none">
                    <Heart className="h-5 w-5" />
                </Button>
            </div>

            <div className="space-y-4 pt-4">
                <div className="flex gap-4 text-xs font-medium uppercase tracking-wide">
                    <span className="flex items-center gap-2">
                        <Truck className="h-4 w-4" />
                        Free Delivery
                    </span>
                    <span className="flex items-center gap-2">
                        <RefreshCw className="h-4 w-4" />
                        Returns
                    </span>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 py-6 border-t border-b border-gray-100">
                <div className="flex flex-col gap-1">
                    <span className="font-heading font-bold uppercase text-xs">Breathable</span>
                    <span className="text-xs text-muted-foreground">Moisture-wicking fabric</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="font-heading font-bold uppercase text-xs">4 Way Stretch</span>
                    <span className="text-xs text-muted-foreground">Maximum flexibility</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="font-heading font-bold uppercase text-xs">Super Soft</span>
                    <span className="text-xs text-muted-foreground">Premium cotton blend</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="font-heading font-bold uppercase text-xs">Easy Care</span>
                    <span className="text-xs text-muted-foreground">Machine washable</span>
                </div>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full pt-2">
                <AccordionItem value="description">
                    <AccordionTrigger className="font-bold uppercase text-sm">Description</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                        <p className="mb-4">{product.description}</p>
                        {product.details && (
                            <ul className="list-disc pl-5 space-y-1">
                                {product.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        )}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="details">
                    <AccordionTrigger className="font-bold uppercase text-sm">Details</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                        <p>{product.material}</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            {/* Size Chart Modal */}
            <SizeChartModal isOpen={showSizeChart} onOpenChange={setShowSizeChart} />
        </div>
    )
}
