// like_controllers.js

const { Like } = require('../models/models');

//POST /blogs/:blogId/like`: Like a blog



exports.likeBlog = async (req, res) => {
    try {
        const { blogId } = req.params;
        const { userId } = req.body;
        const newLike = new Like({ liker: userId, whichblog: blogId });
        await newLike.save();
        res.status(201).json({ message: "Blog liked successfully", like: newLike });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// unlike a blog


exports.unlikeBlog = async (req, res) => {
    try {
        const { blogId } = req.params;
        const { userId } = req.body;
        
        // Find the like document
        const like = await Like.findOne({ liker: userId, whichblog: blogId });
        
        // If like not found, return 404
        if (!like) {
            return res.status(404).json({ message: "Like not found" });
        }
        
        // Delete the like document
        await Like.deleteOne({ _id: like._id });
        
        // Respond with success message
        res.json({ message: "Blog unliked successfully" });
    } catch (err) {
        // Handle errors
        res.status(500).json({ message: err.message });
    }
}
