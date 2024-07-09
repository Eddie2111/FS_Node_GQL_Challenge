import { gql } from "@apollo/client";

const getProductsByPage = gql`
  query GetAllProduct($page: Int!) {
    readAllProducts(page: $page) {
      name
      description
      id
      price
      created_at
      updated_at
      user_id
      category
      status
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
      created_at
      updated_at
      status
      category
      user {
        name
        email
      }
    }
  }
`;
const getIntactProducts = gql`
  query getIntactProducts($page: Int!) {
    getIntactProducts(page: $page) {
      id
      name
      description
      price
      category
      user_id
      status
      created_at
      updated_at
      status
      user {
        name
        email
      }
    }
  }
`;
const getBoughtProducts = gql`
  query getBoughtProducts($page: Int!) {
    getBoughtProducts(page: $page) {
      id
      name
      description
      price
      category
      user_id
      status
      created_at
      updated_at
      status
      user {
        name
        email
      }
    }
  }
`;
const getRentedProducts = gql`
  query getRentedProducts($page: Int!) {
    getRentedProducts(page: $page) {
      id
      name
      description
      price
      category
      user_id
      status
      created_at
      updated_at
      status
      user {
        name
        email
      }
    }
  }
`;

export {
  getProductsByPage,
  getOneProductByID,
  getIntactProducts,
  getBoughtProducts,
  getRentedProducts,
};
