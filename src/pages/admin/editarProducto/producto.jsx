import React from "react";
import { useState } from "react";
import axios from "axios";

const URL = "http://localhost:8000/productos/";

export const Producto = (props) => {
  const { id, nombre, precio, stockMax, stockMin } = props.data;
  const [priceHook, setPrice] = useState("");
  const [maxStock, setMaxS] = useState("");
  const [minStock, setMinS] = useState("");

  const update = async (e) => {
    e.preventDefault();
    await axios.put(URL + id + "/", {
      precio: priceHook,
      stockMax: maxStock,
      stockMin: minStock,
    });
  };

  return (
    <div className="producto">
      <div className="description">
        <p>
          <b>{nombre}</b>
        </p>
        <p> ${precio}</p>
        <p> Max Stock: {stockMax}</p>
        <p> Min Stock: {stockMin}</p>
        <form onSubmit={update} action="/auth" method="post">
          {" "}
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            name="pass"
            id="pass"
            placeholder="New Prize"
          />
          <input
            onChange={(e) => setMaxS(e.target.value)}
            type="text"
            name="pass"
            id="pass"
            placeholder="New MaxStock"
          />
          <input
            onChange={(e) => setMinS(e.target.value)}
            type="text"
            name="pass"
            id="pass"
            placeholder="New MinStock"
          />
          <input type="submit" className="btn-login" value="Edit" />{" "}
        </form>
      </div>
    </div>
  );
};
