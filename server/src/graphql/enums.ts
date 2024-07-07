import { gql } from 'apollo-server-express';

export const enumDefs = gql`
  enum Categories {
    ELECTRONICS
    FURNITURE
    HOME_APPLIANCES
    SPORTING_GOODS
    OUTDOOR
    TOYS
  }
  enum ProductStatus {
    INTACT
    BOUGHT
    RENTED
  }
`;