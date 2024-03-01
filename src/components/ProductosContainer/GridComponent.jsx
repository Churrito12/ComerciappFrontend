import React from "react";
import { Col } from "react-bootstrap";

const GridComponent = ({ producto }) => {
  if (!producto) {
    return null;
  }

  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {producto.nombre ? producto.nombre : "Nombre no disponible"}
          </h5>

          <p className="card-text">Proveedor: {producto.proveedor}</p>
          <p className="card-text">Precio: {producto.precio}</p>
          <p className="card-text">Stock: {producto.stock}</p>
        </div>
      </div>
    </Col>
  );
};

export default GridComponent;
