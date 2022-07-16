import { Request, Response } from "express"
import fs from "node:fs"
import User from "../user"
import ErrnoException = NodeJS.ErrnoException


export const get_allUsers = async (req: Request, res: Response): Promise<void> => {
	await fs.readFile("data.json", "utf-8", (err: ErrnoException | null, data: string) => {
		const fileContents: Array<User> = JSON.parse(data)
		
		res.json(fileContents)
	})
	
}

export const find_oneUser = async (req: Request, res: Response): Promise<void> => {
	if(Object.keys(req.query).length === 0) {
		res.redirect('/users/all')
	}
	else {
		await fs.readFile('data.json', 'utf-8', (err: ErrnoException | null, data: string) => {
			const fileContents: Array<User> = JSON.parse(data)
			
			fileContents.forEach((item: User) => {
				if(item.email === req.query.email) {
					res.json(item)
				}
				else {
					res.send("<h1> User Not Found! </h1>")
				}
			})
		})
	}
}

export const create_oneUser = async (req: Request, res: Response): Promise<void> => {
	const newUser: User = {
		"name": req.body.name,
		"age": req.body.age,
		"email": req.body.email,
		"gender": req.body.gender
	}
	
	await fs.readFile('data.json', 'utf-8',  (err: ErrnoException | null, data: string) => {
		const fileContents: Array<User> = JSON.parse(data)
		fileContents.push(newUser)
		fs.writeFile("data.json", JSON.stringify(fileContents), (err: ErrnoException | null) => {
			if(err) {
				res.send('Error Writing File')
			}
			else {
				res.send('Data Added Successfully')
			}
		
		})
	})
}

export const update_oneUser = async (req: Request, res: Response): Promise<void> => {
	if(Object.keys(req.query).length === 0) {
		res.redirect('/users/all')
	}
	else {
		const oldEmail: any = req.query.email
		const newEmail: string = req.body.email
		
		await fs.readFile('data.json', 'utf-8', (err: ErrnoException | null, data: string) => {
			const fileContents: Array<User> = JSON.parse(data)
			fileContents.forEach((item: User) => {
				if(item.email === oldEmail) {
					item.email = newEmail
				}
			})
			fs.writeFile("data.json", JSON.stringify(fileContents), (err: ErrnoException | null) => {
				if(!err) {
					res.send('Email Updated Successfully!')
				}
			})
		})
	}
}

export const delete_oneUser = async (req: Request, res: Response): Promise<void> => {
	if(Object.keys(req.query).length === 0) {
		res.redirect('/users/all')
	}
	else {
		const email: any = req.query.email
		await fs.readFile('data.json', 'utf-8', (err: ErrnoException | null, data: string) => {
			const fileContents: Array<User> = JSON.parse(data)
			const newFileContents: Array<User> = fileContents.filter((item: User) => item.email !== email)
			fs.writeFile('data.json', JSON.stringify(newFileContents), (err: ErrnoException | null) => {
				if(!err) {
					res.send("User removed successfully")
				}
				else {
					res.send("Error writing to file")
				}
			})
		})
	}
}