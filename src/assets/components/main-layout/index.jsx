// src/components/main-layout.js
import React from "react";
import Header from "../header/index";
import { Outlet, useLocation } from "react-router-dom";
import Swiper from "../swiper/index";
import Footer from "../footer/index";
import Showcase from "../showcase/index";
import Koko from "../koko/index";

const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Header />
     
      
      {isHome && (
        <>
          <Swiper />
          <Koko />
        </>
      )}
      
      <main>
        <Outlet />
      </main>

      {isHome && <Showcase />}
      
      <Footer />
    </>
  );
};

export default MainLayout;
