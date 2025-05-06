import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Wrapper() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <Slider
      {...settings}
      className="w-full max-w-[1250px] m-auto mt-5 px-4"
    >
      <div>
        <img
          src="https://zon.uz/_next/static/media/inverter_protech-desktop.f5a74588.webp"
          className="rounded-[10px] w-full h-auto object-cover"
          alt="Inverter"
        />
      </div>
      <div>
        <img
          src="https://zon.uz/_next/static/media/dewalt_new_desktop.1a3adcaf.webp"
          className="rounded-[10px] w-full h-auto object-cover"
          alt="Dewalt"
        />
      </div>
      <div>
        <img
          src="https://zon.uz/_next/static/media/resanta-desk.d0ae6da5.webp"
          className="rounded-[10px] w-full h-auto object-cover"
          alt="Resanta"
        />
      </div>
      <div>
        <img
          src="https://zon.uz/_next/static/media/fubag-desk.8415d125.webp"
          className="rounded-[10px] w-full h-auto object-cover"
          alt="Fubag"
        />
      </div>
    </Slider>
  );
}
