import React, { useState, useEffect, useContext } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ShopContext } from "../../context/shop-context";

const URL = "http://localhost:8000/users/";

const Login = () => {
  const context = useContext(ShopContext);
  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate(`/register`);
  };

  const navigateShopAddtoCart = () => {
    navigate(`/shop`);
  };

  const navigateEditInventory = () => {
    navigate(`/mostrarProductosAdmin`);
  };

  const [entrada, setEntrada] = useState("");
  const [entradaP, setEntradaP] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get(URL);
    setUsers(res.data);
  };

  const compare = () => {
    return users.some(
      (user) => user.user_name === entrada && user.password === entradaP
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (compare()) {
      if (entrada === "admin") {
        navigateEditInventory();
        context.AdminChanger(true);
      } else {
        context.AdminChanger(false);
        navigateShopAddtoCart();
      }
      context.loggedChanger(true);
    } else {
      setError("Datos incorrectos. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          type="text"
          name="user"
          id="user"
          placeholder="Nombre de usuario"
        />
        <input
          value={entradaP}
          onChange={(e) => setEntradaP(e.target.value)}
          type="password"
          name="pass"
          id="pass"
          placeholder="Contraseña"
        />
        <input type="submit" className="btn-login" value="Aceptar" />
      </form>
      <div href="register" className="btn-register" onClick={navigateRegister}>
        Registrarse
      </div>
    </div>
  );
};

export default Login;
