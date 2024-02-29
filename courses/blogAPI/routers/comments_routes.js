//comments_routes.js

const express = require('express');
const router = express.Router();

const{getAllComments,postComment,
    updateComment,
    deleteComment
}=require('../controllers/comments_controllers');


//`GET /blogs/:blogId/comments`: Get all comments for a specific blog

router.get('/:blogId/comments', getAllComments);

//`POST /blogs/:blogId/comments`: Add a new comment to a blog

router.post('/:blogId/comments', postComment);

//update a comment
router.patch('/:blogId/comments/:commentId', updateComment);

//delete a comment
router.delete('/:blogId/comments/:commentId', deleteComment);




module.exports = router;