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
        id
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
const getOneRent = gql`
  query getOneRent($id: String!) {
    getOneRent(id: $id) {
      id
      product_id
      rentedby
      createdby
      from
      to
    }
  }
`;
const getRentedProductsByUser = gql`
  query GetProductsByUser($id: String!) {
    GetRentedProductsByUser(id: $id) {
      id
      product_id
      createdby
      rentedby
      from
      to
    }
  }
`;

export {
  getProductsByPage,
  getOneProductByID,
  getIntactProducts,
  getBoughtProducts,
  getRentedProducts,
  getOneRent,
  getRentedProductsByUser,
}