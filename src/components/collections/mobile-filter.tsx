"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { SlidersHorizontal } from "lucide-react"
import { FilterSidebar } from "./filter-sidebar" // reusing the logic, but we need to adjust styles for mobile if needed

// We need a version of FilterSidebar that isn't hidden on mobile
// For simplicity, I'll inline a responsive wrapper or just reuse simple logic here
// But to avoid code duplication, let's make FilterSidebar accept a className that overrides hidden.

export function MobileFilter() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] overflow-y-auto">
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>Narrow down your search.</SheetDescription>
                <div className="mt-8">
                    <FilterSidebar className="block lg:block border-none" />
                </div>
            </SheetContent>
        </Sheet>
    )
}
