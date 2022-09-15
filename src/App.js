import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PATHS } from "./paths/paths";
import { PrivateRoute } from "./routes/privateRoutes";
import routes from "./routes/routes";

const App = () => {
  useEffect(() => {
    <Navigate from="/" to="/register" />;
  }, []);

  return (
    <div className="font-montserrat">
      <BrowserRouter>
        <Routes>
          {routes.map(({ key, path, Element }) => (
            <Route key={key} path={path} element={<Element />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
