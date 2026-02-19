import React from "react";

export const Header = ({ cantidadProductos }) => {
  return (
    <header
      style={{
        background: "#1f2937",
        color: "white",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h3 style={{ margin: 0, fontWeight: 600 }}>
          Carrito de Compras
        </h3>
        <p style={{ margin: 0, fontSize: "0.8rem", opacity: 0.8 }}>
          Gestión de productos en React
        </p>
      </div>

      <div
        style={{
          background: "#111827",
          padding: "6px 14px",
          borderRadius: "20px",
          fontSize: "0.85rem",
          fontWeight: 500,
        }}
      >
        {cantidadProductos} productos
      </div>
    </header>
  );
};
