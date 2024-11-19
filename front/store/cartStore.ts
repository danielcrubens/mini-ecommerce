import { defineStore } from 'pinia'

interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
  thumbnail: string
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[]
  }),
  
  getters: {
    totalItems(): number {
      return this.items.reduce((total, item) => total + item.quantity, 0)
    },
  },
  
  actions: {
    addToCart(product: CartItem) {
      const existingItem = this.items.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
  }
})