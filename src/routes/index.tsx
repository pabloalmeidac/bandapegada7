import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<p> Pagina inicial</p>} />

      <Route path="*" element={ <Navigate to="/home" />} />
    </Routes>
  );
}