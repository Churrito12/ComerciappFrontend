import { useState } from "react";
import React from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);
  {
    return (
      <div className="contenedorContador">
        <p className="contador">{contador}</p>
        <button
          className="botonContador"
          onClick={() => setContador(contador + 1)}
        >
          +
        </button>
        <button className="botonContador" onClick={() => setContador(0)}>
          Reiniciar
        </button>
        <button
          className="botonContador"
          onClick={() => setContador(contador - 1)}
        >
          -
        </button>
      </div>
    );
  }
};
export default Contador;
