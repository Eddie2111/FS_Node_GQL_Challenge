import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import Layout from "./components/layouts";
import { AuthProvider } from "./contexts/AuthContext";
import { GraphqlLayer } from "./graphql/api";
import { router } from "./routes/router";
import { Toaster } from "sonner";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GraphqlLayer>
      <AuthProvider>
        <Layout>
          <Toaster />
          <RouterProvider router={router} />
        </Layout>
      </AuthProvider>
    </GraphqlLayer>
  </React.StrictMode>
);
