import React from "react";
import Item from "../ItemListContainer/Item";
import CounterComponent from "../../hooks/CounterComponent";
import { useParams } from "react-router-dom";

const ItemChange = ({ producto }) => {
  // const { id } = useParams();

  // const filtrarProducto = producto.filter((producto) => producto.id == id);

  return (
    <div className="containerDetail">
      <Item producto={producto} />
      <CounterComponent contador={(1, 0, 10)} />
    </div>
  );
};

export default ItemChange;
