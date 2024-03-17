const {Blog} =require('../models/models');


//`GET /blogs`: Get all blogs

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json({
            message: "All blogs",
            blogs
        });
    } catch (err) {
        res.json({ message: err });
    }
}

// `GET /blogs/:id`: Get a specific blog by ID

exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.json({
            message: "Blog found",
            blog
        });
    } catch (err) {
        res.json({ message: err });
    }
}

// POST /blogs`: Create a new blog

exports.postBlog = async (req, res) => {
    try {
        const { title, image, description, typeOfBlog, author } = req.body;
        const newBlog = new Blog({ title, image, description, typeOfBlog, author });
        await newBlog.save();
        res.status(201).json({
            message: "Blog created successfully",
            blog: newBlog
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// PATCH /blogs/:id`: Update a blog

exports.updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        const { title, image, description, typeOfBlog, author } = req.body;
        blog.title = title;
        blog.image = image;
        blog.description = description;
        blog.typeOfBlog = typeOfBlog;
        blog.author = author;
        await blog.save();
        res.json({
            message: "Blog updated successfully",
            blog
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// DELETE /blogs/:id`: Delete a blog

exports.deleteBlog = async (req, res) => {
    try {
        // Find the blog document by ID
        const blog = await Blog.findById(req.params.id);
        
        // If blog not found, return 404
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        
        // Delete the blog document
        await Blog.deleteOne({ _id: blog._id });
        
        // Respond with success message
        res.json({ message: "Blog deleted successfully" });
    } catch (err) {
        // Handle errors
        res.status(500).json({ message: err.message });
    }
}

