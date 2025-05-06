import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Shop from "../pages/shop";
import Like from "../pages/like";
import MainLayout from "../assets/components/main-layout/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/like",
        element: <Like />,
      },
    ],
  },
]);
