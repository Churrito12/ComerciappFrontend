import React from "react";

const ListadoProductos = () => {
  const productos = [
    { id: 1, Nombre: "Producto A", Proveedor: "Sancor", Precio: 1200 },
    { id: 2, Nombre: "Producto B", Proveedor: "Sancor", Precio: 2200 },
    { id: 3, Nombre: "Producto C", Proveedor: "Sancor", Precio: 3200 },
  ];

  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 5000);
    } else {
      reject("No hay productos para mostrar");
    }
  });

  mostrarProductos
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      {productos.map((p) => {
        return (
          <div key={p.id}>
            <h1>{p.Nombre}</h1>
            <h3>{p.Proveedor}</h3>
            <p>${p.Precio}</p>
          </div>
        );
      })}
    </>
  );
};

export default ListadoProductos;
