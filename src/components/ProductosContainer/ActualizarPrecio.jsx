import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const URL = "http://localhost:8000/productos/";

const ActualizarPrecio = () => {
  const [porcentajeAumento, setPorcentajeAumento] = useState("");
  const navigate = useNavigate();

  const actualizarPrecios = async (e) => {
    e.preventDefault();
    try {
      await axios.put(URL + "actualizarPrecios", {
        porcentajeAumento: porcentajeAumento,
      });

      navigate("/mostrarproductos");
    } catch (error) {
      console.error("Error al actualizar los precios:", error);
    }
  };

  return (
    <div className="CrearProductoContainer">
      <Form onSubmit={actualizarPrecios}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Porcentaje de aumento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Porcentaje"
            value={porcentajeAumento}
            onChange={(e) => setPorcentajeAumento(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Aceptar
        </Button>
      </Form>
    </div>
  );
};

export default ActualizarPrecio;
