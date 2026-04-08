# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Descripción

Manchester Clothing Store es una aplicación web desarrollada para la gestión de una tienda de ropa.
Permite visualizar productos, agregar nuevos artículos al catálogo, editar información existente y eliminar productos.

Su propósito principal es facilitar la administración básica de inventario en una tienda virtual de manera sencilla e intuitiva.

Características Principales

✔️ Visualización dinámica de productos.

✔️ Muestra nombre, precio en COP y estado de stock.

✔️ Indicadores visuales de disponibilidad:

🟢 En stock

🟡 Pocas unidades

✔️ Formulario para agregar nuevos productos.

✔️ Botones para editar y eliminar productos.

✔️ Contador dinámico de productos en el carrito (0 productos).

✔️ Diseño moderno y limpio.

Interfaz Gráfica

La interfaz está dividida en tres secciones principales:

🔹 1. Barra Superior (Header)

Nombre de la tienda: Manchester Clothing Store

Subtítulo: Tu tienda de ropa favorita

Menú de navegación: Inicio | Props | Carrito (contador de productos)

🔹 2. Sección de Productos

Tarjetas individuales por producto.

Cada tarjeta incluye:

Imagen

Nombre del producto

Precio en COP

Estado del stock

Botones: Editar y Eliminar

Diseño basado en tarjetas (Cards), con separación clara y estilo minimalista.

🔹 3. Panel Lateral – Agregar Producto

Formulario con campos:

Nombre

Precio

Stock

URL Imagen

Botón: Agregar al catálogo

Permite registrar nuevos productos de forma rápida.

Arquitectura del Proyecto

Basado en lo que se observa (localhost:5173 → típico de Vite):

🔹 Tecnologías Probables

React (por estructura de componentes)

Vite (servidor de desarrollo)

CSS o framework como Bootstrap/Tailwind

Manejo de estado con useState

🔹 Estructura Posible
src/
 ├── components/
 │    ├── Header.jsx
 │    ├── ProductCard.jsx
 │    ├── ProductList.jsx
 │    └── ProductForm.jsx
 │
 ├── App.jsx
 ├── main.jsx
 └── styles.css
🔹 Patrón Utilizado

Arquitectura basada en componentes.

Flujo de datos unidireccional.

Estado central en el componente principal (App).

Props para pasar información a componentes hijos.

Datos Importantes del Autor

(Aquí puedes completar con tu información personal si es para entregar como proyecto académico)

Nombre del desarrollador: Juan David Urrego Patiño

Programa de formación: ADSO (Análisis y Desarrollo de Software)

Institución: SENA

Año: 2026

Instructor: Carlos Andres Castro Jaramillo

Tecnologías utilizadas: React + Vite + CSS

Tipo de proyecto: CRUD básico de inventario
