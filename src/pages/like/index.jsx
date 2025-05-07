import React, { useState } from 'react';
import { useShopContext } from '../../context/shop-conext';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  

const YourComponent = () => {
  const { state, addToCart, removeFromCart } = useShopContext(); 
  const [likedProducts, setLikedProducts] = useState([]);
  const navigate = useNavigate(); 

  const handleLike = (id) => {
    if (!likedProducts.includes(id)) {
      setLikedProducts([...likedProducts, id]);
      if (removeFromCart) {
        removeFromCart(id);
      }
    } else {
      setLikedProducts(likedProducts.filter((productId) => productId !== id));
      if (addToCart) {
        addToCart(id); 
      }
    }
  };

  const handleClearLikes = () => {
    setLikedProducts([]);
    state.data.forEach((product) => {
      if (addToCart) {
        addToCart(product.id); 
      }
    });
    navigate('/');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
      {state.data.filter((product) => !likedProducts.includes(product.id)).map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg p-4 max-w-sm mx-auto">
          <div className="relative">
            <div className="absolute right-2 top-2">
              <Heart
                onClick={() => handleLike(product.id)}
                className={`cursor-pointer ${likedProducts.includes(product.id) ? 'bg-red-500 text-red' : ' text-[red]'}`}
                size={24}
              />
            </div>

            <img
              src={product.img || 'https://via.placeholder.com/200'}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          </div>

          <div className="flex flex-col items-center justify-start">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-lg text-gray-700">{product.count} ta - {product.userPrice} so'm</p>
          </div>
        </div>
      ))}

      {likedProducts.length === state.data.length && (
        <div className="col-span-full text-center mt-4 p-4 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Sizga yoqqanini qo‘shing</h2>
          <p className="text-lg text-gray-700">Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar qoladi.</p>
          <button 
            onClick={handleClearLikes}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700" 
          >
            Barcha yoqtirilganlarni tozalash
          </button>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
