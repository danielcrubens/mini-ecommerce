export interface Product {
  id: number
  title: string
  description: string
  price: number
  thumbnail: string
  images: string[]
  
  // Adicione outros campos conforme necessário
}

export interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
  thumbnail: string
}