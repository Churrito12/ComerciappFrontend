import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const URL = "http://localhost:8000/productos/";

export const mercadoPago = () => {
  initMercadoPago("TEST-f05d0005-7a1d-417c-8fdc-2fa5103aafc7", {
    locale: "es-AR",
  });
};

export const Cart = () => {
  const { cartItems, getTotalCartAmount, setPayAumount, clearCart } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [preferenceId, setPreferenceId] = useState(null);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    const res = await axios.get(URL);
    setProductos(res.data);
  };

  const buy = async (e) => {
    try {
      // Realizar la solicitud al backend para actualizar el stock
      const response = await axios.put(
        "http://localhost:8000/productos/comprar",
        {
          cartItems: cartItems, // Envía el objeto cartItems al backend
        }
      );

      // Imprimir la respuesta del servidor en la consola
      console.log(cartItems);

      // Verificar la respuesta del backend
      if (response.status === 200) {
        alert("Compra exitosa");
        clearCart(); // Limpiar el carrito localmente

        // Refrescar los datos del producto
        getProductos();
      } else {
        alert("Error durante la compra");
      }
    } catch (error) {
      console.error("Error durante la compra:", error.message);
      alert("Error durante la compra: " + error.message);
    }
  };

  const crearPreference = async () => {
    try {
      const response = await axios.put("http://localhost:8000/payment", {
        title: "prueba",
        quantity: "1",
        price: "1",
      });
      setPreferenceId(response.data.id);
    } catch (error) {
      console.error("Error creando la preferencia:", error);
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
          <button onClick={buy}>Pagar</button>
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
