import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Admin from "./Components/Admin/Admin.jsx";
import { Provider } from "react-redux";
import store from "./App/Store.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route Component={Admin} path="/admin"></Route>
          <Route Component={App} path="/"></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
