const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  input bookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Query {
    user: User
  }
  type Auth {
    token: ID
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    create(username: String!, email: String!, password: String!): Auth
    updatebook(input: bookInput): User
    remove(bookId: String!): User
  }
`;

module.exports = typeDefs;