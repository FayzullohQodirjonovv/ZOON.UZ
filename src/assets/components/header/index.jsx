import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Location from "./../../../assets/location.svg";
import Qol from "./../../../assets/qol.svg";
import Call from "./../../../assets/call.svg";
import Zoonuz from "./../../../assets/zoonuz.svg";
import Priglajeniya from "./../../../assets/priglajeniya.svg";
import Savatcha from "./../../../assets/savatcha.svg";
import { Heart } from "lucide-react";
import Soroq from "./../../../assets/soroq.svg";
import Moshinlogo from "./../../../assets/moshinlogo.svg";
import Img from "./../../../assets/img.svg";
import Globus from "./../../../assets/globus.svg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-[95%] m-auto">
      <div className="text-sm py-2 px-4 flex justify-between items-center">
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-pink-500 flex items-center">
            <span className="mr-1 flex text-[#C2CDDD] gap-1.5">
              <img src={Location} alt="" />Город <u className='text-[#5D78FF]'>Ташкент</u>
            </span>
          </a>
          <a href="#" className="text-[#5d78ff] text-sm font-bold flex items-center">
            <span className="mr-1 flex"><img src={Qol} alt="" />Продавайтена Zon.uz</span>
          </a>
          <a href="#" className="text-gray-600 flex items-center">
            <span className="mr-1 flex gap-3 text-[#6682a9] text-sm "><img src={Savatcha} alt="" />Покупать как юрлицо</span>
          </a>
          <a className="text-[#6682a9] text-sm" href="#">Помощь</a>
          <a className="text-[#6682a9] text-sm max-[550px]:hidden" href="#">Контакты</a>
        </div>

        <div className="text-gray-600 flex items-center text-sm">
          <img src={Call} alt="" />
          <a className="text-base font-bold" href="tel:+998-78 555-35-00">+998-78 555-35-00</a>
        </div>

        <button
          className="md:hidden block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={!isMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
          </svg>
        </button>
      </div>

      <hr className='text-[#C2CDDD]' />

      <div className="flex items-center justify-between py-4 px-4">
        <div className="text-3xl font-bold flex items-center gap-4">
        <img
  src={Zoonuz}
  alt=""
  className="w-24 cursor-pointer"
  onClick={() => navigate('/')}
/>

          <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded hidden md:flex items-center">
            <span className="mr-2 flex text-[27px] gap-2"><img src={Priglajeniya} alt="" /> Katalog</span>
          </button>
        </div>

        <div className="flex-grow mx-4 flex max-w-full">
          <input
            type="text"
            placeholder="Qidiruvni boshlash..."
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className='bg-[#D1DAE6] text-[red] p-2'><img src={Img} alt="" /></button>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => navigate('/shop')}>
            <img src={Savatcha} alt="" />
          </button>
          <button   onClick={() => navigate('/like')}>
      <Heart className="text-[grey] w-6 h-6" />
    </button>
          <button><img src={Soroq} alt="" /></button>
          <button><img src={Moshinlogo} alt="" /></button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Войти</button>
        </div>
      </div>

      <hr className='text-[#C2CDDD]' />

      {isMenuOpen && (
        <div className="md:hidden px-4 space-y-3 pb-4">
          <a href="#" className="block text-sm text-[#5D78FF]">Город: Ташкент</a>
          <a href="#" className="block text-sm text-blue-500">Продавайтена Zon.uz</a>
          <a href="#" className="block text-sm text-gray-600">Покупать как юрлицо</a>
          <a href="#" className="block text-sm text-[#6682A9]">Помощь</a>
          <a href="#" className="block text-sm text-[#6682A9]">Контакты</a>
          <div className="flex gap-4">
            <button><img src={Soroq} alt="" /></button>
            <button><img src={Moshinlogo} alt="" /></button>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-2">Войти</button>
        </div>
      )}
    </div>
  );
};

export default Header;
