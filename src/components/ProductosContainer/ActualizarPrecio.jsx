import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

import "./ActualizarPrecio.css";

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

      navigate("/mostrarProductosAdmin");
    } catch (error) {
      console.error("Error al actualizar los precios:", error);
    }
  };

  return (
    <div className="CrearProductoContainer">
      <Form onSubmit={actualizarPrecios}>
        <Form.Group className="FormAumento" controlId="formBasicEmail">
          <Form.Label>¿Cuanto desea aumentar?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 10"
            value={porcentajeAumento}
            onChange={(e) => setPorcentajeAumento(e.target.value)}
          />
        </Form.Group>
        <button className="BtnAceptar" type="submit">
          Aceptar
        </button>
        <Link to="/mostrarProductosAdmin">
          <button className="BtnVolver">Volver</button>
        </Link>
      </Form>
    </div>
  );
};

export default ActualizarPrecio;
