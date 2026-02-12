import { SiteHeader } from "@/components/layout/site-header"
import { ProductCard } from "@/components/product/product-card"
import { MobileFilter } from "@/components/collections/mobile-filter"
import { FilterSidebar } from "@/components/collections/filter-sidebar"
import { SortDropdown } from "@/components/collections/sort-dropdown"
import { ChevronRight, ArrowLeft, SlidersHorizontal } from "lucide-react"
import Link from "next/link"

// Mock Data Generator
const generateProducts = (category: string) => {
    return Array.from({ length: 12 }).map((_, i) => ({
        title: `${category} Item ${i + 1}`,
        price: `₹${(Math.random() * 2000 + 1000).toFixed(0)}`,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
        hoverImage: "https://images.unsplash.com/photo-1516726817505-f5ed8251b4a8?q=80&w=1000&auto=format&fit=crop",
        variants: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516726817505-f5ed8251b4a8?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556906781-9a412961d289?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=1000&auto=format&fit=crop"
        ],
        badge: i % 3 === 0 ? "Best Seller" : i % 5 === 0 ? "New" : undefined,
        colors: ["#000", "#44A5BD"],
    }))
}

interface CollectionPageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function CollectionPage(props: CollectionPageProps) {
    const params = await props.params;
    const { slug } = params;

    // Format Title
    const title = slug.replace(/-/g, ' ');
    const displayTitle = title.toUpperCase();
    const products = generateProducts(title);
    const productCount = 257; // Mock count

    return (
        <div className="min-h-screen bg-white font-body text-foreground flex flex-col">
            <SiteHeader />

            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-4 md:px-12">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                        <Link href="/" className="flex items-center hover:text-foreground font-medium underline-offset-4 hover:underline">
                            <ArrowLeft className="h-4 w-4 mr-1" />
                            Back
                        </Link>
                        <span className="text-muted-foreground/50">/</span>
                        <Link href="/" className="hover:text-foreground underline-offset-4 hover:underline">Home</Link>
                        <span className="text-muted-foreground/50">/</span>
                        <span className="capitalize text-foreground font-medium">{title}</span>
                    </div>

                    {/* Title Section */}
                    <div className="flex items-baseline gap-2 mb-8">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold italic tracking-tighter uppercase">{displayTitle}</h1>
                        <span className="text-muted-foreground font-medium text-lg">[{productCount}]</span>
                    </div>

                    {/* Filter Bar & Sub-Nav */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-t border-b border-gray-200 py-4">
                        {/* Sub-Navigation (Horizontal List) */}
                        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
                            {['All', 'Shoes', 'Clothing', 'Accessories'].map((item) => (
                                <button key={item} className="font-heading font-bold uppercase text-sm tracking-wide hover:text-primary whitespace-nowrap">
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Filter & Sort Button */}
                        <button className="flex items-center gap-2 px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">
                            Filter & Sort
                            <SlidersHorizontal className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>
            </main>

            <footer className="py-8 bg-secondary text-white text-center text-sm">
                <div className="container mx-auto px-4">
                    <p>© 2026 Drakkar Active. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
