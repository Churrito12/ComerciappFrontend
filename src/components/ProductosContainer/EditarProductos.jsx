import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./EditarProducto.css";

const URL = "http://localhost:8000/productos/";

const EditarProducto = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [stock, setStock] = useState("");
  const [stockMin, setStockMin] = useState("");
  const [stockMax, setStockMax] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductoById();
  }, []);

  const getProductoById = async () => {
    try {
      const res = await axios.get(URL + id);
      const { nombre, precio, proveedor, stock, stockMin, stockMax } = res.data;
      setNombre(nombre);
      setPrecio(precio);
      setProveedor(proveedor);
      setStock(stock);
      setStockMin(stockMin);
      setStockMax(stockMax);
    } catch (error) {
      setError("Error al obtener el producto.");
    }
  };

  const actualizar = async (e) => {
    e.preventDefault();
    try {
      const updatedProducto = {
        nombre,
        precio: parseFloat(precio),
        proveedor,
        stock: parseInt(stock),
        stockMin: parseInt(stockMin),
        stockMax: parseInt(stockMax),
      };
      await axios.put(URL + id, updatedProducto);
      navigate("/mostrarproductos");
    } catch (error) {
      setError("Error al actualizar el producto.");
    }
  };

  return (
    <div className="CrearProductoContainer">
      <Form onSubmit={actualizar}>
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
      </Form>
    </div>
  );
};

export default EditarProducto;
