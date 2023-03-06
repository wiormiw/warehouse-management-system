import express, { Request, Response } from 'express'
// import connectBroker from './config/broker/broker-connection.js'
import cors from 'cors'
import createError from "http-errors"

import routes from './routes/index.js'
import { config } from './config/config.js'


const app = express()

const jsonParser = express.json()

const port: number = config.port

app.use(cors())

app.use('/v1/', jsonParser, routes)

app.use(function (_req: Request, res: Response, next: Function) {
    next(createError(404))
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
