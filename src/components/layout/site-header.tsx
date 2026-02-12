"use client"

import * as React from "react"
import { BrandLogo } from "@/components/brand-logo"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Search, ShoppingBag, User } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const { toggleCart, items } = useCart()
    const pathname = usePathname()
    const isHome = pathname === "/"

    // Header logic:
    // - Scrolled: Solid Dark, White Text
    // - Home (Top): Transparent, White Text
    // - Other (Top): Transparent, Dark Text
    const isDarkText = !isScrolled && !isHome
    const textColor = isDarkText ? "text-secondary" : "text-white"
    const logoVariant = isDarkText ? "dark" : "light"
    const bgClass = isScrolled ? "bg-secondary py-2 shadow-md" : "bg-transparent py-4"

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className="fixed top-0 left-0 w-full z-50 group hover:bg-primary transition-colors duration-300"
        >
            <div className={`w-full transition-all duration-300 ${bgClass} ${textColor}`}>
                <div className={`container mx-auto px-4 md:px-8 flex h-16 items-center justify-between ${textColor} transition-colors duration-300`}>
                    <div className="flex items-center gap-4">
                        <MobileNav />
                        <div className="hidden md:flex">
                            {/* Optional: Left side links or just spacing */}
                        </div>
                        <MainNav />
                    </div>

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <BrandLogo variant={logoVariant} className="h-10 md:h-12 w-auto" />
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className={`hidden sm:flex hover:text-primary hover:bg-black/5 ${textColor}`}>
                            <Search className="h-5 w-5" />
                            <span className="sr-only">Search</span>
                        </Button>
                        <Button variant="ghost" size="icon" className={`hover:text-primary hover:bg-black/5 ${textColor}`}>
                            <User className="h-5 w-5" />
                            <span className="sr-only">Account</span>
                        </Button>
                        <Button variant="ghost" size="icon" className={`relative hover:text-primary hover:bg-black/5 ${textColor}`} onClick={toggleCart}>
                            <ShoppingBag className="h-5 w-5" />
                            {items.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-accent text-secondary text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                                    {items.length}
                                </span>
                            )}
                            <span className="sr-only">Cart</span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
