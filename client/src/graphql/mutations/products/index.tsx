import { gql } from "@apollo/client";

const createOneProduct = gql`
      mutation CreateProduct(
        $name: String!
        $description: String!
        $price: Int!
        $category: Categories!
        $user_id: Int!
      ) {
        createProduct(
          name: $name
          description: $description
          price: $price
          category: $category
          user_id: $user_id
        ) {
          id
          name
          description
          price
          category
          user_id
        }
      }
    `;

const getProductsByPage = gql`
      query GetAllProduct($page: Int!) {
        readAllProducts(page: $page) {
          name
          description
          id
          price
        }
      }
    `;


const getOneProductByID = gql`
      query GetOneProduct($id: String!) {
        readOneProduct(id: $id) {
          name
          description
          id
          price
          user_id
        }
      }
    `;

const updateProductByID =  gql`
      mutation CreateProduct(
        $id: String!
        $name: String!
        $description: String!
        $price: String!
      ) {
        updateProduct(
          id: $id
          name: $name
          description: $description
          price: $price
        ) {
          id
          name
          description
          price
        }
      }
    `;

export { createOneProduct, getProductsByPage, getOneProductByID, updateProductByID };