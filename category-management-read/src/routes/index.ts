import express, { Router, Request, Response } from 'express'

import { categoryRoutes } from './category.js'
import { typeRoutes } from "./type.js"
import { productRoutes } from "./product.js"

const routes: Router = Router()
const jsonParser = express.json()

routes.get('/', (_req: Request, res: Response) => {
    res.send(`⚡️[server]: App Works Perfectly!`)
    res.status(200).json({
        message: "⚡️[server]: App Works Perfectly!",
    });
})


routes.use('/categories', jsonParser, categoryRoutes)
routes.use('/types', jsonParser, typeRoutes)
routes.use('/products', jsonParser, productRoutes)

export default routes