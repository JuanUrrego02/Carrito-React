import { HashRouter, Routes, Route } from "react-router-dom";
import Props from "./pages/Props";

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/props" element={<Props />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;