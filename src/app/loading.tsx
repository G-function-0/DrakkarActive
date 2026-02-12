"use client"

import Image from "next/image"

export default function Loading() {
    return (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-background">
            <div className="relative w-24 h-24 animate-pulse opacity-70">
                {/* Light Mode Logo */}
                <div className="absolute inset-0 dark:hidden">
                    <Image
                        src="/brand-icon-black.png"
                        alt="Loading..."
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                {/* Dark Mode Logo */}
                <div className="absolute inset-0 hidden dark:block">
                    <Image
                        src="/brand-icon-white.png"
                        alt="Loading..."
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
