import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const URL = "http://localhost:8000/productos/";

export const Cart = () => {
  const context = useContext(ShopContext);
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await axios.get(URL);
    setProductos(res.data);
  };

  const buy = async (e) => {
    e.preventDefault();
    console.log(cartItems);
    await axios
      .put(URL + "buy", {
        1: cartItems[1],
        2: cartItems[2],
        3: cartItems[3],
        4: cartItems[4],
        5: cartItems[5],
        6: cartItems[6],
        7: cartItems[7],
        8: cartItems[8],
        9: cartItems[9],
        10: cartItems[10],
      })
      .then((res) => {
        alert(res);
      })
      .catch((err) => {
        alert(err.message);
      });
    context.setPayAumount(totalAmount);
    navigate("/stripe");
  };
  return (
    <div className="cart">
      <div>
        <h1>Carrito</h1>
      </div>
      <div className="cartItems">
        {productos.map((producto) => {
          const quantityInCart = cartItems[producto.id] || 0;
          if (quantityInCart > 0) {
            return <CartItem key={producto.id} data={producto} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount}</p>

          <button onClick={() => navigate("/shop")}> Seguir Comprando</button>

          <button onClick={buy}> Pagar </button>
        </div>
      ) : (
        <h2> El carrito esta vacio </h2>
      )}
    </div>
  );
};
