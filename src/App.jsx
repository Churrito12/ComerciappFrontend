import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import MostrarProductos from "./components/ProductosContainer/MostrarProductos.jsx";
import CrearProducto from "./components/ProductosContainer/CrearProducto.jsx";
import EditarProducto from "./components/ProductosContainer/EditarProductos.jsx";

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
        <Route exact path="/crearProducto" element={<CrearProducto />}></Route>
        <Route exact path="/editar/:id" element={<EditarProducto />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
