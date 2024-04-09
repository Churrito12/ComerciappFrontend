import React from "react";
import { Product } from "./Product";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const URL = "http://localhost:8000/productos/";

export const EditProduct = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProducto();
  }, []);

  const getProducto = async () => {
    const res = await axios.get(URL);
    setProductos(res.data);
  };
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Edit Products</h1>
      </div>
      <div className="productos">
        {productos.map((producto) => (
          <Producto data={producto} />
        ))}
      </div>
    </div>
  );
};
