import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Producto = (props) => {
  const { id, nombre, precio } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="producto">
      <div className="description">
        <p>
          <b>{nombre}</b>
        </p>
        <p> ${precio}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        {" "}
        {}
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>} {}
      </button>
    </div>
  );
};
