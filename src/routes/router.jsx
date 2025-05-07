// src/router/index.js
import { createBrowserRouter } from "react-router-dom";
import { ShopContextProvider } from "../context/shop-conext/index";
import MainLayout from "../assets/components/main-layout/index";
import Home from "../pages/home/home";
import Shop from "../pages/shop";
import Like from "../pages/like"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ShopContextProvider>
        <MainLayout />
      </ShopContextProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "like",
        element: <Like />, 
      },
    ],
  },
]);
