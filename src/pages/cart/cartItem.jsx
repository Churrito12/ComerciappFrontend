import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, nombre, precio } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    addToCart(id, newQuantity);
  };

  return (
    <div className="cartItem">
      <div>
        <p>
          <b> {nombre} </b>
        </p>
        <p> ${precio} </p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItems[id]} onChange={handleInputChange} />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
