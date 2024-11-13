/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const ProductsController = () => import('#controllers/product_controller')
router.get('/products', [ProductsController, 'index'])
router.get('/products/:id', [ProductsController, 'show'])
