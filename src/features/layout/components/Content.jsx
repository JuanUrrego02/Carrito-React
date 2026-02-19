import { useState, useEffect } from "react";

const font = "'Segoe UI', system-ui, sans-serif";

const btn = (extra = {}) => ({
  fontFamily: font,
  cursor: "pointer",
  border: "none",
  ...extra,
});

const input = (extra = {}) => ({
  fontFamily: font,
  fontSize: "0.85rem",
  padding: "7px 10px",
  borderRadius: "6px",
  border: "1px solid #d1d5db",
  outline: "none",
  color: "#111827",
  background: "#fff",
  ...extra,
});

let nextId = 3;

export function Content({ onActualizarCarrito }) {
  const [catalogo, setCatalogo] = useState([
    { id: 1, nombre: "Camisa", precio: 20000 },
    { id: 2, nombre: "Zapatos", precio: 80000 },
  ]);

  const [carrito, setCarrito] = useState([]);

  // Modal state
  const [modal, setModal] = useState(null); // null | "agregar" | "actualizar" | "eliminar"
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [form, setForm] = useState({ nombre: "", precio: "" });

  useEffect(() => {
    const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    onActualizarCarrito(total);
  }, [carrito]);

  // ── Carrito ──
  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((p) => p.id === producto.id);
    if (existe) {
      actualizarCantidad(producto.id, existe.cantidad + 1);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const actualizarCantidad = (id, cantidad) => {
    if (cantidad <= 0) { eliminarDelCarrito(id); return; }
    setCarrito(carrito.map((p) => (p.id === id ? { ...p, cantidad } : p)));
  };

  const eliminarDelCarrito = (id) => setCarrito(carrito.filter((p) => p.id !== id));

  const subtotal = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  // ── Catalogo ──
  const abrirAgregar = () => {
    setForm({ nombre: "", precio: "" });
    setProductoSeleccionado(null);
    setModal("agregar");
  };

  const abrirActualizar = (p) => {
    setForm({ nombre: p.nombre, precio: p.precio });
    setProductoSeleccionado(p);
    setModal("actualizar");
  };

  const abrirEliminar = (p) => {
    setProductoSeleccionado(p);
    setModal("eliminar");
  };

  const cerrarModal = () => {
    setModal(null);
    setProductoSeleccionado(null);
    setForm({ nombre: "", precio: "" });
  };

  const confirmarAgregar = () => {
    if (!form.nombre.trim() || !form.precio) return;
    const nuevo = { id: nextId++, nombre: form.nombre.trim(), precio: Number(form.precio) };
    setCatalogo([...catalogo, nuevo]);
    cerrarModal();
  };

  const confirmarActualizar = () => {
    if (!form.nombre.trim() || !form.precio) return;
    setCatalogo(catalogo.map((p) =>
      p.id === productoSeleccionado.id
        ? { ...p, nombre: form.nombre.trim(), precio: Number(form.precio) }
        : p
    ));
    // Actualizar también en carrito si existe
    setCarrito(carrito.map((p) =>
      p.id === productoSeleccionado.id
        ? { ...p, nombre: form.nombre.trim(), precio: Number(form.precio) }
        : p
    ));
    cerrarModal();
  };

  const confirmarEliminar = () => {
    setCatalogo(catalogo.filter((p) => p.id !== productoSeleccionado.id));
    eliminarDelCarrito(productoSeleccionado.id);
    cerrarModal();
  };

  return (
    <>
      {/* ── Modal overlay ── */}
      {modal && (
        <div
          onClick={cerrarModal}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.35)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 200, fontFamily: font,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "1.8rem",
              width: "340px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
            }}
          >
            {/* Agregar */}
            {modal === "agregar" && (
              <>
                <p style={{ margin: "0 0 0.2rem", fontWeight: 700, fontSize: "1rem", color: "#111827" }}>Agregar producto</p>
                <p style={{ margin: "0 0 1.2rem", fontSize: "0.82rem", color: "#9ca3af" }}>Ingresa los datos del nuevo producto</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "1.2rem" }}>
                  <input
                    style={input({ width: "100%", boxSizing: "border-box" })}
                    placeholder="Nombre del producto"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  />
                  <input
                    style={input({ width: "100%", boxSizing: "border-box" })}
                    placeholder="Precio"
                    type="number"
                    min="0"
                    value={form.precio}
                    onChange={(e) => setForm({ ...form, precio: e.target.value })}
                  />
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={cerrarModal} style={btn({ flex: 1, padding: "9px", borderRadius: "7px", background: "#f3f4f6", color: "#374151", fontSize: "0.875rem", fontWeight: 500 })}>Cancelar</button>
                  <button onClick={confirmarAgregar} style={btn({ flex: 1, padding: "9px", borderRadius: "7px", background: "#111827", color: "#fff", fontSize: "0.875rem", fontWeight: 600 })}>Agregar</button>
                </div>
              </>
            )}

            {/* Actualizar */}
            {modal === "actualizar" && (
              <>
                <p style={{ margin: "0 0 0.2rem", fontWeight: 700, fontSize: "1rem", color: "#111827" }}>Actualizar producto</p>
                <p style={{ margin: "0 0 1.2rem", fontSize: "0.82rem", color: "#9ca3af" }}>Modifica los datos de <strong>{productoSeleccionado?.nombre}</strong></p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "1.2rem" }}>
                  <input
                    style={input({ width: "100%", boxSizing: "border-box" })}
                    placeholder="Nombre del producto"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  />
                  <input
                    style={input({ width: "100%", boxSizing: "border-box" })}
                    placeholder="Precio"
                    type="number"
                    min="0"
                    value={form.precio}
                    onChange={(e) => setForm({ ...form, precio: e.target.value })}
                  />
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={cerrarModal} style={btn({ flex: 1, padding: "9px", borderRadius: "7px", background: "#f3f4f6", color: "#374151", fontSize: "0.875rem", fontWeight: 500 })}>Cancelar</button>
                  <button onClick={confirmarActualizar} style={btn({ flex: 1, padding: "9px", borderRadius: "7px", background: "#111827", color: "#fff", fontSize: "0.875rem", fontWeight: 600 })}>Guardar</button>
                </div>
              </>
            )}

            {/* Eliminar */}
            {modal === "eliminar" && (
              <>
                <p style={{ margin: "0 0 0.2rem", fontWeight: 700, fontSize: "1rem", color: "#111827" }}>Eliminar producto</p>
                <p style={{ margin: "0 0 1.4rem", fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.5 }}>
                  ¿Seguro que quieres eliminar <strong style={{ color: "#111827" }}>{productoSeleccionado?.nombre}</strong> del catalogo? Esta accion no se puede deshacer.
                </p>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={cerrarModal} style={btn({ flex: 1, padding: "9px", borderRadius: "7px", background: "#f3f4f6", color: "#374151", fontSize: "0.875rem", fontWeight: 500 })}>Cancelar</button>
                  <button onClick={confirmarEliminar} style={btn({ flex: 1, padding: "9px", borderRadius: "7px", background: "#ef4444", color: "#fff", fontSize: "0.875rem", fontWeight: 600 })}>Eliminar</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <main style={{
        background: "#f3f4f6",
        minHeight: "calc(100vh - 56px)",
        padding: "2.5rem 2rem",
        fontFamily: font,
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: "1.5rem",
          alignItems: "start",
        }}>

          {/* ── Columna izquierda ── */}
          <div>

            {/* Productos disponibles */}
            <div style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              border: "1px solid #e5e7eb",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <h6 style={{ margin: 0, color: "#6b7280", fontSize: "0.7rem", letterSpacing: "1.2px", textTransform: "uppercase" }}>
                  Productos disponibles
                </h6>
                {/* Boton Agregar producto */}
                <button
                  onClick={abrirAgregar}
                  style={btn({
                    background: "#111827",
                    color: "#fff",
                    borderRadius: "6px",
                    padding: "6px 14px",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                  })}
                >
                  + Nuevo producto
                </button>
              </div>

              {catalogo.length === 0 ? (
                <p style={{ color: "#d1d5db", fontSize: "0.88rem", textAlign: "center", padding: "1rem 0", margin: 0 }}>
                  No hay productos en el catalogo
                </p>
              ) : (
                catalogo.map((p, i) => (
                  <div key={p.id} style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 0",
                    borderTop: i > 0 ? "1px solid #f3f4f6" : "none",
                  }}>
                    <div>
                      <p style={{ margin: 0, fontWeight: 600, color: "#111827", fontSize: "0.95rem" }}>{p.nombre}</p>
                      <p style={{ margin: 0, color: "#6b7280", fontSize: "0.85rem" }}>
                        ${p.precio.toLocaleString("es-CO")}
                      </p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      {/* Boton Actualizar */}
                      <button
                        onClick={() => abrirActualizar(p)}
                        style={btn({
                          background: "#f3f4f6",
                          color: "#374151",
                          borderRadius: "6px",
                          padding: "6px 12px",
                          fontSize: "0.78rem",
                          fontWeight: 500,
                          border: "1px solid #e5e7eb",
                        })}
                      >
                        Editar
                      </button>

                      {/* Boton Eliminar catalogo */}
                      <button
                        onClick={() => abrirEliminar(p)}
                        style={btn({
                          background: "#fff0f0",
                          color: "#ef4444",
                          borderRadius: "6px",
                          padding: "6px 12px",
                          fontSize: "0.78rem",
                          fontWeight: 500,
                          border: "1px solid #fecaca",
                        })}
                      >
                        Eliminar
                      </button>

                      {/* Boton Agregar al carrito */}
                      <button
                        onClick={() => agregarAlCarrito(p)}
                        style={btn({
                          background: "#111827",
                          color: "#fff",
                          borderRadius: "6px",
                          padding: "6px 14px",
                          fontSize: "0.78rem",
                          fontWeight: 600,
                        })}
                      >
                        Agregar
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Carrito */}
            <div style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "1.5rem",
              border: "1px solid #e5e7eb",
            }}>
              <h6 style={{ margin: "0 0 4px", fontWeight: 700, fontSize: "1.1rem", color: "#111827" }}>
                Tu carrito
              </h6>
              <p style={{ margin: "0 0 1.2rem", color: "#9ca3af", fontSize: "0.85rem" }}>
                {carrito.length === 0
                  ? "No hay productos aun"
                  : `${carrito.reduce((a, p) => a + p.cantidad, 0)} producto${carrito.reduce((a, p) => a + p.cantidad, 0) !== 1 ? "s" : ""} en tu carrito`}
              </p>

              {carrito.length === 0 ? (
                <div style={{
                  textAlign: "center",
                  padding: "2rem",
                  color: "#d1d5db",
                  background: "#f9fafb",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                }}>
                  Agrega productos desde arriba
                </div>
              ) : (
                carrito.map((p, i) => (
                  <div key={p.id} style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 0",
                    borderTop: i > 0 ? "1px solid #f3f4f6" : "none",
                  }}>
                    <div style={{
                      width: "54px", height: "54px",
                      borderRadius: "8px",
                      flexShrink: 0, marginRight: "14px",
                      overflow: "hidden",
                    }}>
                      <img
                        src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80"
                        alt={p.nombre}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>

                    <div style={{ flex: 1 }}>
                      <p style={{ margin: "0 0 2px", fontWeight: 600, color: "#111827", fontSize: "0.95rem" }}>
                        {p.nombre}
                      </p>
                      <p style={{ margin: "0 0 8px", color: "#9ca3af", fontSize: "0.78rem" }}>
                        ${p.precio.toLocaleString("es-CO")} c/u
                      </p>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <button onClick={() => actualizarCantidad(p.id, p.cantidad - 1)} style={btn({ background: "#f3f4f6", color: "#374151", width: "26px", height: "26px", borderRadius: "4px", fontSize: "1rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" })}>−</button>
                        <span style={{ width: "20px", textAlign: "center", fontWeight: 600, fontSize: "0.9rem", color: "#111827" }}>{p.cantidad}</span>
                        <button onClick={() => actualizarCantidad(p.id, p.cantidad + 1)} style={btn({ background: "#f3f4f6", color: "#374151", width: "26px", height: "26px", borderRadius: "4px", fontSize: "1rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" })}>+</button>
                      </div>
                    </div>

                    <div style={{ textAlign: "right" }}>
                      <p style={{ margin: "0 0 8px", fontWeight: 700, color: "#111827", fontSize: "0.95rem" }}>
                        ${(p.precio * p.cantidad).toLocaleString("es-CO")}
                      </p>
                      <button onClick={() => eliminarDelCarrito(p.id)} style={btn({ background: "transparent", color: "#ef4444", fontSize: "0.78rem", fontWeight: 500, padding: 0, textDecoration: "underline" })}>
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* ── Columna derecha: resumen ── */}
          <div style={{
            background: "#fff",
            borderRadius: "10px",
            padding: "1.5rem",
            border: "1px solid #e5e7eb",
            position: "sticky",
            top: "72px",
          }}>
            <h6 style={{ margin: "0 0 1.2rem", fontWeight: 700, fontSize: "1rem", color: "#111827" }}>
              Resumen del pedido
            </h6>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span style={{ color: "#6b7280", fontSize: "0.88rem" }}>Subtotal</span>
              <span style={{ color: "#111827", fontSize: "0.88rem", fontWeight: 500 }}>${subtotal.toLocaleString("es-CO")}</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span style={{ color: "#6b7280", fontSize: "0.88rem" }}>Envio</span>
              <span style={{ color: "#111827", fontSize: "0.88rem", fontWeight: 500 }}>{subtotal > 0 ? "$9.900" : "$0"}</span>
            </div>

            <div style={{ borderTop: "1px solid #e5e7eb", margin: "14px 0" }} />

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.2rem" }}>
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "#111827" }}>Total</span>
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "#111827" }}>
                ${(subtotal + (subtotal > 0 ? 9900 : 0)).toLocaleString("es-CO")}
              </span>
            </div>

            <button
              disabled={carrito.length === 0}
              style={btn({
                width: "100%", background: carrito.length === 0 ? "#d1d5db" : "#111827",
                color: "#fff", borderRadius: "7px", padding: "11px",
                fontSize: "0.9rem", fontWeight: 600, marginBottom: "10px",
                cursor: carrito.length === 0 ? "not-allowed" : "pointer",
              })}
            >
              Finalizar compra
            </button>

            <button style={btn({ width: "100%", background: "#fff", color: "#374151", borderRadius: "7px", padding: "10px", fontSize: "0.9rem", fontWeight: 500, border: "1px solid #d1d5db" })}>
              Seguir comprando
            </button>
          </div>

        </div>
      </main>
    </>
  );
}