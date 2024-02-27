import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Signup from "./pages/auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth/signup",
    element: <Signup />
  }
]);

const Router = () => {
    return (
        <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    )
}

export default Router