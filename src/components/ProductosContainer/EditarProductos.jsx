import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const URL = "http://localhost:8000/productos/";

const EditarProducto = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [stock, setStock] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const actualizar = async (e) => {
    e.preventDefault();
    try {
      await axios.put(URL + id, {
        nombre: nombre,
        precio: precio,
        proveedor: proveedor,
        stock: stock,
      });

      navigate("/mostrarproductos");
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  useEffect(() => {
    getProductoById();
  }, []);

  const getProductoById = async () => {
    const res = await axios.get(URL + id);
    setNombre(res.data.nombre);
    setPrecio(res.data.precio);
    setProveedor(res.data.proveedor);
    setStock(res.data.stock);
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

        <Button variant="primary" type="submit">
          Aceptar
        </Button>
      </Form>
    </div>
  );
};

export default EditarProducto;
