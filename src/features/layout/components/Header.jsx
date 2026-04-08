import React from "react";
import { NavLink } from "react-router-dom";

export const Header = ({ cantidadProductos }) => {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: 500,
  };

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
      {/* LOGO + TITULO */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <img
          src="/img/logo.png"
          alt="Logo Manchester"
          style={{
            height: "45px",
            width: "auto",
            objectFit: "contain",
            cursor: "pointer",
          }}
        />

        <div>
          <h3 style={{ margin: 0, fontWeight: 600 }}>
            Manchester Clothing Store
          </h3>
          <p style={{ margin: 0, fontSize: "0.8rem", opacity: 0.8 }}>
            Tu tienda de ropa favorita
          </p>
        </div>
      </div>

      {/* MENU */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <NavLink to="/" style={linkStyle}>
          Inicio
        </NavLink>

        <NavLink to="/props" style={linkStyle}>
          Props
        </NavLink>

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
      </div>
    </header>
  );
};