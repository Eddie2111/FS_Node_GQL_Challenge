import { resolvers } from './resolvers';
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from './graphql/types';

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();

  const app: any = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
