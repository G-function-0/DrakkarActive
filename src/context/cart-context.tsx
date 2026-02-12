"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export interface CartItem {
    id: string
    title: string
    price: number
    image: string
    color: string
    size: string
    quantity: number
}

interface CartContextType {
    items: CartItem[]
    addItem: (item: Omit<CartItem, "quantity">) => void
    removeItem: (id: string, color: string, size: string) => void
    updateQuantity: (id: string, color: string, size: string, quantity: number) => void
    toggleCart: () => void
    isOpen: boolean
    subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    // Load from local storage
    useEffect(() => {
        setIsMounted(true)
        const savedCart = localStorage.getItem("drakkar-cart")
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart))
            } catch (e) {
                console.error("Failed to parse cart", e)
            }
        }
    }, [])

    // Save to local storage
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("drakkar-cart", JSON.stringify(items))
        }
    }, [items, isMounted])

    const addItem = (newItem: Omit<CartItem, "quantity">) => {
        setItems((prev) => {
            const existing = prev.find(
                (item) => item.id === newItem.id && item.color === newItem.color && item.size === newItem.size
            )
            if (existing) {
                return prev.map((item) =>
                    item.id === newItem.id && item.color === newItem.color && item.size === newItem.size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...prev, { ...newItem, quantity: 1 }]
        })
        setIsOpen(true)
    }

    const removeItem = (id: string, color: string, size: string) => {
        setItems((prev) => prev.filter((item) => !(item.id === id && item.color === color && item.size === size)))
    }

    const updateQuantity = (id: string, color: string, size: string, quantity: number) => {
        if (quantity < 1) {
            removeItem(id, color, size)
            return
        }
        setItems((prev) =>
            prev.map((item) =>
                item.id === id && item.color === item.color && item.size === size
                    ? { ...item, quantity }
                    : item
            )
        )
    }

    const toggleCart = () => setIsOpen((prev) => !prev)

    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <CartContext.Provider
            value={{ items, addItem, removeItem, updateQuantity, toggleCart, isOpen, subtotal }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) throw new Error("useCart must be used within a CartProvider")
    return context
}
