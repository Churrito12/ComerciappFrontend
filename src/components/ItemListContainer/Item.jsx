import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Item = ({ producto, mostrarDetalle }) => {
  const clickDetalle = () => {
    mostrarDetalle(producto.id);
  };
  return (
    <>
      <Card className="card">
        <Card.Img variant="top" src={producto.image} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.proveedor}</Card.Text>
          <Button
            variant="primary"
            onClick={clickDetalle}
            className="detailsButton"
          >
            Detalles
          </Button>

          <Card.Text variant="primary" className="productPrice">
            $ {producto.precio}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
