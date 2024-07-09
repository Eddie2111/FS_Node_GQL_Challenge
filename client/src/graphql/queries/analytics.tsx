import { gql } from '@apollo/client';

const getUserCount = gql`
  query GetUsersCount {
    getUserCount
  }
`;

const getProductsCount = gql`
  query GetProductCount {
    getProductCount
  }
`;

export {
    getUserCount,
    getProductsCount
}
