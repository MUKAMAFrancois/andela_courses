const express = require('express');
const router = express.Router();

const {
  getAllComments,
  postComment,
  updateComment,
  deleteComment
} = require('../controllers/comments_controllers');

const { authenticateUser } = require('../controllers/user_controllers');

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: CRUD operations for comments
 */

/**
 * @swagger
 * /comment/{blogId}:
 *   get:
 *     summary: Retrieve all comments for a specific blog
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         description: ID of the blog to retrieve comments for
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A list of comments for the specified blog
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
 */
router.get('/:blogId', getAllComments);

/**
 * @swagger
 * /comment/{blogId}:
 *   post:
 *     summary: Add a new comment to a blog
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         description: ID of the blog to add a comment to
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       '201':
 *         description: A new comment added to the blog successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 */
router.post('/:blogId', authenticateUser, postComment);

/**
 * @swagger
 * /comment/{blogId}/comments/{commentId}:
 *   patch:
 *     summary: Update a comment
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         description: ID of the blog containing the comment
 *         schema:
 *           type: string
 *       - in: path
 *         name: commentId
 *         required: true
 *         description: ID of the comment to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       '200':
 *         description: Comment updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 */
router.patch('/:blogId/comments/:commentId', authenticateUser, updateComment);

/**
 * @swagger
 * /comment/{blogId}/comments/{commentId}:
 *   delete:
 *     summary: Delete a comment
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         description: ID of the blog containing the comment
 *         schema:
 *           type: string
 *       - in: path
 *         name: commentId
 *         required: true
 *         description: ID of the comment to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Comment deleted successfully
 *       '404':
 *         description: Comment not found
 */
router.delete('/:blogId/comments/:commentId', authenticateUser, deleteComment);

module.exports = router;
