import React, { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const ShopContext = createContext(null);
const URL = "http://localhost:8000/productos/";

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < 12; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [payAumount, setPayAumount] = useState(0);

  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProductos();
  }, []);

  const [logged, setLogged] = useState(0);
  const loggedChanger = (value) => setLogged(value);

  const [admin, setAdmin] = useState(false);
  const AdminChanger = (value) => setAdmin(value);

  const getProductos = async () => {
    const res = await axios.get(URL);
    setProductos(res.data);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = productos.find(
          (producto) => producto.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.precio;
      }
    }

    return totalAmount;
  };

  const addToCart = async (itemId) => {
    await axios
      .get("http://localhost:8000/productos/book/" + itemId + "?f=book")
      .then(({ data }) => {
        if (data === "Booked") {
          setCartItems((prevCartItems) => ({
            ...prevCartItems,
            [itemId]: prevCartItems[itemId] + 1,
          }));
        } else if (data === "Stockout") {
          alert("Empty product");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const removeFromCart = async (itemId) => {
    await axios
      .get("http://localhost:8000/productos/book/" + itemId + "?f=unbook")
      .then(({ data }) => {
        data === "Unbooked"
          ? setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
          : void 0;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    loggedChanger,
    logged,
    AdminChanger,
    admin,
    payAumount,
    setPayAumount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
