import express from "express"
import { signup,login } from "../controller/user.controller"

const userRouter = express.Router()

// define user signup route
userRouter.get('/signup', signup)

// define user login route
userRouter.post('/login', login)
