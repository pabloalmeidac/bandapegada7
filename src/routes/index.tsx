import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts/ThemeContext";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  return (
    <Routes>
      <Route path="/home" element={<Button variant="contained" color="primary" onClick={ toggleTheme }>Mudar tema</Button>} />

      <Route path="*" element={ <Navigate to="/home" />} />

    </Routes>
  );
}