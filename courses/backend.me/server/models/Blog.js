const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String, // Assuming the image will be stored as a URL
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
        type: String,
        required: false
    }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

/* const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;



const mongoose = require('mongoose');

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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming there's a User model for blog authors
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

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog; */
