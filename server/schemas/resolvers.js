const { AuthenticationError } = require('apollo-server-express');
const {Post, User} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = { 
  Query: { 
    categories: async () => {
      return await Category.find();
    },
    posts: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Post.find(params).populate('category');
    },
    post: async (parent, { _id }) => {
      return await Post.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'posts',
          populate: 'category'
        });

        user.posts.sort((a, b) => b.postDate - a.postDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  
  Mutation: { 
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, { posts }, context) => { // appends a post to a user
      console.log(context);
      if (context.user) {
        const post = new Post({ posts });

        await User.findByIdAndUpdate(context.user._id, { $push: { posts: post } });

        return post;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }
      
      throw new AuthenticationError('Not logged in');
    },
    likePost: async (parent, { _id, likeNum }) => { // This is updating likes of the post
      const decrement = Math.abs(likeNum) * +1;

      return await Post.findByIdAndUpdate(_id, { $inc: { likeNum: increment } }, { new: true });
    },
    unlikePost: async (parent, { _id, likeNum }) => { // This is updating likes of the post 
      const decrement = Math.abs(likeNum) * -1;

      return await Post.findByIdAndUpdate(_id, { $inc: { likeNum: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};


module.exports = resolvers;