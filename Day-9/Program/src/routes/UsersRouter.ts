import express from "express"
import * as userController from '../controllers/UserController'
const router = express.Router()

router.get('/all', userController.get_allUsers)

router.get('/', userController.find_oneUser)

router.post('/create', userController.create_oneUser)

router.put('/update', userController.update_oneUser)

router.delete('/delete', userController.delete_oneUser)

export default router