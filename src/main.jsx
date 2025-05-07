import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { router } from './routes/router';
import { RouterProvider } from 'react-router-dom';
import { ShopContextProvider } from './context/shop-conext';
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />  
      <Toaster position="top-right" reverseOrder={false} />
    </ShopContextProvider>
  </StrictMode>
);
