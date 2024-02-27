const mongoose = require('mongoose');

const viewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming there's a User model for users who viewed the blog
    required: true
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog', // Assuming the Blog model
    required: true
  }
});

const View = mongoose.model('View', viewSchema);

module.exports = View;
