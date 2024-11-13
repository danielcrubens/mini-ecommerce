<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Produtos</h1>
    
    <div v-if="loading" class="text-center">
      <p>Carregando...</p>
    </div>
    
    <div v-else-if="error" class="text-red-500 text-center">
      {{ error }}
    </div>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProducts } from '~/composables/useProducts'
import ProductCard from '~/components/ProductCard.vue'

const { products, loading, error, fetchProducts } = useProducts()

// Carregar produtos quando o componente for montado
onMounted(async () => {
  await fetchProducts()
})
</script>
