import express from "express"
import { auth } from "../middlewares/auth";
import { getAllBlogs,getMyBlogs,createNewBlog,deleteBlog } from "../controller/blog.controller";

const blogrouter = express.Router()

blogrouter.use(auth)

// define the home page route
blogrouter.get('/', getAllBlogs)

blogrouter.get('/blog', getMyBlogs)

// define create blog route
blogrouter.post('/blog', createNewBlog)

// define update blog route
// blogrouter.put('/blog', (req, res) => {
//     res.send('.')
// })

// define delete blog route
blogrouter.delete('/blog', deleteBlog)
