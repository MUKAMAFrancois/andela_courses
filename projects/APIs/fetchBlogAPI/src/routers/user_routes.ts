// src/routes/userRoutes.ts

import express from 'express';
import { registerUser, loginUser,
    isLoggedIn,
     getAllUsers, logoutUser,getUserBlogs } from '../controllers/userCtrl';
// import upload from '../config/multerConfig';

const router = express.Router();


router.post('/register'   /*,upload.single('image')*/,registerUser);
router.post('/login', loginUser);
router.get('/users', getAllUsers);
router.post('/logout', isLoggedIn,logoutUser);
router.get('/user/blogs', isLoggedIn, getUserBlogs);

export default router;