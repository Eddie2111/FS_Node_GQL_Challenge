import {
  CreateProduct,
  DeleteProduct,
  ReadAllProducts,
  ReadOneProduct,
  UpdateProduct,
  ChangeStatus,
  getBoughtProducts,
  getIntactProducts,
  getRentedProducts,
} from '../controllers/products';
import {
  logOut,
  signIn,
  signUp,
  RemoveUser,
  getUserByID
} from '../controllers/users';
import {
  getProductCount,
  getBoughtProductsCount,
  getIntactProductsCount,
  getRentedProductsCount,
} from '../controllers/analytics/products';
import { getUserCount, getUsersByPage } from '../controllers/analytics/users';
import hello from '../controllers/hello';

export const resolvers = {
  Query: {
    // test
    hello: hello,
    // user controls
    getUserById: getUserByID,
    logout: logOut,
    // product controls
    deleteProduct: DeleteProduct,
    readOneProduct: ReadOneProduct,
    readAllProducts: ReadAllProducts,
    getBoughtProducts: getBoughtProducts,
    getIntactProducts: getIntactProducts,
    getRentedProducts: getRentedProducts,
    // user analytics
    getUserCount: getUserCount,
    getUsersByPage: getUsersByPage,
    // product analytics
    getProductCount: getProductCount,
    getBoughtProductsCount: getBoughtProductsCount,
    getIntactProductsCount: getIntactProductsCount,
    getRentedProductsCount: getRentedProductsCount,
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
