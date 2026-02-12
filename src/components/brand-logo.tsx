import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
    className?: string;
    variant?: "light" | "dark"; // light = white logo for dark bg, dark = black logo for light bg
}

export function BrandLogo({ className, variant = "light" }: BrandLogoProps) {
    // If className has text-white or similar, infer variant. However, explicit prop is safer.
    // Let's assume default is for dark background (white logo) unless specified.

    const isLightBg = variant === "dark";
    const logoSuffix = isLightBg ? "-black" : "-white";
    const dividerColor = isLightBg ? "bg-black/20" : "bg-white/20";

    return (
        <Link href="/" className={cn("flex items-center gap-4 group h-12 w-fit", className)}>
            {/* Icon Part */}
            <div className="relative h-full w-12 transition-opacity hover:opacity-80">
                <Image
                    src={`/brand-icon${logoSuffix}.png`}
                    alt="Drakkar Active Icon"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Vertical Divider */}
            <div className={cn("h-8 w-px", dividerColor)} />

            {/* Text Part */}
            <div className="relative h-full w-32 transition-opacity hover:opacity-80">
                <Image
                    src={`/brand-text${logoSuffix}.png`}
                    alt="Drakkar Active Text"
                    fill
                    className="object-contain object-left"
                    priority
                />
            </div>
        </Link>
    );
}
