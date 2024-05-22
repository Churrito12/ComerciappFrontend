import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const URL = "http://localhost:8000/productos/";

export const Cart = () => {
  initMercadoPago("TEST-f05d0005-7a1d-417c-8fdc-2fa5103aafc7", {
    locale: "es-AR",
  });

  const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    getProducts();
    crearPreference();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get(URL);
      setProductos(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const crearPreference = async () => {
    try {
      const response = await axios.post("http://localhost:8000/payment", {
        title: "prueba",
        quantity: "1",
        price: totalAmount,
      });
      setPreferenceId(response.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePaymentSuccess = async () => {
    try {
      await axios.put(URL + "comprar", cartItems);
      clearCart();
      alert("Pago exitoso y stock actualizado");
    } catch (error) {
      alert("Error actualizando el stock");
      console.error(error);
    }
  };

  const handlePurchase = async () => {
    try {
      await axios.post("http://localhost:8000/comprar", cartItems);
      handlePaymentSuccess();
    } catch (error) {
      alert("Error al realizar la compra");
      console.error(error);
    }
  };

  return (
    <div className="cart">
      <div>
        <h1>Carrito</h1>
      </div>
      <div className="cartItems">
        {productos.map((producto) => {
          const quantityInCart = cartItems[producto.id] || 0;
          return (
            quantityInCart > 0 && <CartItem key={producto.id} data={producto} />
          );
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Total a pagar: ${totalAmount}</p>
          <button onClick={() => navigate("/shop")}>Seguir Comprando</button>
          <button onClick={handlePaymentSuccess}>Pagar</button>
          {preferenceId && (
            <div>
              <Wallet
                initialization={{ preferenceId }}
                onReady={() => console.log("Wallet ready")}
                onError={(error) => console.log("Wallet error", error)}
                onSubmit={() => console.log("Wallet submitted")}
                onPayment={(payment) => {
                  console.log("Payment successful", payment);
                  handlePurchase();
                }}
              />
            </div>
          )}
        </div>
      ) : (
        <h2>El carrito está vacío</h2>
      )}
    </div>
  );
};
