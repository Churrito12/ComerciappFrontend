import React from "react";
import { Producto } from "./productAddtoCart.jsx";
import "./shopAddtoCart.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const URL = "http://localhost:8000/productos/";

export const ShopAddtoCart = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    const res = await axios.get(URL);
    setProductos(res.data);
  };
  return (
    <div className="shop">
      <div className="productos">
        {productos.map((producto) => (
          <Producto data={producto} />
        ))}
      </div>
    </div>
  );
};
