import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import MostrarProductos from "./components/ProductosContainer/MostrarProductos.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Menu />}></Route>
        <Route
          exact
          path="/MostrarProductos"
          element={<MostrarProductos />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
