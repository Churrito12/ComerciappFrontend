import React from "react";

export const Producto = (producto) => {
  const { nombre, precio } = producto.data;
  return (
    <div className="producto">
      <div className="descripcion">
        <p>
          <b>{nombre}</b>
        </p>
        <p> ${precio}</p>
      </div>
    </div>
  );
};
