import { Router } from 'express'
import { createType, getType, updateType, deleteType } from '../controllers/type.js'

export const typeRoutes: Router = Router()
typeRoutes.post('/', createType)
typeRoutes.get('/', getType);
typeRoutes.put('/', updateType);
typeRoutes.delete('/', deleteType);