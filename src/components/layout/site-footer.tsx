import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"

export function SiteFooter() {
    return (
        <footer className="bg-secondary text-white pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <BrandLogo variant="light" className="h-12 w-auto" />
                        <p className="text-sm text-gray-400 max-w-xs">
                            Unleash the Warrior Within. Premium gym wear engineered for resilience and performance.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="hover:text-accent transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="hover:text-accent transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="hover:text-accent transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="hover:text-accent transition-colors">
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                        </div>
                    </div>

                    {/* Shop Column */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Shop</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/collections/men" className="hover:text-accent transition-colors">Men</Link></li>
                            <li><Link href="/collections/women" className="hover:text-accent transition-colors">Women</Link></li>
                            <li><Link href="/collections/accessories" className="hover:text-accent transition-colors">Accessories</Link></li>
                            <li><Link href="/new-arrivals" className="hover:text-accent transition-colors">New Arrivals</Link></li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Support</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-accent transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Returns & Exchanges</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Shipping Info</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Size Guide</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Stay Strong</h4>
                        <p className="text-sm text-gray-400 mb-4">
                            Join the shield wall. Sign up for exclusive drops and fitness tips.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/10 border border-white/20 rounded px-3 py-2 text-sm w-full focus:outline-none focus:border-accent text-white placeholder:text-gray-500"
                            />
                            <button
                                type="submit"
                                className="bg-accent text-secondary px-4 py-2 rounded font-bold uppercase text-xs hover:bg-white transition-colors"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2026 Drakkar Active. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
