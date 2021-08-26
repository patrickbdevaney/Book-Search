import gql from "graphql-tag";

export const user  = gql`
    {
        user {
         _id
        username
        email
        bookCount
        savedBooks {
         bookId
         authors
         title
         description
         image
         link
            }
        }
    }
`;