export interface Product {
    id: string
    slug: string
    title: string
    price: number
    category: string
    subCategory: string
    badge?: string
    rating?: number
    reviewCount?: number
    colors: { name: string; value: string; image: string }[]
    sizes: string[]
    description: string
    details: string[]
    material: string
    shipping: string
    images: string[]
}

export const sampleProducts: Product[] = [
    {
        id: "prod_1",
        slug: "combat-tees-item-1",
        title: "Drakkar Performance Tech Tee",
        price: 999,
        category: "Men",
        subCategory: "Training",
        badge: "Best Seller",
        rating: 4.8,
        reviewCount: 124,
        colors: [
            { name: "Slate Grey", value: "#334155", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop" },
            { name: "Midnight Black", value: "#000000", image: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=1000&auto=format&fit=crop" },
        ],
        sizes: ["XS", "S", "M", "L", "XL", "2XL"],
        description: "Engineered for peak performance. The Drakkar Performance Tech Tee features our signature moisture-wicking fabric that keeps you cool when the heat turns up. A tailored fit ensures zero distractions during your most intense workouts.",
        details: [
            "Athletic fit",
            "Moisture-wicking technology",
            "4-way stretch fabric",
            "Reinforced seams",
            "Reflective logo details"
        ],
        material: "90% Polyester, 10% Spandex",
        shipping: "Free standard shipping on orders over ₹2000. Returns accepted within 30 days.",
        images: [
            "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556906781-9a412961d289?q=80&w=1000&auto=format&fit=crop",
        ]
    },
    {
        id: "prod_2",
        slug: "related-item-1",
        title: "Stealth Training shorts",
        price: 1299,
        category: "Men",
        subCategory: "Shorts",
        rating: 4.6,
        reviewCount: 45,
        colors: [
            { name: "Black", value: "#000000", image: "https://images.unsplash.com/photo-1516726817505-f5ed8251b4a8?q=80&w=1000&auto=format&fit=crop" }
        ],
        sizes: ["S", "M", "L", "XL"],
        description: "Lightweight and breathable shorts designed for high-intensity training.",
        details: ["Quick-dry fabric", "Zipper pockets"],
        material: "100% Polyester",
        shipping: "Free shipping > ₹2000",
        images: ["https://images.unsplash.com/photo-1516726817505-f5ed8251b4a8?q=80&w=1000&auto=format&fit=crop"]
    }
]

export function getProductBySlug(slug: string): Product | undefined {
    // In a real app, this would query a DB. 
    // For now, we return the first product for ANY slug to keep the demo working seamlessly.
    // Logic: If exact match found, return it. Else return default (prod_1).
    return sampleProducts.find(p => p.slug === slug) || sampleProducts[0]
}
