// user_routes
const express = require('express');
const router = express.Router();

const {postUser,
    getAllUsers,
    loginUser,
    getUserProfile,
    authenticateUser
}=require('../controllers/user_controllers');


// post a user
router.post('/register', postUser);

// get all users
router.get('/', getAllUsers);

// login a user
router.post('/login', loginUser);

// get user profile
router.get('/profile', authenticateUser,getUserProfile);


module.exports=router;




