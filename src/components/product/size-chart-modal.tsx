"use client"

import * as React from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

interface SizeChartModalProps {
    isOpen: boolean
    onOpenChange: (open: boolean) => void
}

export function SizeChartModal({ isOpen, onOpenChange }: SizeChartModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl bg-white p-0 overflow-hidden text-center sm:rounded-xl">
                <div className="p-8 md:p-12 flex flex-col items-center justify-center">
                    <DialogHeader>
                        <DialogTitle className="sr-only">Size Chart</DialogTitle>
                    </DialogHeader>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl md:text-6xl font-heading font-normal tracking-tight text-secondary">
                            SIZE <br />
                            <span className="font-serif italic">CHART</span>
                        </h2>
                    </div>

                    {/* Table */}
                    <div className="w-full max-w-lg border border-gray-200">
                        <div className="grid grid-cols-3 bg-[#f0f0f0] border-b border-gray-200 text-xs font-bold uppercase tracking-wider py-3">
                            <div>Size "</div>
                            <div>Chest</div>
                            <div>Front Length</div>
                        </div>
                        {/* Rows */}
                        {[
                            { size: "S", chest: "35", length: "24" },
                            { size: "M", chest: "37", length: "25" },
                            { size: "L", chest: "39", length: "26" },
                            { size: "XL", chest: "41", length: "27" },
                            { size: "XXL", chest: "42", length: "28" },
                        ].map((row, i) => (
                            <div key={row.size} className="grid grid-cols-3 text-sm py-3 border-b border-gray-100 last:border-0 font-medium text-secondary">
                                <div className="font-bold">{row.size}</div>
                                <div>{row.chest}</div>
                                <div>{row.length}</div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-8 text-[10px] font-bold tracking-widest uppercase text-secondary/60">
                        @DRAKKAR_ACTIVE
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
