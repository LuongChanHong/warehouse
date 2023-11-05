import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import WarehouseMap from "./pages/WarehouseMap/WarehouseMap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="warehouseMap" element={<WarehouseMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
