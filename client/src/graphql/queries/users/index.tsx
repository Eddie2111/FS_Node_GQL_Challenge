import { gql } from "@apollo/client";

const GET_USER = gql`
  query GetUser {
    user @client {
      id
      name
      email
    }
  }
`;

const getOneUser = gql`
  query getOneUser($id: Int!) {
    getUserById(id: $id) {
      id
      name
      email
      Products {
        id
        name
        price
        status
        category
      }
    }
  }
`;

export {
    GET_USER,
    getOneUser,
}
