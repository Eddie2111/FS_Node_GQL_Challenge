import hello from '../controllers/hello';
import { logOut, signIn, signUp } from '../controllers/users';

export const resolvers = {
  Query: {
    hello: hello,
    logout: logOut,
    deleteProduct: (_: any, { id }: { id: string }): string => `Product with ID ${id} deleted`,
    readOneProduct: (_: any, { id }: { id: string }) => {
      // Replace with actual product retrieval logic
      return {
        id,
        serial: '123',
        name: 'Product 1',
        description: 'A great product',
        price: '100',
      };
    },
    readAllProducts: (_: any, { page }: { page: string }) => {
      // Replace with actual product retrieval logic
      return [
        {
          id: '1',
          serial: '123',
          name: 'Product 1',
          description: 'A great product',
          price: '100',
        },
        {
          id: '2',
          serial: '124',
          name: 'Product 2',
          description: 'Another great product',
          price: '200',
        },
      ];
    },
  },
  Mutation: {
    signIn: signIn,
    signUp: signUp,
    createProduct: (
      _: any,
      {
        serial,
        name,
        description,
        price,
      }: { serial: string; name: string; description: string; price: string }
    ) => {
      // Replace with actual product creation logic
      return { id: '1', serial, name, description, price };
    },
    updateProduct: (
      _: any,
      {
        serial,
        name,
        description,
        price,
      }: { serial: string; name: string; description: string; price: string }
    ) => {
      // Replace with actual product update logic
      return { id: '1', serial, name, description, price };
    },
  },
};
