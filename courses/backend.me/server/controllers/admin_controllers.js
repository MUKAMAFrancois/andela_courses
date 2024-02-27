//admin_controllers.js

const Blog = require('../models/Blog');
const User = require('../models/User');
const adminLayout = 'layouts/admin_main';


const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


const jwtSecret=process.env.JWT_SECRET;



/* Check if is Logged In */

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send('Not authorized');
    }
    try {
        const data = jwt.verify(token, jwtSecret);
        req.username = data.username;
        next();
    } catch (err) {
        return res.status(401).send('Not authorized');
    }
}




//homepage
const adminHomePage = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.render('admin_pages/index', { blogs: blogs,layout: adminLayout});
    } catch (err) {
        console.error(err);
        res.send('Server error');
    }
}

// register user
/* const registerUser = async (req, res) => {
    const { username, email, password, confirm_password } = req.body;

    if (password !== confirm_password) {
        return res.send('Passwords do not match');
    }

    const newUser = new User({ username, email, password });

    try {
        await newUser.save();
        res.redirect('/login');
    } catch (err) {
        res.status(500).send(err);
    }
}; */

// let's have password hashing
const registerUser = async (req, res) => {
    try{

        const { username, email, password, confirm_password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        if (password !== confirm_password) {
            return res.send('Passwords do not match');
        }
    
        const newUser = new User({ username, email, password: hashedPassword});
    
        try {
            await newUser.save();
            res.redirect('/login');
        } catch (err) {
            res.status(500).send(err);
        }

    } catch (err) {
        console.error(err);
        res.send('Server error');
    }
   
};

const registrationForm = (req, res) => {
    res.render('admin_pages/register', {layout: adminLayout});
};


// login a user

/* const loginUser = async (req, res) => {
    const { username} = req.body;

    try {
        const user = await User.findOne({username});
        if (!user) {
            return res.send('User not found');
        } else {
            res.redirect('/admin');
        } }catch (err) {
            res.status(500).send(err);
        }
    } */

// lets apply cookies and sessions



const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        try {
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(401).send('User not found');
            }
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                return res.status(401).send('Invalid password');
            } else {
                const token = jwt.sign({ username }, jwtSecret);
                res.cookie('token', token);
                res.redirect('/admin');
            }
        } catch (err) {
            res.status(500).send(err);
        }
    } catch (err) {
        console.error(err);
        res.send('Server error');
    }
}

 

// login form

const loginForm = async (req,res) =>{
        res.render('admin_pages/login', {layout: adminLayout});
}


// add ne Blog = form

const addNewBlogForm = async (req,res) =>{
    res.render('admin_pages/add_blog', {layout: adminLayout});
}


// post New Blog

const postNewBlog = async (req, res) => {
    try{
        const { title,image,description,typeOfBlog } = req.body;
        const newBlog = new Blog({ title,image,description,typeOfBlog });
        await Blog.create(newBlog);
        res.redirect('/admin');
    
    } catch (err) {
        console.error(err);
        res.send(err.message);
    }
}


// edit Existing Blog

const editBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.render('admin_pages/update_blog', { blog:blog,layout: adminLayout });
    } catch (err) {
        console.error(err);
        res.send(err.message); 
    }
}

const updateBlog= async (req, res) => {
 try {
    const { title, image, description, typeOfBlog } = req.body;
    await Blog.findByIdAndUpdate(req.params.id, { title, image, description, typeOfBlog,updatedAt: Date.now()});
    res.redirect('/admin');
} catch (err) {
    console.error(err);
    res.send(err.message);
}
}


// deleting Blog

const deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.redirect('/admin');
    } catch (err) {
        console.error(err);
        res.send(err.message);
    }
}




//admin Logout
const adminLogout = async (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
}


module.exports = {
    adminHomePage,
    registerUser,
    registrationForm,
    loginForm,
    loginUser,
    authMiddleware,
    addNewBlogForm,
    postNewBlog,
    editBlog,
    updateBlog,
    deleteBlog,
    adminLogout
};