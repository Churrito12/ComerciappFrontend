import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const URL = "http://localhost:8000/productos/";

const ActualizarPrecioProveedor = () => {
  const [porcentajeAumento, setPorcentajeAumento] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [proveedores, setProveedores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerProveedores = async () => {
      try {
        const response = await axios.get("http://localhost:8000/productos");
        setProveedores(response.data);
      } catch (error) {
        console.error("Error al obtener los proveedores:", error);
      }
    };
    obtenerProveedores();
  }, []);

  const actualizarPrecios = async (e) => {
    e.preventDefault();
    try {
      await axios.put(URL + "actualizarPrecios", {
        porcentajeAumento: porcentajeAumento,
        proveedor: proveedor,
      });

      navigate("/mostrarproductos");
    } catch (error) {
      console.error("Error al actualizar los precios:", error);
    }
  };

  return (
    <div className="CrearProductoContainer">
      <Form onSubmit={actualizarPrecios}>
        <Form.Group className="mb-3" controlId="formPorcentaje">
          <Form.Label>Porcentaje de aumento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Porcentaje"
            value={porcentajeAumento}
            onChange={(e) => setPorcentajeAumento(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProveedor">
          <Form.Label>Proveedor</Form.Label>
          <Form.Control
            as="select"
            value={proveedor}
            onChange={(e) => setProveedor(e.target.value)}
          >
            <option value="">Seleccionar un proveedor</option>
            {proveedores.map((p) => (
              <option key={p.id} value={p.proveedor}>
                {p.proveedor}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Aceptar
        </Button>
      </Form>
    </div>
  );
};
export default ActualizarPrecioProveedor;
