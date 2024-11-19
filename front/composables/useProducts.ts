import { ref } from 'vue'
import type { Product } from '~/types'

interface ProductResponse {
  products: Product[]
}

export const useProducts = () => {
  const products = ref<Product[]>([])
  const product = ref<Product | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchProducts = async () => {
    loading.value = true
    error.value = null
    console.log('Iniciando fetchProducts')

    try {
      const data = await $fetch<ProductResponse>(`${useRuntimeConfig().public.apiBase}/products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      console.log('Dados recebidos:', data)

      if (data) {
        products.value = data.products
        console.log('Produtos carregados:', products.value)
      }
    } catch (err) {
      console.error('Erro ao buscar produtos:', err)
      error.value = 'Erro ao carregar produtos'
    } finally {
      loading.value = false
    }
  }

  const fetchProductById = async (id: number) => {
    loading.value = true
    error.value = null
    console.log(`Iniciando fetchProductById com ID: ${id}`)

    try {
      const data = await $fetch<Product>(`${useRuntimeConfig().public.apiBase}/products/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      console.log('Dados do produto recebidos:', data)

      if (data) {
        product.value = data
        console.log('Produto carregado:', product.value)
      }
    } catch (err) {
      console.error('Erro ao buscar produto:', err)
      error.value = 'Erro ao carregar produto'
    } finally {
      loading.value = false
    }
  }

  return {
    products,
    product,
    loading,
    error,
    fetchProducts,
    fetchProductById
  }
}
