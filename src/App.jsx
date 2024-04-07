import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import MostrarProductos from "./components/ProductosContainer/MostrarProductos.jsx";
import CrearProducto from "./components/ProductosContainer/CrearProducto.jsx";
import EditarProducto from "./components/ProductosContainer/EditarProductos.jsx";
import ActualizarPrecio from "./components/ProductosContainer/ActualizarPrecio.jsx";
import ActualizarPrecioProveedor from "./components/ProductosContainer/ActualizarPrecioProveedor.jsx";
import { ShopContextProvider } from "./components/context/shop-context.jsx";

const App = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/mostrarProductos"
              element={<MostrarProductos />}
            ></Route>
            <Route
              exact
              path="/CrearProducto"
              element={<CrearProducto />}
            ></Route>
            <Route
              exact
              path="/editar/:id"
              element={<EditarProducto />}
            ></Route>
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
      </ShopContextProvider>
    </div>
  );
};
export default App;
