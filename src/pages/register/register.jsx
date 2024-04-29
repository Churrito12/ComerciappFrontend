import React from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const URL = "http://localhost:8000/users";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate(`/login`);
  };

  const navigateRegister = () => {
    navigate(`/register`);
  };

  useEffect(() => {
    mostrarUsuarios();
  }, []);

  const mostrarUsuarios = async () => {
    const res = await axios.get(URL);
    setUsers(res.data);
  };

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URL, {
      user_name: name,
      password: password,
    });
    navigateLogin();
  };

  return (
    <div className="register-form">
      <h2>Registro</h2>
      <form onSubmit={store} action="/auth" method="post">
        {" "}
        {}
        <input
          value={name}
          onChange={(e) =>
            users.find((event) => event.username === e.target.value)
              ? navigateRegister()
              : setName(e.target.value)
          }
          type="text"
          name="user"
          id="user"
          placeholder="Nombre de usuario"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="pass"
          id="pass"
          placeholder="Contraseña"
        />
        <input type="submit" className="btn-login" value="Registrarse" />
      </form>
    </div>
  );
};

export default Register;
