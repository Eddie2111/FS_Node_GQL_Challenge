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


export { signIn, signUp };
