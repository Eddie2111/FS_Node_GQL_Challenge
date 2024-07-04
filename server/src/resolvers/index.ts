import {
  CreateProduct,
  DeleteProduct,
  ReadAllProducts,
  ReadOneProduct,
  UpdateProduct,
} from '../controllers/products';
import hello from '../controllers/hello';
import { logOut, signIn, signUp, RemoveUser } from '../controllers/users';

export const resolvers = {
  Query: {
    // test
    hello: hello,
    // user controls
    logout: logOut,
    // product controls
    deleteProduct: DeleteProduct,
    readOneProduct: ReadOneProduct,
    readAllProducts: ReadAllProducts,
  },
  Mutation: {
    // user controls
    signIn: signIn,
    signUp: signUp,
    removeUser: RemoveUser,
    // product controls
    createProduct: CreateProduct,
    updateProduct: UpdateProduct,
  },
};
