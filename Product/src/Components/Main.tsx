import React from "react";
import ReactDOM from "reactDom";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import EditProducts from "../pages/EditProduct";
import Favorites from "../pages/Favorites"
import NotFound from "../pages/NotFound";
import { Layout } from "./Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Favorites />,
      },
      // {
      //   path: "/users/:id",
      //   element: <UserDetail />,
      // },
      {
        path: "/AddProduct",
        element: <AddProduct />,
      },
      // {
      //   path: "/account",
      //   element,
      // },
    ],
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/signup",
    element: <div>Sign Up</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
