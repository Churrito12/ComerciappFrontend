import React, { useState } from "react";
import Item from "./Item";
import ItemChangeContainer from "../ItemChangeContainer/ItemChangeContainer";
import { Link } from "react-router-dom";

const ItemList = ({ productos }) => {
  const [mostrarDetail, setMostrarDetail] = useState(null);

  const mostrarDetalle = (producto) => {
    setMostrarDetail(producto);
  };
  const ocultarDetalle = () => {
    setMostrarDetail(null);
  };
  return (
    <div className="container">
      <Link to={"/"} className="linkItemList">
        <button>Volver al inicio</button>
      </Link>
      <h2>Lista de Productos</h2>
      <div className="productList">
        {productos.map((producto) => (
          <div key={producto.id} className="productCard">
            <Item producto={producto} mostrarDetalle={mostrarDetalle} />
          </div>
        ))}
      </div>
      {mostrarDetail && (
        <ItemChangeContainer
          producto={mostrarDetail}
          onClose={ocultarDetalle}
        />
      )}
    </div>
  );
};

export default ItemList;
