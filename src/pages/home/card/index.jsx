import { Heart } from "lucide-react";
import React from "react";
import addCard from "../../../assets/addCart.svg";

const Card = ({ id, title, price, oldPrice, available, img, discount }) => {
  return (
    <div className="max-w-[280px] w-full m-auto">
      <div className="shadow-lg rounded-2xl relative transition-transform duration-300 hover:shadow-2xl hover:scale-105">
        <div className="relative">
          <img
            src={img}
            alt={title}
            className="w-full h-[300px] object-contain"
          />
          <div className="absolute top-2 right-2">
            <Heart className="cursor-pointer text-[grey] bg-[#FEFEFE]" />
          </div>
          <p className="absolute left-2 bottom-2 px-1 text-[#f00] text-base font-bold bg-[#fff7fc] rounded-2xl">
            {discount}
          </p>
        </div>
        <div className="mt-2 flex flex-col pb-3 gap-2 px-4">
          <h2 className="text-[15px]">{title.slice(0, 90) + "..."}</h2>
          <p
            className={`min-h-[20px] text-sm font-bold w-fit px-2.5 rounded-2xl ${
              available
                ? "text-[#f64e60] bg-[#ffe2e5]"
                : "text-transparent bg-transparent"
            }`}
          >
            {available ?? ""}
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#212427] text-base font-bold">
                {price.toLocaleString("ru-RU")} so'm
              </p>
              {oldPrice && (
                <p className="text-[#9ca3af] line-through">
                  {oldPrice.toLocaleString("ru-RU")} so'm
                </p>
              )}
            </div>
            <button className="border border-[#ddd] p-1 rounded-full cursor-pointer">
              <img src={addCard} alt="addCard" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
