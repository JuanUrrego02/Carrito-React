import { BrowserRouter, Routes, Route } from "react-router-dom";
import Props from "./pages/Props";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/props" element={<Props />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;