import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
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
      navigate("/mostrarProductosAdmin");
    } catch (error) {
      setError("Error al actualizar el producto.");
    }
  };

  return (
    <div className="EditarProductoContainer">
      <form onSubmit={actualizar}>
        <div className="mb-3">
          <label className="form-label">Producto</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="text"
            className="form-control"
            placeholder="$"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Proveedor</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            value={proveedor}
            onChange={(e) => setProveedor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock Mínimo</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            value={stockMin}
            onChange={(e) => setStockMin(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock Máximo</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            value={stockMax}
            onChange={(e) => setStockMax(e.target.value)}
          />
        </div>
        <button className="btn-aceptar" type="submit">
          Aceptar
        </button>
        <Link to="/mostrarProductosAdmin">
          <button className="BtnVolver">Volver</button>
        </Link>
      </form>
    </div>
  );
};

export default EditarProducto;
