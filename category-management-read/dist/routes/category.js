import { Router } from 'express';
import { createCategory, getCategory, updateCategory, deleteCategory } from '../controllers/category.js';
export const categoryRoutes = Router();
categoryRoutes.post('/', createCategory);
categoryRoutes.get('/', getCategory);
categoryRoutes.put('/', updateCategory);
categoryRoutes.delete('/', deleteCategory);
//# sourceMappingURL=category.js.map