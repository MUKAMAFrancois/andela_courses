
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 50
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 4
    },
    blogs: [{ // one-to-many relationship with Blog model
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog'
    }],
  });

// comment model

const commentSchema = new mongoose.Schema({
    content: {
      type: String,
      required: true
    },
    dateofcomment: {
      type: Date,
      default: Date.now
    },
    commentor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // one-to-many relationship with User model
        required: true
        },
    whichblog:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog', // one-to-many relationship with Blog Model
        required: true
        }
    });


// views Model

const viewSchema = new mongoose.Schema({
    dateofview: {
      type: Date,
      default: Date.now
    },
    viewer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // one-to-many relationship with User model
        required: true
        },
    whichblog:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog', // one-to-many relationship with Blog Model
        required: true
        }
    });

// like model


const likeSchema = new mongoose.Schema({
    dateoflike: {
      type: Date,
      default: Date.now
    },
    liker:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // one-to-many relationship with User model
        required: true
        },
    whichblog:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog', // one-to-many relationship with Blog Model
        required: true
        }
    });


  // blog model
  
  const blogSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    typeOfBlog: {
      type: String,
      required: true
    },
    author: {
    type:String,
      required: true
    },
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }],
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Like'
    }],
    views: [{ // one-to-many relationship with View model
      type: mongoose.Schema.Types.ObjectId,
      ref: 'View'
    }]
  });


  // exporting

  const User = mongoose.model('User', userSchema);
    const Blog = mongoose.model('Blog', blogSchema);
    const Comment = mongoose.model('Comment', commentSchema);
    const Like = mongoose.model('Like', likeSchema);
    const View = mongoose.model('View', viewSchema);

    module.exports = {
        User,
        Blog,
        Comment,
        Like,
        View
      };


