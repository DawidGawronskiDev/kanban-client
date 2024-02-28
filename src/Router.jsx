import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
]);

const Router = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default Router;
