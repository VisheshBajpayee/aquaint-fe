import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

const App = () => {
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
