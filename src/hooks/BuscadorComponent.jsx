import React, { useState } from "react";

const BuscadorComponent = ({ productos }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  const resultados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={busqueda}
        onChange={handleBusquedaChange}
        placeholder="Buscar producto..."
      />
      <ul>
        {resultados.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default BuscadorComponent;
