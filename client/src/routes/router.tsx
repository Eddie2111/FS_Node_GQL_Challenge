import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../apps/home";
import { AuthenticationForm } from "../apps/login";
import Product from '../apps/product';
import Profile from "../apps/profile";
import Test from "../apps/test";
import ProtectedRoute from '../hooks/protectedRoute';
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
  },
  {
    path: "/signin",
    element: (
      <ProtectedRoute>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthenticationForm />
      </Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: "/test",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Test />
      </Suspense>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <Profile />
        </Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: "/product",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Product />
      </Suspense>
    ),
  },
]);

// const App = React.lazy(() => import("../App.tsx"));
