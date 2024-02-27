//admin_routes.js
const express=require('express');
const routi=express.Router();
const {adminHomePage,
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
}=require('../controllers/admin_controllers');



// get admin home page

routi.get('/admin', authMiddleware,adminHomePage);

// register user

routi.post('/register', registerUser);

// get registration form
routi.get('/register', registrationForm);

// login user
routi.post('/login', loginUser);

// login form
routi.get('/login',loginForm);

// add newBlog form
routi.get('/add-blog',addNewBlogForm);


// post New Blog
routi.post('/add-blog',postNewBlog);


// edit Blog form
routi.get('/edit-blog/:id',editBlog);
// update Blog
routi.put('/update-blog/:id',updateBlog);




// deleting
routi.delete('/delete-blog/:id',deleteBlog);


//logout

routi.get('/logout',adminLogout);



module.exports=routi;