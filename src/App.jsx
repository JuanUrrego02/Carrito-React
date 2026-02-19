// import './shared/styles/App.css'
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./features/layout/components/Header";
import { Content } from "./features/layout/components/Content";
import { Footer } from "./features/layout/components/Footer";
import Props from "./features/layout/components/props";

function App() {
  const [cantidadProductos, setCantidadProductos] = useState(0);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        
        {/* Header recibe la cantidad del carrito */}
        <Header cantidadProductos={cantidadProductos} />

        <Routes>
          {/* Enviamos la función para actualizar el carrito */}
          <Route
            path="/"
            element={
              <Content onActualizarCarrito={setCantidadProductos} />
            }
          />

          <Route path="/props" element={<Props />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;