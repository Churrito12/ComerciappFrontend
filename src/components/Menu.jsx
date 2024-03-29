import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Saludar from "./Saludar";

const Menu = () => {
  const saludar = () => {
    Saludar();
  };
  return (
    <div>
      <Saludar greeting={"Bienvenido usuario ¿Que deseas hacer?"} />
      <div className="botonesMenu">
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

        <Link className="botonLink">
          <Button className="botonMenu" size="lg">
            Eliminar producto/proveedor
          </Button>
        </Link>
        <Link to={"/actualizarPrecios"} className="botonLink">
          <Button className="botonMenu" size="lg">
            Actualizar precio individual
          </Button>
        </Link>
        <Link className="botonLink">
          <Button className="botonMenu" size="lg">
            Actualizar todos los precios
          </Button>
        </Link>
        <Link to={"/actualizarPreciosProveedor"} className="botonLink">
          <Button className="botonMenu" size="lg">
            Actualizar precio proveedor
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Menu;
