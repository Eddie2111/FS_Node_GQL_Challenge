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
const create_product = gql`
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

const changeStatus = gql`
  mutation changeStatus($id: String!, $status: String!){
      changeStatus(id:$id, status: $status)
      {id name updated_at category status}
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
  createOneProduct,
  getProductsByPage,
  getOneProductByID,
  updateProductByID,
  create_product,
  changeStatus,
  getIntactProducts,
  getBoughtProducts,
  getRentedProducts
};