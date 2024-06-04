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

  const addToCart = async (itemId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/productos/book/${itemId}?f=book`
      );
      const data = response.data;

      if (data === "Booked") {
        const updatedCart = { ...cartItems };

        if (updatedCart[itemId]) {
          updatedCart[itemId] += 1;
        } else {
          updatedCart[itemId] = 1;
        }

        setCartItems(updatedCart);
      } else if (data === "Stockout") {
        alert("No hay más stock disponible.");
      }
    } catch (error) {
      console.error("Error al agregar al carrito:", error.message);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/productos/book/${itemId}?f=unbook`
      );
      const data = response.data;

      if (data === "Unbooked") {
        const updatedCart = { ...cartItems };

        if (updatedCart[itemId] && updatedCart[itemId] > 0) {
          updatedCart[itemId] -= 1;
        }

        setCartItems(updatedCart);
      }
    } catch (error) {
      console.error("Error al remover del carrito:", error.message);
    }
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

  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    clearCart,
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
