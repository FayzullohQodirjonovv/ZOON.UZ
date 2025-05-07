import React, { useContext } from "react";
import { Heart } from "lucide-react";
import addCard from "../../../assets/addCart.svg";
import { ShopContext } from "../../../context/shop-conext/index";
import toast from "react-hot-toast";
const Card = ({ id, title, price, oldPrice, available, img, discount }) => {
  const { state, dispatch } = useContext(ShopContext);
  const isLiked = state.data.some(item => item.id === id);
  const handleLike = () => {
    if (isLiked) {
      dispatch({ type: "remove_product", id }); 
    } else {
      dispatch({ type: "add_product", data: { id, title, price, img } });
      toast.success("Like saqlandi");
    }
  };
  
  const handleAddToCart = () => {
    dispatch({ type: "add_product", data: { id, title, price, img } });
    toast.success("Mahsulot savatchaga qo‘shildi");
  };

  return (
    <div className="max-w-[280px] w-full m-auto">
      <div className="shadow-lg rounded-2xl relative transition-transform duration-300 hover:shadow-2xl hover:scale-105">
        <div className="relative">
          <img
            src={img}
            alt={title}
            className="w-full h-[300px] object-contain"
          />

          <button
            onClick={handleLike}
            aria-label={isLiked ? "Savatdan olib tashla" : "Savatchaga qo‘sh"}
            className="absolute top-2 right-2 focus:outline-none"
          >
            <Heart
              className={`w-6 h-6 transition-all duration-200 ${
                isLiked ? "text-red-500 fill-red-500" : "text-gray-400"
              }`}
            />
          </button>

          {discount && (
            <p className="absolute left-2 bottom-2 px-1 text-[#f00] text-base font-bold bg-[#fff7fc] rounded-2xl">
              {discount}
            </p>
          )}
        </div>

        <div className="mt-2 flex flex-col pb-3 gap-2 px-4">
          <h2 className="text-[15px]">
            {title.length > 90 ? title.slice(0, 90) + "..." : title}
          </h2>
          {available && (
            <p className="min-h-[20px] text-sm font-bold w-fit px-2.5 rounded-2xl text-[#f64e60] bg-[#ffe2e5]">
              {available}
            </p>
          )}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#212427] text-base font-bold">
                {price.toLocaleString("ru-RU")} soʼm
              </p>
              {oldPrice && (
                <p className="text-[#9ca3af] line-through">
                  {oldPrice.toLocaleString("ru-RU")} soʼm
                </p>
              )}
            </div>
            <button onClick={handleAddToCart} className="border border-[#ddd] p-1 rounded-full cursor-pointer">
              <img src={addCard} alt="add to cart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
