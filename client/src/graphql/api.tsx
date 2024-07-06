import { persistCache } from "apollo-cache-persist";
import React, { useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const cache = new InMemoryCache();

const setupCachePersistence = async () => {
  await persistCache({
    cache,
    storage: window.localStorage,
  });
};

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});

export const GraphqlLayer = ({ children }: { children: React.ReactNode }) => {
  const [cachePersisted, setCachePersisted] = useState(false);

  useEffect(() => {
    setupCachePersistence().then(() => setCachePersisted(true));
  }, []);

  if (!cachePersisted) {
    return <div>Loading...</div>;
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
