import gql from "graphql-tag";

export const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    LOGIN(email: $email, password: $password) {
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

export const create = gql`
  mutation create($username: String!, $email: String!, $password: String!) {
    create(username: $username, email: $email, password: $password) {
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

export const updatebook = gql`
  mutation updatebook($input: bookInput!) {
    updatebook(input: $input) {
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

export const deletebook = gql`
  mutation deletebook($bookId: String!) {
    deletebook(bookId: $bookId) {
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