import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MostrarProducto.css";

const URL = "http://localhost:8000/productos/";

const MostrarProductos = () => {
  const [productos, setProductos] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroProveedor, setFiltroProveedor] = useState("");

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const res = await axios.get(URL);
      setProductos(res.data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  const handleFiltroNombreChange = (e) => {
    setFiltroNombre(e.target.value);
  };

  const handleFiltroProveedorChange = (e) => {
    setFiltroProveedor(e.target.value);
  };

  const productosFiltrados = Array.isArray(productos)
    ? productos.filter(
        (producto) =>
          producto.nombre.toLowerCase().includes(filtroNombre.toLowerCase()) &&
          producto.proveedor
            .toLowerCase()
            .includes(filtroProveedor.toLowerCase())
      )
    : [];

  return (
    <div className="GridContainer">
      <div className="row">
        <div className="col">
          <div className="filter-container">
            <input
              className="filtroA"
              type="text"
              value={filtroNombre}
              onChange={handleFiltroNombreChange}
              placeholder="Buscar por nombre..."
            />
            <input
              className="filtroB"
              type="text"
              value={filtroProveedor}
              onChange={handleFiltroProveedorChange}
              placeholder="Buscar por proveedor..."
            />
          </div>
          <div className="button-container">
            <Link to="/CrearProducto" className="CrearBoton">
              <button>Crear</button>
            </Link>
            <Link to="/" className="VolverBoton">
              <button>Volver</button>
            </Link>
          </div>

          <div className="tabla-container">
            <table className="tabla">
              <thead className="primera-tabla">
                <tr>
                  <th>Nombre</th>
                  <th>Proveedor</th>
                  <th>Stock</th>
                  <th>Máx</th>
                  <th>Mín</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {productosFiltrados.map((producto) => (
                  <tr key={producto.id}>
                    <td>{producto.nombre}</td>
                    <td>{producto.proveedor}</td>
                    <td>{producto.stock}</td>
                    <td>{producto.stockMax}</td>
                    <td>{producto.stockMin}</td>
                    <td>${producto.precio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostrarProductos;
