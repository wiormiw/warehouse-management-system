import { Router } from 'express'
import { validateForm } from '../middlewares/form-validator.js'
import { createType, updateType, deleteType, detailType } from '../controllers/type.js'

export const typeRoutes: Router = Router()
typeRoutes.post('/', validateForm, createType)
typeRoutes.get('/:id', detailType);
typeRoutes.put('/:id', validateForm, updateType);
typeRoutes.delete('/:id', deleteType);