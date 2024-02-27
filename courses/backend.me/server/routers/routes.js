const express = require('express');
const router = express.Router();
const { homePage,getBlogById,searchBlog} = require('../controllers/controllers');


router.get('/', homePage);
router.get('/post/:id', getBlogById);
router.post('/search', searchBlog);



module.exports = router;