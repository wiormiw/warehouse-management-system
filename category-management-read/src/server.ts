import express, { Request, Response } from 'express'
import cors from 'cors'
import createError from "http-errors"

import routes from './routes/index.js'
import { config } from './config/config.js'

import { connectQueueCategoryManagement } from './messaging/consumer.js'


const app = express()

const port: number = config.port

app.use(cors())
app.use(express.json())

connectQueueCategoryManagement()

app.use('/v1/', routes)

app.use(function (_req: Request, res: Response, next: Function) {
    next(createError(404))
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
