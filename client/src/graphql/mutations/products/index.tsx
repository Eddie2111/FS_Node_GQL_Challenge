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


const updateProductByID =  gql`
  mutation CreateProduct(
    $id: String!
    $name: String!
    $description: String!
    $price: Int!
    $category: Categories
    $status: ProductStatus
  ) {
    updateProduct(
      id: $id
      name: $name
      description: $description
      price: $price
      category: $category
      status: $status
    ) {
      id
      name
      description
      price
      category
      status
    }
  }
`;

const changeStatus = gql`
  mutation changeStatus($id: String!, $status: String!){
      changeStatus(id:$id, status: $status)
      {id name updated_at category status}
  }
`;

const createOneRent = gql`
  mutation CreateProductRent(
    $product_id: String
    $createdby: Int
    $rentedby: Int
    $from: String
    $to: String
  ) {
    rentProduct(
      product_id: $product_id
      createdby: $createdby
      rentedby: $rentedby
      from: $from
      to: $to
    ) {
      id
      product_id
      from
      to
    }
  }
`;
// search by product id and not rent id

const deleteProduct = gql`
  mutation DeleteProduct($id: String!) {
    deleteProduct(id: $id)
  }
`;


export {
  createOneProduct,
  updateProductByID,
  changeStatus,
  createOneRent,
  deleteProduct,
};