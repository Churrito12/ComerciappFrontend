import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import "./navbar.css";

const navbar = () => {
  return (
    <div>
      <div className="botonesMenu">
        <Link to={"/shop"} className="botonLink">
          <Button className="botonMenu" size="lg">
            Ventas
          </Button>
        </Link>

        <Link to={"/mostrarproductos"} className="botonLink">
          <Button className="botonMenu" size="lg">
            Ver Stock
          </Button>
        </Link>
        <Link to={"/crearProducto"} className="botonLink">
          <Button className="botonMenu" size="lg">
            Añadir producto
          </Button>
        </Link>
        <Link to={"/actualizarPrecios"} className="botonLink">
          <Button className="botonMenu" size="lg">
            Cambiar precios porcentual
          </Button>
        </Link>
        <Link to={"/actualizarPreciosProveedor"} className="botonLink">
          <Button className="botonMenu" size="lg">
            Precios por proveedor
          </Button>
        </Link>
        <Link to={"/login"} className="botonLink">
          <Button className="botonMenu" size="lg">
            Usuarios
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default navbar;
