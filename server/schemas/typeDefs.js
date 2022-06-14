const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Post {
    _id: ID
    title: String
    description: String
    image: String
    likesNum: Int
    category: Category
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    posts: [Post]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    posts(category: ID, name: String): [Post]
    post(_id: ID!): Post
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addPost(posts: [ID]!): Post
    likePost(_id: ID!, likesNum: Int!): Post
    unlikePost(_id: ID!, likesNum: Int!): Post
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
