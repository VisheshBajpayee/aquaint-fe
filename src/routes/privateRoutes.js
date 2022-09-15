import { useLocation, Navigate } from "react-router-dom";
import { PATHS } from "../paths/paths";
export const PrivateRoute = () => {
  const location = useLocation();
  return location.pathname === "/" && <Navigate to={PATHS.registerPage} />;
};
