const{Comment}=require('../models/models');

//GET /blogs/:blogId/comments`: Get all comments for a specific blog

exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find({whichblog:req.params.blogId});
        res.json({
            message: "All comments",
            comments
        });
    } catch (err) {
        res.json({ message: err });
    }
}


//`POST /blogs/:blogId/comments`: Add a new comment to a blog 

exports.postComment = async (req, res) => {
    try {
        const { content, commentor } = req.body;
        const newComment = new Comment({ content, commentor, whichblog:req.params.blogId });
        await newComment.save();
        res.status(201).json({
            message: "Comment created successfully",
            comment: newComment
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//PATCH /blogs/:blogId/comments/:commentId`: Update a comment


exports.updateComment = async (req, res) => {
    try {
        const updatedComment = await Comment.updateOne({ _id: req.params.commentId }, 
            { $set: { content: req.body.content } });
        res.json({
            message: "Comment updated successfully",
            updatedComment
        });
    } catch (err) {
        res.json({ message: err });
    }
}

//`DELETE /blogs/:blogId/comments/:commentId`: Delete a comment

exports.deleteComment = async (req, res) => {
    try {
        const removedComment = await Comment.remove({ _id: req.params.commentId });
        res.json({
            message: "Comment deleted successfully",
            removedComment
        });
    } catch (err) {
        res.json({ message: err });
    }
}

