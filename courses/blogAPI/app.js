require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// routes
const usersRoutes = require('./routers/user_routes');
const blogsRoutes = require('./routers/blog_routes');
const commentsRoutes=require('./routers/comments_routes');

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;
const connectionString = process.env.CONNECTION_STRING;




// Use routes
app.use('/users', usersRoutes);
app.use('/blogs', blogsRoutes);
app.use('/comment',commentsRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});

mongoose.connect(connectionString).then(() => {
    console.log('The Database is now connected');
}).catch((err) => {
    console.log(err);
});
