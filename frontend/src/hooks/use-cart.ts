/* eslint-disable @typescript-eslint/no-unused-vars */
import { Product } from "@/types/ProductType"
import React from "react"

interface ICart extends Product {
    quantity: number
}

export const useCart = () => {
    const [cart, setCart] = React.useState<ICart[]>([])

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const item = prev.find((a) => a.quantity >= Number(a.estoque))

            if(item){
                item.quantity = Number(item.estoque ?? 1) - 1
            }

            const existingItem = prev.find((item) => item.id === product.id)
            if (existingItem) {
                return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
            }
            return [...prev, { ...product, quantity: 1 }]
        }
        )
    }

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(id)
            return
        }
        setCart((prev) => prev.map((item) => (item.id === Number(id) ? { ...item, quantity } : item)))
    }

    const clearCart = () => {
        setCart([])
    }

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((item) => item.id !== Number(id)))
    }
    
    return {
        clearCart,
        updateQuantity,
        removeFromCart,
        addToCart,
        cart,
        setCart
    }
}