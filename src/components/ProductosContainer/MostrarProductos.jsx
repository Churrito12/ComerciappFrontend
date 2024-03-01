import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "http://localhost:8000/productos";

const MostrarProductos = () => {
  const [productos, setProductos] = useState([]);
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

  const deleteProducto = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      obtenerProductos();
    } catch (error) {
      console.error(`Error al eliminar el producto con id ${id}:`, error);
    }
  };

  return (
    <div className="GridContainer">
      <div className="row">
        <div className="col">
          <table className="tabla">
            <thead className="primera-tabla">
              <tr>
                <th>Nombre</th>
                <th>Proveedor</th>
                <th>Stock</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.nombre}</td>
                  <td>{producto.proveedor}</td>
                  <td>{producto.stock}</td>
                  <td>{producto.precio}</td>
                  <td>
                    <Link to={`/edit/${producto.id}`} className="EditarLink">
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteProducto(producto.id)}
                      className="EliminarBoton"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default MostrarProductos;
