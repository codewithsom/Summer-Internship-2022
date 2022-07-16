import 'dotenv/config'
import express, { Application, Request, Response } from 'express'
import usersRouter from './routes/UsersRouter'

const app: Application = express()
const PORT: number =  3000

app.use(express.json())
app.use('/users', usersRouter)

app.listen(PORT, (): void => {
    console.log(`Listening on ${PORT}`)
})