import {
  CreateProduct,
  DeleteProduct,
  ReadAllProducts,
  ReadOneProduct,
  UpdateProduct,
  ChangeStatus
} from '../controllers/products';
import {
  logOut,
  signIn,
  signUp,
  RemoveUser,
  getUserID
} from '../controllers/users';
import hello from '../controllers/hello';

export const resolvers = {
  Query: {
    // test
    hello: hello,
    // user controls
    getUserById: getUserID,
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
    changeStatus: ChangeStatus,
  },
};
