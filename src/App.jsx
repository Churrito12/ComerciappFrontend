import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import MostrarProductos from "./components/ProductosContainer/MostrarProductos.jsx";
import CrearProducto from "./components/ProductosContainer/CrearProducto.jsx";
import EditarProducto from "./components/ProductosContainer/EditarProductos.jsx";
import ActualizarPrecio from "./components/ProductosContainer/ActualizarPrecio.jsx";
import ActualizarPrecioProveedor from "./components/ProductosContainer/ActualizarPrecioProveedor.jsx";
import { ShopContextProvider } from "./context/shop-context.jsx";
import { Shop } from "./pages/Shop/shop.jsx";
import { ShopAddtoCart } from "./pages/ShopAddToCart/shopAddtoCart.jsx";
import Register from "./pages/register/register.jsx";
import Login from "./pages/login/login.jsx";
import { Cart } from "./pages/cart/cart.jsx";
import MostrarProductosAdmin from "./components/ProductosContainer/MostrarProductosAdmin.jsx";
const App = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Shop />}></Route>
            <Route exact path="/shop" element={<ShopAddtoCart />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route
              exact
              path="/mostrarProductos"
              element={<MostrarProductos />}
            ></Route>
            <Route
              exact
              path="/mostrarProductosAdmin"
              element={<MostrarProductosAdmin />}
            ></Route>
            <Route
              exact
              path="/crearProducto"
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
