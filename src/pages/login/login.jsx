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

  const navigateLogin = () => {
    navigate(`/login`);
  };

  const navigateShopAddtoCart = () => {
    navigate(`/shop`);
  };

  const navigateEditInventory = () => {
    navigate(`/editInventory`);
  };

  const [entrada, setEntrada] = useState("");
  const [entradaP, setEntradaP] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get(URL);
    setUsers(res.data);
  };

  const compare = () => {
    if (users.find((e) => e.user_name === entrada && e.password === entradaP)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (compare()) {
            if (entrada === "admin") {
              navigateEditInventory();
              context.AdminChanger(true);
            } else {
              navigateShopAddtoCart();
            }
            context.loggedChanger(true);
          } else {
            navigateLogin();
          }
        }}
      >
        <input
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          type="text"
          name="user"
          id="user"
          placeholder="user"
        />
        <input
          value={entradaP}
          onChange={(e) => setEntradaP(e.target.value)}
          type="password"
          name="pass"
          id="pass"
          placeholder="password"
        />
        <input type="submit" className="btn-login" value="Login" />
      </form>
      <div className="btn-register" onClick={navigateRegister}>
        Registrarse
      </div>
    </div>
  );
};

export default Login;
