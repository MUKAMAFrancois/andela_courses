const express = require('express');
const router = express.Router();

const { likeBlog, unlikeBlog } = require('../controllers/like_controllers');
const { authenticateUser } = require('../controllers/user_controllers');

/**
 * @swagger
 * tags:
 *   name: Likes
 *   description: Operations for liking and unliking blogs
 */

/**
 * @swagger
 * /blog/{blogId}/like:
 *   post:
 *     summary: Like a blog
 *     tags: [Likes]
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         description: ID of the blog to like
 *         schema:
 *           type: string
 *     responses:
 *       '201':
 *         description: Blog liked successfully
 *       '500':
 *         description: Internal server error
 */
router.post('/:blogId/like', authenticateUser, likeBlog);

/**
 * @swagger
 * /blog/{blogId}/unlike:
 *   delete:
 *     summary: Unlike a blog
 *     tags: [Likes]
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         description: ID of the blog to unlike
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Blog unliked successfully
 *       '404':
 *         description: Like not found
 *       '500':
 *         description: Internal server error
 */
router.delete('/:blogId/unlike', authenticateUser, unlikeBlog);

module.exports = router;
