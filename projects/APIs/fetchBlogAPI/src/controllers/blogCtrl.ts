import { Request, Response,NextFunction} from 'express';
import Blog from '../models/Blog';
import User from '../models/User';
import {CustomRequest}  from './userCtrl';


// create new Blog


export const createBlog = async (req: Request, res: Response) => {
    try{
        const {title,description,category,image}=req.body;
        const customReq=req as CustomRequest;
        const newBlog = new Blog({
            title,
            description,
            image,
            author: customReq.id,
            category: category
        });

        const author = await User.findById(customReq.id);

        if (!author) {
            return res.status(404).json({ message: 'User not found' });
        }

        author.blogs.push(newBlog._id);
        await author.save();
        await newBlog.save();
        res.status(201).json({message:'Blog created successfully',newBlog});
    } catch(error:any){
        res.status(500).json({message:error.message});
    }
}


// get all blogs

export const getAllBlogs = async (req: Request, res: Response) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({
            allBlogs:"All Blogs", 
            blogs });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}



export const getBlogById = async (req: Request, res: Response) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ blog });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}



// edit blog

export const editBlog = async(req: Request, res: Response) => {
    try{
        const blog = await Blog.findByIdAndUpdate(req.params.blogId);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // update the blog

        const data ={
            title:req.body.title,
            description:req.body.description,
            image:req.body.image,
            category:req.body.category
        }

        await Blog.updateOne({ _id: req.params.blogId }, data);
        await blog.save();

        res.status(200).json({ message: 'Blog updated successfully', blog });

    } catch(error:any){
        res.status(500).json({message:error.message});
    }
}


// delete blog

export const deleteBlog = async(req: Request, res: Response) => {
    try{
        const blog = await Blog.findByIdAndDelete(req.params.blogId);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog deleted successfully'});
    } catch(error:any){
        res.status(500).json({message:error.message});
    }
}