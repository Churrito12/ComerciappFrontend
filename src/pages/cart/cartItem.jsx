import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
export const CartItem = (props) => {
  const { id, nombre, precio } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartItem">
      <div>
        <p>
          <b> {nombre} </b>
        </p>
        <p> ${precio} </p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItems[id]} />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
