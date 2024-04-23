import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const URLADMIN = "http://localhost:8000/users/1/";

const EditAdmin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const navigateShop = () => {
    navigate(`/editInventory`);
  };

  const update = async (e) => {
    e.preventDefault();
    await axios.put(URLADMIN, {
      password: password,
    });
    navigateShop();
  };

  return (
    <div className="register-form">
      {" "}
      <h2>Cambiar contraseña</h2>
      <form onSubmit={update} action="/auth" method="post">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="pass"
          id="pass"
          placeholder="password"
        />

        <input type="submit" className="btn-login" value="Edit" />
      </form>
    </div>
  );
};

export default EditAdmin;
