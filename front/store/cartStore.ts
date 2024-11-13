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
    totalAmount(): number {
      return this.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
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
    
    removeFromCart(productId: number) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index > -1) {
        this.items.splice(index, 1)
      }
    },
    
    updateQuantity(productId: number, quantity: number) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.quantity = quantity
      }
    }
  }
})