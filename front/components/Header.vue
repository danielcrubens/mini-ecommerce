<template>
  <header class="">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold">Mini E-commerce</NuxtLink>
      <button  class="relative">
        <span class="text-xl">🛒</span>
        <span v-if="cartStore.totalItems > 0"
              class="absolute -top-2 -right-2 bg-red-500 text-white text-xs
                     rounded-full w-5 h-5 flex items-center justify-center">
          {{ cartStore.totalItems }}
        </span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCartStore } from '~/store/cartStore'

const cartStore = useCartStore()
</script>


