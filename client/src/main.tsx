import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import Layout from "./components/layouts";
import { GraphqlLayer } from "./graphql/api";
import { router } from "./routes/router";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <GraphqlLayer>
        <RouterProvider router={router} />
      </GraphqlLayer>
    </Layout>
  </React.StrictMode>
);
