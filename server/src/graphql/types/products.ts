import { gql } from 'apollo-server-express';

export const productTypeDefs = gql`
  type UserType {
    id: Int!
    name: String
    email: String
  }
  type Product {
    serial: Int
    id: String
    name: String
    description: String
    price: Int
    category: Categories
    status: ProductStatus
    user_id: Int
    created_at: String
    updated_at: String
  }
  type FullProduct {
    serial: Int
    id: String
    name: String
    description: String
    price: Int
    category: Categories
    status: ProductStatus
    user_id: Int
    created_at: String
    updated_at: String
    user: UserType
  }
`;
