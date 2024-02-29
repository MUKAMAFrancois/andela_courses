// user_controllers.js
const {User}=require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




//1. post a user




exports.postUser = async (req, res) => {
    try {
        const { email, password, confirm_password, username } = req.body;

        // Check if the passwords match
        if (password !== confirm_password) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        // Check if the email is already in use
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email address already in use" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ email, password: hashedPassword, username });

        // Save the user to the database
        await newUser.save();

        // Return success message
        res.status(201).json({
            message: "User created successfully",
            user: newUser
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



// get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
};


// Login User


exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}



// authenticate user
exports.authenticateUser = (req, res, next) => {
    const bearerHeader = req.header('Authorization');
    // Check if the Authorization header exists
    if (typeof bearerHeader !== 'undefined') {
        // Extract the token from the Authorization header
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        // Set the token in the request object
        req.token = bearerToken;
        // Move to the next middleware or route handler
        next();
    } else {
        // If the Authorization header is missing, send a 401 Unauthorized status
        res.status(401).json({ message: "Unauthorized: No token provided" });
    }
}




// get user profile


exports.getUserProfile = async (req, res) => {
    try {
        // Retrieve the user ID from the request object (assuming it's attached during authentication)
        const userId = req.userId;
        // Query the database to fetch the user profile using the user ID
        const userProfile = await User.findById(userId);
        // Check if the user profile exists
        if (!userProfile) {
            return res.status(404).json({ message: "User profile not found" });
        }
        // Return the user profile data in the response
        res.status(200).json({ userProfile });
    } catch (err) {
        // Handle any errors
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

