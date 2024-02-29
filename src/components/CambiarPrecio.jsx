import React from "react";

const CambiarPrecio = () => {
  const aumentarPrecio = new Promise((resolve, reject) => {
    const aumentar = true;

    if (aumentar) {
      resolve("Precio actualizado");
    } else {
      reject("Hubo un error");
    }
  });
  aumentarPrecio
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(aumentarPrecio);

  return <></>;
};

export default CambiarPrecio;
