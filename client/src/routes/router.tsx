import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../App";

// const App = React.lazy(() => import("../App.tsx"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
  },
]);
