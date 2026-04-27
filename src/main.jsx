import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Layout/Root";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Blog from "./Page/Blog/Blog";
import ShopNow from "./Page/ShopNow/ShopNow";
import Contacts from "./Page/Contact/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "/blog", element: <Blog /> },
      { path: "/shop", element: <ShopNow /> },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
