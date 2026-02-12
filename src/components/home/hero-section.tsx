import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Opaque overlay for text readability */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="https://videos.pexels.com/video-files/5319759/5319759-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="relative z-10 container 3xl:max-w-[1600px] flex flex-col items-center text-center gap-6 px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white tracking-widest drop-shadow-xl uppercase max-w-4xl leading-tight">
                    Strength Woven Into Every Thread
                </h1>

                <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-body">
                    Engineered for the resilient. Designed for the relentless.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90 font-bold px-8 py-6 text-lg tracking-wider transition-all duration-300 transform hover:-translate-y-1 rounded-none">
                        <Link href="/collections/men">SHOP MEN</Link>
                    </Button>
                    <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90 font-bold px-8 py-6 text-lg tracking-wider transition-all duration-300 transform hover:-translate-y-1 rounded-none">
                        <Link href="/collections/women">SHOP WOMEN</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
