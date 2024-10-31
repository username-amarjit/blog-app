import express from "express"
import { auth } from "../middlewares/auth.js";
import { getAllBlogs,getMyBlogs,createNewBlog,deleteBlog } from "../controller/blog.controller.js";

export const blogrouter = express.Router()

// blogrouter.use(auth)

// define the home page route
blogrouter.get('/', getAllBlogs)

blogrouter.get('/get', getMyBlogs)

// define create blog route
blogrouter.post('/create', createNewBlog)

// define update blog route
// blogrouter.put('/blog', (req, res) => {
//     res.send('.')
// })

// define delete blog route
blogrouter.delete('/delete', deleteBlog)
