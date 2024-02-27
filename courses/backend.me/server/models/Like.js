const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming there's a User model for users who liked the blog
    required: true
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog', // Assuming the Blog model
    required: true
  }
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
