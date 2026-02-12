import { SiteHeader } from "@/components/layout/site-header"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductInfo } from "@/components/product/product-info"
import Link from "next/link"
import { getProductBySlug } from "@/lib/data"

interface ProductPageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params
    const product = getProductBySlug(slug)

    if (!product) {
        return (
            <div className="min-h-screen bg-white">
                <SiteHeader />
                <div className="container mx-auto px-4 py-32 text-center">
                    <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                    <Link href="/" className="text-primary underline">Return Home</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white text-secondary selection:bg-accent selection:text-secondary">
            <SiteHeader />

            <main className="container mx-auto px-4 md:px-8 pt-24 pb-16">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Product Gallery - Thumbnail Strip Layout */}
                    <div className="w-full lg:w-[65%]">
                        <ProductGallery images={product.images} />
                    </div>

                    {/* Product Info - Sticky Sidebar */}
                    <div className="w-full lg:w-[35%] relative">
                        <ProductInfo product={product} />
                    </div>
                </div>

                {/* You May Also Like */}
                <div className="mt-20 mb-12">
                    <h2 className="text-2xl font-heading font-bold uppercase mb-8">You may also like</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Mock Related Products */}
                        {Array.from({ length: 4 }).map((_, i) => (
                            <Link href={`/products/related-item-${i}`} key={i} className="group flex flex-col gap-2">
                                <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden rounded-md">
                                    <img
                                        src={`https://images.unsplash.com/photo-${[
                                            "1581655353564-df123a1eb820",
                                            "1583743814966-8936f5b7be1a",
                                            "1576566588028-4147f3842f27",
                                            "1556906781-9a412961d289"
                                        ][i]}?q=80&w=600&auto=format&fit=crop`}
                                        alt="Related Product"
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold uppercase text-sm">Related Item {i + 1}</h3>
                                    <span className="text-sm text-muted-foreground">₹1,499</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
