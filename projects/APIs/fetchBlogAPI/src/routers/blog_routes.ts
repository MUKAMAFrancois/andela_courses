import express from 'express';
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  editBlog,
  deleteBlog
} from '../controllers/blogCtrl';
import { isLoggedIn } from '../controllers/userCtrl';

const router = express.Router();

// Route to create a new blog
router.post('/blog', isLoggedIn,createBlog);

// Route to get all blogs
router.get('/blogs', getAllBlogs);

// Route to get a blog by ID
router.get('/blog/:id', getBlogById);

// Route to edit a blog
router.patch('/blog/:blogId', isLoggedIn,editBlog);

// Route to delete a blog
router.delete('/blog/:blogId', isLoggedIn,deleteBlog);

export default router;