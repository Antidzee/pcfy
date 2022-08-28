import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { UserForm } from "components/UserForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="userform" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
