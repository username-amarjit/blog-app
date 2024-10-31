import express from "express"
import { signup,login } from "../controller/user.controller.js"

export const userRouter = express.Router()

// define user signup route
userRouter.post('/signup', signup)

// define user login route
userRouter.post('/login', login)
