import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation LOGIN_USER($email: String!, $password: String!) {
    LOGIN_USER(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          title
          description
          authors
          image
          link
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation ADD_USER($username: String!, $email: String!, $password: String!) {
    ADD_USER(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          title
          description
          authors
          image
          link
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation SAVE_BOOK($input: bookInput!) {
    SAVE_BOOK(input: $input) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation REMOVE_BOOK($bookId: String!) {
    REMOVE_BOOK(bookId: $bookId) {
    _id
    username
    email
    bookCount
    savedBooks {
    bookId
    authors
    image
    description
    title
    link
    }
    }
  }
`;