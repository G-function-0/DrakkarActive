"use client"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useCart } from "@/context/cart-context"
import { CartItem } from "./cart-item"
import { ShoppingBag } from "lucide-react"

export function CartSheet() {
    const { isOpen, toggleCart, items, subtotal } = useCart()
    const freeShippingThreshold = 5000
    const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100)

    return (
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
                <SheetHeader className="border-b border-border pb-4">
                    <SheetTitle className="font-heading flex items-center gap-2">
                        Your Cart <span className="text-muted-foreground text-sm font-normal">({items.length} items)</span>
                    </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto -mx-6 px-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 gap-4 text-muted-foreground">
                            <ShoppingBag className="h-12 w-12 opacity-20" />
                            <p>Your cart is empty.</p>
                            <Button variant="link" onClick={toggleCart}>
                                Continue Shopping
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-1">
                            {items.map((item, idx) => (
                                <CartItem key={`${item.id}-${item.color}-${item.size}-${idx}`} item={item} />
                            ))}
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <SheetFooter className="border-t border-border pt-6 sm:justify-center flex-col gap-4">
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>
                                    {subtotal >= freeShippingThreshold
                                        ? "You've unlocked Free Shipping!"
                                        : `Add ₹${(freeShippingThreshold - subtotal).toLocaleString()} for Free Shipping`
                                    }
                                </span>
                                <span className="font-bold">{progress.toFixed(0)}%</span>
                            </div>
                            <Progress value={progress} className="h-2" />
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between text-lg font-heading font-bold">
                                <span>Subtotal</span>
                                <span>₹{subtotal.toLocaleString()}</span>
                            </div>
                            <p className="text-xs text-muted-foreground text-center">
                                Shipping & taxes calculated at checkout.
                            </p>
                            <Button className="w-full h-12 text-lg font-bold tracking-wider" size="lg">
                                CHECKOUT
                            </Button>
                        </div>
                    </SheetFooter>
                )}
            </SheetContent>
        </Sheet>
    )
}
