import { Router } from 'express'
import { createCategory, getCategory, updateCategory, deleteCategory } from '../controllers/category.js'

export const categoryRoutes: Router = Router()
categoryRoutes.post('/', createCategory)
categoryRoutes.get('/', getCategory);
categoryRoutes.put('/', updateCategory);
categoryRoutes.delete('/', deleteCategory);