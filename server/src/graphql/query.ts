import { gql } from 'apollo-server-express';

export const queryTypeDefs = gql`
  type Query {
    # test
    hello: String

    # user queries
    getUserById(id: Int!): User
    logout(id: String!): String

    # product queries
    deleteProduct(id: String!): String
    readOneProduct(id: String!): FullProduct
    readAllProducts(page: Int!): [Product]
    getIntactProducts(page: Int!): [FullProduct]
    getBoughtProducts(page: Int!): [FullProduct]
    getRentedProducts(page: Int!): [FullProduct]
    # product analytics
    getIntactProductsCount: Int
    getBoughtProductsCount: Int
    getRentedProductsCount: Int
    getProductCount: Int # Assuming this fetches total product count
    # analytics
    getUserCount: Int
    getUsersByPage(page: Int!): [User]
  }
`;
