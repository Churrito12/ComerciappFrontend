import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import MostrarProductos from "./components/ProductosContainer/MostrarProductos.jsx";
import CrearProducto from "./components/ProductosContainer/CrearProducto.jsx";
import EditarProducto from "./components/ProductosContainer/EditarProductos.jsx";
import ActualizarPrecio from "./components/ProductosContainer/ActualizarPrecio.jsx";
import ActualizarPrecioProveedor from "./components/ProductosContainer/ActualizarPrecioProveedor.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Menu />}></Route>
        <Route
          exact
          path="/mostrarProductos"
          element={<MostrarProductos />}
        ></Route>
        <Route exact path="/CrearProducto" element={<CrearProducto />}></Route>
        <Route exact path="/editar/:id" element={<EditarProducto />}></Route>
        <Route
          exact
          path="/actualizarPrecios"
          element={<ActualizarPrecio />}
        ></Route>
        <Route
          exact
          path="/actualizarPreciosProveedor"
          element={<ActualizarPrecioProveedor />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
