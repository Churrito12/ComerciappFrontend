import React from "react";

export const Producto = (props) => {
  const { nombre, precio } = props.data;
  return (
    <div className="producto">
      {" "}
      {}
      <div className="description">
        <p>
          <b>{nombre}</b>
        </p>
        <p> ${precio}</p>
      </div>
    </div>
  );
};