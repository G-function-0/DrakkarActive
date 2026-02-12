"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartItem as CartItemType, useCart } from "@/context/cart-context"

interface CartItemProps {
    item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
    const { updateQuantity, removeItem } = useCart()

    return (
        <div className="flex gap-4 py-4 border-b border-border">
            <div className="relative h-20 w-20 overflow-hidden rounded-md bg-secondary/10 flex-shrink-0">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col flex-1 gap-1">
                <div className="flex justify-between items-start">
                    <h4 className="font-heading font-medium text-sm line-clamp-2">{item.title}</h4>
                    <button
                        onClick={() => removeItem(item.id, item.color, item.size)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                        <Trash2 className="h-4 w-4" />
                    </button>
                </div>
                <p className="text-xs text-muted-foreground">
                    {item.color} / {item.size}
                </p>
                <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6 rounded-full"
                            onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity - 1)}
                        >
                            <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6 rounded-full"
                            onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity + 1)}
                        >
                            <Plus className="h-3 w-3" />
                        </Button>
                    </div>
                    <span className="font-bold text-sm">₹{(item.price * item.quantity).toLocaleString()}</span>
                </div>
            </div>
        </div>
    )
}
