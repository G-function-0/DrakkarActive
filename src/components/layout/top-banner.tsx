"use client"

import { X } from "lucide-react"
import { useState } from "react"

export function TopBanner() {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) return null

    return (
        <div className="bg-secondary text-white text-xs md:text-sm py-2 px-4 text-center font-bold tracking-wider relative z-50">
            <div className="container mx-auto relative flex justify-center items-center">
                <span>Free Shipping on Orders Over ₹5000 | Unleash the Warrior Within</span>
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-0 hover:text-accent transition-colors"
                    aria-label="Close banner"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
    )
}
