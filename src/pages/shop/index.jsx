import React from "react";
import { Minus, Plus, Trash } from "lucide-react";
import { useShopContext } from "../../context/shop-conext/index";

const Shop = () => {
  const { state, removeProduct, increaseCount, decreaseCount } = useShopContext();

  const totalPrice = state.data.reduce((acc, item) => acc + item.userPrice, 0);

  return (
    <div className="p-6 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">🛒 Xaridlar ro'yxati</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Savatcha */}
        <div className="md:col-span-2 space-y-4">
          {state.data.length === 0 ? (
            <div className="bg-white p-6 rounded-xl shadow text-gray-500">
              Savat bo'sh
            </div>
          ) : (
            state.data.map((product) => (
              <div
                key={product.id}
                className="flex items-start justify-between w-full border border-gray-200 rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition"
              >
                {/* Rasmi */}
                <div className="w-28 h-28 border rounded-xl overflow-hidden flex items-center justify-center bg-gray-50">
                  <img
                    src={product.img || "https://via.placeholder.com/100"}
                    alt={product.title}
                    className="object-contain w-full h-full p-2"
                  />
                </div>

                {/* Ma'lumotlar */}
                <div className="flex-grow px-4">
                  <h2 className="text-base font-semibold">{product.title}</h2>
                  <p className="text-gray-700 mt-1">
                    {product.price.toLocaleString()}{" "}
                    <span className="text-sm">so‘m</span>
                  </p>
                  <p className="text-blue-700 font-semibold mt-1">
                    Jami: {product.userPrice.toLocaleString()} so‘m
                  </p>
                </div>

                {/* Soni boshqaruv */}
                <div className="flex items-center gap-2">
                  <button
                    className="w-8 h-8 border rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100"
                    onClick={() => decreaseCount(product.id)}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-center w-6">{product.count}</span>
                  <button
                    className="w-8 h-8 border rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100"
                    onClick={() => increaseCount(product.id)}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* O'chirish tugmasi */}
                <button
                  className="text-red-600 hover:text-red-800 ml-4"
                  onClick={() => removeProduct(product.id)}
                  title="O'chirish"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Umumiy hisob */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4 h-[40vh]">
          <h2 className="text-xl font-bold">🧾 Umumiy hisob</h2>
          <div className="flex justify-between text-gray-700">
            <span>Jami narx:</span>
            <span className="font-semibold text-lg">
              {totalPrice.toLocaleString()} so‘m
            </span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Yetkazib berish:</span>
            <span className="text-green-600 font-medium">Bepul</span>
          </div>
          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition">
            Buyurtma berish
          </button>
          <p className="text-xs text-gray-500 mt-2">
            Buyurtma berish orqali siz savdo maydonchasi qoidalari va qaytarish
            siyosatiga rozilik bildirasiz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
