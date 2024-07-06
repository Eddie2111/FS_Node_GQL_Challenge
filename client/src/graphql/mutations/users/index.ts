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

export { signIn, signUp, GET_USER };
