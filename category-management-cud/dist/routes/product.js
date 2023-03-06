import { Router } from 'express';
import { validateForm } from '../middlewares/form-validator.js';
import { createProduct, updateProduct, deleteProduct, detailProduct } from '../controllers/product.js';
export const productRoutes = Router();
productRoutes.post('/', validateForm, createProduct);
productRoutes.get('/:id', detailProduct);
productRoutes.put('/:id', validateForm, updateProduct);
productRoutes.delete('/:id', deleteProduct);
//# sourceMappingURL=product.js.map