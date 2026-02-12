"use client"

import { Disclosure } from "@headlessui/react"
import { Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const filters = [
    {
        id: "size",
        name: "Size",
        options: [
            { value: "xs", label: "XS" },
            { value: "s", label: "S" },
            { value: "m", label: "M" },
            { value: "l", label: "L" },
            { value: "xl", label: "XL" },
            { value: "xxl", label: "XXL" },
        ],
    },
    {
        id: "color",
        name: "Color",
        options: [
            { value: "black", label: "Black" },
            { value: "teal", label: "Teal" },
            { value: "green", label: "Dark Green" },
            { value: "white", label: "White" },
            { value: "yellow", label: "Yellow" },
        ],
    },
    {
        id: "fit",
        name: "Fit",
        options: [
            { value: "compression", label: "Compression" },
            { value: "regular", label: "Regular" },
            { value: "oversized", label: "Oversized" },
        ],
    },
    {
        id: "price",
        name: "Price",
        options: [
            { value: "0-1000", label: "Under ₹1000" },
            { value: "1000-2000", label: "₹1000 - ₹2000" },
            { value: "2000-5000", label: "₹2000+" },
        ],
    },
]

export function FilterSidebar({ className }: { className?: string }) {
    return (
        <div className={cn("hidden lg:block space-y-6", className)}>
            <div className="border-b border-border pb-4">
                <h3 className="font-heading font-bold text-lg">Filters</h3>
            </div>

            {filters.map((section) => (
                <Disclosure as="div" key={section.id} className="border-b border-border pb-6" defaultOpen={true}>
                    {({ open }) => (
                        <>
                            <h3 className="-my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-muted-foreground hover:text-foreground">
                                    <span className="font-medium text-foreground uppercase tracking-wide">{section.name}</span>
                                    <span className="ml-6 flex items-center">
                                        {open ? (
                                            <Minus className="h-4 w-4" aria-hidden="true" />
                                        ) : (
                                            <Plus className="h-4 w-4" aria-hidden="true" />
                                        )}
                                    </span>
                                </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                                <div className="space-y-4">
                                    {section.options.map((option, optionIdx) => (
                                        <div key={option.value} className="flex items-center space-x-2">
                                            <Checkbox id={`filter-${section.id}-${optionIdx}`} />
                                            <Label
                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-muted-foreground hover:text-foreground"
                                            >
                                                {option.label}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    )
}
