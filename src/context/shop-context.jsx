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

  const addToCart = (productId) => {
    const updatedCart = { ...cartItems };

    if (updatedCart[productId]) {
      updatedCart[productId] += 1;
    } else {
      updatedCart[productId] = 1;
    }

    setCartItems(updatedCart);
  };
  const removeFromCart = (productId) => {
    const updatedCart = { ...cartItems };

    if (updatedCart[productId] && updatedCart[productId] > 0) {
      updatedCart[productId] -= 1;
    }

    if (updatedCart[productId] === 0) {
      delete updatedCart[productId];
    }

    setCartItems(updatedCart);
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

  return (
    <ShopContext.Provider
      value={{
        removeFromCart,
        cartItems,
        addToCart,
        getTotalCartAmount,

        logged,
        loggedChanger,
        admin,
        AdminChanger,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
