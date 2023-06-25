import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/home";
import Navbar from "./components/Navbar/navbar";
import { CartContextProvidor } from "./context/CartContext";
import Cart from "./pages/Cart/cart";
import { ProductContextProvidor } from "./context/ProductsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ProductContextProvidor>
      <CartContextProvidor>
        <RouterProvider router={router} />
      </CartContextProvidor>
    </ProductContextProvidor>
  </React.StrictMode>
);

reportWebVitals();
