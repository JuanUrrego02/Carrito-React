// import './shared/styles/App.css'
import React, { useState } from "react";
import {Header} from './features/layout/components/Header'
import { Content } from './features/layout/components/Content'
import {Footer} from './features/layout/components/Footer'

function App() {

  const [cantidadProductos, setCantidadProductos] = useState(0);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header cantidadProductos={cantidadProductos} />
      <Content onActualizarCarrito={setCantidadProductos} />
      <Footer />
    </div>
  );
}

export default App;