import express, { Express, Request, Response } from "express"
import cors from 'cors'
import Redis from 'ioredis'


const app: Express = express()

const PORT: number = 8000

const client = new Redis({
	host: "redis-server",
  	port: 6379,
})

app.use(cors())
app.listen(PORT, () => {
	console.log(`Listening on PORT :- ${PORT}`)
})

app.get('/', async (req: Request, res: Response) => {

	let visit: string | null = await client.get("visits")

	if (visit) {
		let numVisit: number = +visit
		res.send(visit)
		numVisit++
		await client.set('visits', numVisit)
		console.log('final visits ', await client.get('visits'));

	}
	else {
		await client.set("visits", 1)
		res.send("0")
	}





})


/*

import { createClient } from 'redis'



const client = createClient({
	host: "redis-server",
  	port: 6379,
})
async function init() {
	await client.connect()
}
init()



*/