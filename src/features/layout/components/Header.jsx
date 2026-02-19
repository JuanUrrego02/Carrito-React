import React from "react";

export const Header = ({ cantidadProductos }) => {
  return (
    <header style={{
      background: "#fff",
      borderBottom: "1px solid #e5e7eb",
      padding: "0 2rem",
      height: "56px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      <div>
        <p style={{ margin: 0, fontSize: "0.65rem", color: "#9ca3af", letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "sans-serif" }}>
          Carrito de compras React
        </p>
        <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700, color: "#111827", fontFamily: "sans-serif" }}>
          Mi Tienda
        </h4>
      </div>

      <span style={{
        background: "#111827",
        color: "white",
        borderRadius: "20px",
        padding: "4px 14px",
        fontSize: "0.8rem",
        fontFamily: "sans-serif",
        fontWeight: 500,
      }}>
        {cantidadProductos} {cantidadProductos === 1 ? "item" : "items"}
      </span>
    </header>
  );
};