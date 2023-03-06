import { Router } from 'express';
import { validateForm } from '../middlewares/form-validator.js';
import { createCategory, updateCategory, deleteCategory, detailCategory } from '../controllers/category.js';
export const categoryRoutes = Router();
categoryRoutes.post('/', validateForm, createCategory);
categoryRoutes.get('/:id', detailCategory);
categoryRoutes.put('/:id', validateForm, updateCategory);
categoryRoutes.delete('/:id', deleteCategory);
//# sourceMappingURL=category.js.map