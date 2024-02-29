//blog_routes.js

const express = require('express');
const router = express.Router();

const {getAllBlogs,
    getBlogById,
    postBlog,
    updateBlog,
    deleteBlog
}=require('../controllers/blog_controllers');

const {authenticateUser}=require('../controllers/user_controllers');



//`GET /blogs`: Get all blogs
router.get('/', getAllBlogs);
//get a specific blog by ID
router.get('/:id', getBlogById);
//create a new blog
router.post('/', authenticateUser,postBlog);

//update a blog
router.patch('/:id',updateBlog);
//delete a blog

router.delete('/:id', authenticateUser,deleteBlog);











module.exports = router;