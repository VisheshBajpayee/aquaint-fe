import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes/routes";
import store from "./store";

const App = () => {
  return (
    <div className="font-montserrat">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {routes.map(({ key, path, Element }) => (
              <Route key={key} path={path} element={<Element />} />
            ))}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
