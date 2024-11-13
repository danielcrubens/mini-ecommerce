<template>
  <div class="border p-4 rounded-lg shadow-lg">
    <NuxtLink :to="`/product/${product.id}`">
    <img :src="product.thumbnail" :alt="product.title" class="w-full h-48 object-cover rounded-md mb-4">

    <h2 class="text-xl font-semibold mb-2">{{ product.title }}</h2>
    <p class="text-2xl font-bold text-green-600">
      R$ {{ product.price.toFixed(2) }}
    </p>
  </NuxtLink>
    <button @click="addToCart"
      class="w-full md:w-auto bg-blue-600 text-white py-2 px-8 rounded-lg hover:bg-blue-700 transition-colors mt-4">
      Adicionar ao Carrinho
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/store/cartStore'
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const addToCart = () => {
  cartStore.addToCart({
    id: props.product.id,
    title: props.product.title,
    price: props.product.price,
    thumbnail: props.product.thumbnail,
    quantity: 1
  })
}

const productQuantity = computed(() => {
  const item = cartStore.items.find(item => item.id === props.product.id)
  return item ? item.quantity : 0
})
</script>
