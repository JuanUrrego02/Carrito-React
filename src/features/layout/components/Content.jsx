import React from "react";
import { useState } from "react";

export function Content() {
  const [catalogo] = useState([
    {
      id: 1,
      nombre: "Camiseta Clemont; Negra",
      precio: 140000,
      stock: 10,
      img: "/img/clemont.jpg",
    },
    {
      id: 2,
      nombre: "Pantalón Purple",
      precio: 249000,
      stock: 5,
      img: "/img/purple.jpg",
    },
    {
      id: 3,
      nombre: "Gorra Hugo Boss; Vaca-Negra",
      precio: 350000,
      stock: 3,
      img: "/img/gorra.jpg",
    },
    
  ]);

  return (
    <main
      style={{
        background: "#f5f7fa",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          gap: "25px",
        }}
      >
        {/* PRODUCTOS */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #e3e6ea",
          }}
        >
          <h4 style={{ marginBottom: "20px", fontWeight: "600" }}>
            Productos ({catalogo.length})
          </h4>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {catalogo.map((p) => (
              <div
                key={p.id}
                style={{
                  border: "1px solid #e3e6ea",
                  borderRadius: "8px",
                  overflow: "hidden",
                  background: "#fff",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                }}
              >
                <img
                  src={p.img}
                  alt={p.nombre}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />

                <div style={{ padding: "15px" }}>
                  <h6 style={{ marginBottom: "5px", fontWeight: "600" }}>
                    {p.nombre}
                  </h6>

                  <p
                    style={{
                      fontWeight: "bold",
                      marginBottom: "8px",
                      color: "#212529",
                    }}
                  >
                    COP ${p.precio.toLocaleString("es-CO")}
                  </p>

                  {/* Badge stock */}
                  <span
                    style={{
                      background:
                        p.stock > 3
                          ? "#198754"
                          : p.stock > 0
                            ? "#ffc107"
                            : "#6c757d",
                      color: "#fff",
                      padding: "5px 10px",
                      fontSize: "12px",
                      borderRadius: "6px",
                      display: "inline-block",
                      fontWeight: "500",
                    }}
                  >
                    {p.stock > 3
                      ? "En stock"
                      : p.stock > 0
                        ? "Pocas unidades"
                        : "Agotado"}
                  </span>

                  {/* Botones */}
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginTop: "12px",
                    }}
                  >
                    <button
                      style={{
                        flex: 1,
                        background: "#e7f1ff",
                        color: "#0d6efd",
                        border: "1px solid #cfe2ff",
                        padding: "6px 10px",
                        borderRadius: "6px",
                        fontSize: "13px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        fontWeight: "500",
                      }}
                    >
                      <i className="bi bi-pencil-fill"></i>
                      Editar
                    </button>

                    <button
                      style={{
                        flex: 1,
                        background: "#fde2e1",
                        color: "#dc3545",
                        border: "1px solid #f5c2c7",
                        padding: "6px 10px",
                        borderRadius: "6px",
                        fontSize: "13px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        fontWeight: "500",
                      }}
                    >
                      <i className="bi bi-trash-fill"></i>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FORMULARIO */}
        <div
          style={{
            background: "#ffffff",
            padding: "25px",
            borderRadius: "12px",
            border: "1px solid #e3e6ea",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            height: "fit-content",
          }}
        >
          <h4 style={{ marginBottom: "20px", fontWeight: "600" }}>
            Agregar producto
          </h4>

          {["Nombre", "Precio", "Stock", "URL Imagen"].map((label, i) => (
            <div key={i} style={{ marginBottom: "15px" }}>
              <label style={{ fontSize: "14px", fontWeight: "500" }}>
                {label}
              </label>
              <input
                type={label === "Precio" || label === "Stock" ? "number" : "text"}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ced4da",
                  marginTop: "6px",
                }}
              />
            </div>
          ))}

          <button
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              fontWeight: "600",
              fontSize: "15px",
              background: "#198754",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginTop: "10px",
            }}
          >
            <i className="bi bi-cart-plus-fill"></i>
            Agregar al catálogo
          </button>
        </div>
      </div>
    </main>
  );
}
