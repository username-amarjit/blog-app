import z from "zod";
import { BlogModel } from "../model/model.js"

export async function getAllBlogs(req, res) {
    const blogs = await BlogModel.find()
    if (blogs) {
        res.json({
            msg: "fetched blogs Successfully.",
            data: blogs
        })
    } else {
        res.json({
            msg: "No blogs Found."
        })
    }
}

export async function getMyBlogs(req, res) {
    const blogs = await BlogModel.find({creatorId:req.userID})
    if (blogs) {
        res.json({
            msg: "fetched blogs Successfully.",
            data: blogs
        })
    } else {
        res.json({
            msg: "No blogs Found."
        })
    }
}

export async function createNewBlog(req, res) {

    const createBlogBody = z.object({
        title : z.string().min(3).max(100),
        desc : z.string().min(10).max(1000),
        imageURL : z.string().min(3).max(200).nullable(),
    })

    const decoded = createBlogBody.safeParse(req.body)
    if(!decoded.success){
        res.json({
            msg:"error while parsing data",
            err:decoded.error
        })
    }

    const {title,desc,imageURL} = req.body

    const blogs = await BlogModel.create({
        title,desc,imageURL,
        creatorId:req.userID})
    if (blogs) {
        res.json({
            msg: "Created blog Successfully.",
            data: blogs
        })
    } else {
        res.json({
            msg: "Error while creating the blog."
        })
    }
}

export async function deleteBlog(req, res) {
    const blogID = req.query.blog_id
    const deletedBlog = await BlogModel.findByIdAndDelete(blogID);

}