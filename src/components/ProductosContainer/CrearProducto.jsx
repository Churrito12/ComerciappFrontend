import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const URL = "http://localhost:8000/productos";

const CrearProducto = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [stock, setStock] = useState("");
  const [stockMin, setStockMin] = useState("");
  const [stockMax, setStockMax] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevoProducto = {
        nombre,
        precio: parseFloat(precio),
        proveedor,
        stock: parseInt(stock),
        stockMin: parseInt(stockMin),
        stockMax: parseInt(stockMax),
      };
      await axios.post(URL, nuevoProducto);
      navigate("/MostrarProductos");
    } catch (error) {
      setError("Error al crear producto.");
    }
  };

  return (
    <div className="CrearProductoContainer">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="text"
            placeholder="$"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Proveedor</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={proveedor}
            onChange={(e) => setProveedor(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Stock Mínimo</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={stockMin}
            onChange={(e) => setStockMin(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Stock Máximo</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={stockMax}
            onChange={(e) => setStockMax(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Aceptar
        </Button>
        {error && <p>{error}</p>}
        <Link to="/MostrarProductos" className="VolverBoton">
          <Button>Volver</Button>
        </Link>
      </Form>
    </div>
  );
};

export default CrearProducto;
