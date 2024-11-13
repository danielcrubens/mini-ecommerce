<template>
  <div class="grid md:grid-cols-2 gap-8">
    <div class="space-y-4">
      <img :src="product.thumbnail" :alt="product.title" 
           class="w-full h-96 object-cover rounded-lg">
      <div class="grid grid-cols-4 gap-2">
        <img v-for="(image, index) in product.images" 
             :key="index" 
             :src="image" 
             :alt="`${product.title} - ${index + 1}`"
             class="w-full h-24 object-cover rounded-lg cursor-pointer">
      </div>
    </div>
    
    <div class="space-y-4">
      <h1 class="text-3xl font-bold">{{ product.title }}</h1>
      <p class="text-gray-600">{{ product.description }}</p>
      <p class="font-bold">Categoria: <span class="text-gray-600 font-normal">  {{ product.category }} </span> </p>
      <p class="text-2xl font-bold text-green-600">
        R$ {{ product.price.toFixed(2) }}
      </p>
      <button @click="addToCart" 
              class="w-full md:w-auto bg-blue-600 text-white py-2 px-8 rounded-lg hover:bg-blue-700 transition-colors">
        Adicionar ao Carrinho
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/store/cartStore'

defineProps<{
  product: {
    id: number
    title: string
    description: string
    price: number
    thumbnail: string
    images: string[]
    category: string
  }
}>()

const cartStore = useCartStore()

const addToCart = () => {
  cartStore.addToCart({
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
    quantity: 1
  })
}
</script>
