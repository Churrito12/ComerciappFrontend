import { Link } from "react-router-dom";
import "./navbar.css";
import React, { useContext } from "react";
import { ShoppingCart } from "@phosphor-icons/react";
import { ShopContext } from "../context/shop-context";

export const Navbar = () => {
  const context = useContext(ShopContext);
  return (
    <div>
      <div className="navbar">
        {!context.admin ? (
          !context.logged ? (
            <div className="links">
              <Link to="/"> Ventas </Link>
              <Link to="/login"> Usuarios</Link>
              <Link to="/mostrarProductos">Ver stock</Link>
              <Link to="/login">
                <ShoppingCart size={30} />
              </Link>
            </div>
          ) : (
            <div className="linksUsuario">
              <Link to="/shop"> Ventas </Link>
              <Link to="/login"> Usuarios</Link>
              <Link to="/mostrarProductos">Ver stock</Link>
              <Link to="/cart">
                <ShoppingCart size={30} />
              </Link>
            </div>
          )
        ) : (
          <div className="linksAdmin">
            <Link to="/shop"> Ventas </Link>
            <Link to="/login"> Usuarios</Link>
            <Link to="/mostrarProductosAdmin">Ver stock</Link>
            <Link to="/Cart" className="links">
              Carrito
            </Link>
            <Link to="/actualizarPrecios" className="links">
              Cambiar precios
            </Link>
            <Link to="/actualizarPreciosProveedor" className="links">
              Precios Proveedor
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
