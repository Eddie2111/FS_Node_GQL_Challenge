import { gql } from "@apollo/client";

const signIn = gql`
    mutation SignIn($email: String!,$password: String!){
        signIn(email: $email,password: $password)
        {id name email}
    }
`;
const signUp = gql`
  mutation SignUp($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      name
      email
      id
    }
  }
`;
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

export { signIn, signUp, GET_USER, getOneUser };
