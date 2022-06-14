const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }, 
  postDate: {
    type: Date,
    default: Date.now
  },
  likesNum: {
    type: Number,
    min: 0,
    default: 0
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
