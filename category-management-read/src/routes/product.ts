import { Router } from 'express'
import { createProduct, getProduct, updateProduct, deleteProduct} from '../controllers/product.js'

export const productRoutes: Router = Router()
productRoutes.post('/', createProduct)
productRoutes.get('/', getProduct);
productRoutes.put('/', updateProduct);
productRoutes.delete('/', deleteProduct);