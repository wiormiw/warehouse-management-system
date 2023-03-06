import express, { Router, Request, Response } from 'express'

import { categoryRoutes } from './category.js'
import { typeRoutes } from "./type.js"
import { productRoutes } from "./product.js"

const routes: Router = Router()

routes.get('/', (_req: Request, res: Response) => {
    res.send(`⚡️[server]: App Works Perfectly!`)
    res.status(200).json({
        message: "⚡️[server]: App Works Perfectly!",
    });
})


routes.use('/category', categoryRoutes)
routes.use('/type', typeRoutes)
routes.use('/product', productRoutes)

export default routes