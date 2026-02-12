import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

export function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background border-r border-border">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetHeader className="border-b border-border pb-4 mb-4">
                    <SheetTitle>
                        <BrandLogo variant="dark" className="mx-auto" />
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                    <nav className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <span className="px-4 py-2 text-lg font-heading font-medium text-foreground">
                                MEN
                            </span>
                            <div className="flex flex-col gap-2 pl-8 text-muted-foreground">
                                <Link href="/collections/combat-tees" className="hover:text-primary transition-colors">Combat Tees</Link>
                                <Link href="/collections/coreliner-shorts" className="hover:text-primary transition-colors">CoreLiner Shorts</Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="px-4 py-2 text-lg font-heading font-medium text-foreground">
                                WOMEN
                            </span>
                            <div className="flex flex-col gap-2 pl-8 text-muted-foreground">
                                <Link href="/collections/dri-fit-tshirts" className="hover:text-primary transition-colors">DRI - FIT TSHIRTS</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
    );
}
