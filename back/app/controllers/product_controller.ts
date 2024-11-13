import axios from 'axios'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class ProductController {
  public async index({ response }: HttpContextContract) {
    const { data: products } = await axios.get('https://dummyjson.com/products')
    response.ok(products)
  }

  public async show({ params, response }: HttpContextContract) {
    const { id } = params
    const { data: product } = await axios.get(`https://dummyjson.com/products/${id}`)
    response.ok(product)
  }
}
