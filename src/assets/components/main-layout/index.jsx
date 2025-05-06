import React from "react";
import Header from "../header/index";
import { Outlet } from "react-router-dom";
import Swiper from "../swiper/index";
import Footer from "../footer/index";
import Showcase from "../showcase/index";   
import Koko from "../koko/index";   

const MainLayout = () => {
  return (
    <>
      <Header />
      <Swiper />
      <Koko />
      <main>
        {" "}
        <Outlet />
      </main>
      <Showcase />
      <Footer/>
    </>
  );
};

export default MainLayout;
