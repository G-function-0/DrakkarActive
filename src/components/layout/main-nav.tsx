"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components = [
    {
        title: "Fusion Tees",
        href: "#",
        description: "Engineered for maximum breathability and style.",
    },
    {
        title: "Performance Shorts",
        href: "#",
        description: "Lightweight, sweat-wicking mobility.",
    },
    {
        title: "Compression Gear",
        href: "#",
        description: "Support ensuring you go the extra mile.",
    },
]

export function MainNav() {
    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-sm font-heading font-bold uppercase tracking-wider hover:text-primary focus:text-primary">
                        Men
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-3 p-4">
                            <ListItem href="/collections/combat-tees" title="Combat Tees">
                                Performance Tops
                            </ListItem>
                            <ListItem href="/collections/coreliner-shorts" title="CoreLiner Shorts">
                                Hybrid Training Shorts
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-sm font-heading font-bold uppercase tracking-wider hover:text-primary focus:text-primary">
                        Women
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-3 p-4">
                            <ListItem href="/collections/dri-fit-tshirts" title="DRI - FIT TSHIRTS">
                                Moisture-wicking Tops
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-base font-heading font-bold uppercase tracking-wide leading-none">{title}</div>
                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground/80 font-medium">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
