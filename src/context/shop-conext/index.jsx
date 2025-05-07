import { createContext, useReducer, useContext } from "react";

const ShopContext = createContext({});

const ShopContextProvider = ({ children }) => {
  const storedData = JSON.parse(localStorage.getItem("data")) || [];

  const initialState = {
    data: Array.isArray(storedData) ? storedData : [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "add_product":
        const existingProduct = state.data.find(
          (product) => product.id === action.data.id
        );

        if (existingProduct) {
          const updatedData = state.data.map((product) => {
            if (product.id === action.data.id) {
              return {
                ...product,
                count: product.count + 1,
                userPrice: (product.count + 1) * product.price,
              };
            }
            return product;
          });
          localStorage.setItem("data", JSON.stringify(updatedData));
          return { data: updatedData };
        } else {
          const newData = {
            data: [
              ...state.data,
              { ...action.data, count: 1, userPrice: action.data.price },
            ],
          };
          localStorage.setItem("data", JSON.stringify(newData.data));
          return newData;
        }

      case "increase_count":
        const increased = state.data.map((product) =>
          product.id === action.id
            ? {
                ...product,
                count: product.count + 1,
                userPrice: (product.count + 1) * product.price,
              }
            : product
        );
        localStorage.setItem("data", JSON.stringify(increased));
        return { data: increased };

      case "decrease_count":
        const decreased = state.data
          .map((product) =>
            product.id === action.id && product.count > 1
              ? {
                  ...product,
                  count: product.count - 1,
                  userPrice: (product.count - 1) * product.price,
                }
              : product
          )
          .filter((product) => product.count > 0);
        localStorage.setItem("data", JSON.stringify(decreased));
        return { data: decreased };

      case "remove_product":
        const filtered = state.data.filter((product) => product.id !== action.id);
        localStorage.setItem("data", JSON.stringify(filtered));
        return { data: filtered };

      case "empty_cart":
        localStorage.setItem("data", JSON.stringify([]));
        return { data: [] };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseCount = (id) => dispatch({ type: "increase_count", id });
  const decreaseCount = (id) => dispatch({ type: "decrease_count", id });
  const removeProduct = (id) => dispatch({ type: "remove_product", id });
  const emptyCart = () => dispatch({ type: "empty_cart" });

  const totalPrice = state.data.reduce((acc, product) => acc + product.userPrice, 0);

  return (
    <ShopContext.Provider
      value={{
        state,
        dispatch,
        increaseCount,
        decreaseCount,
        removeProduct,
        emptyCart,
        totalPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

const useShopContext = () => useContext(ShopContext);

export { ShopContext, ShopContextProvider, useShopContext };
