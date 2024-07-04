import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';

import { typeDefs } from './graphql/types';
import { resolvers } from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();

  const app: any = express();
  app.use(cors({ origin: 'http://localhost:5173' }));
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
