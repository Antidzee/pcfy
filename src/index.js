import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import UserInfo from "pages/UserInfo";
import LaptopForm from "pages/LaptopFormPage";
import ProductPage from "pages/ProductPage";
import { SuccessForm } from "components/SuccessForm";
import { LaptopInfo } from "components/LaptopInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="user-info" element={<UserInfo />} />
        <Route path="laptop-form" element={<LaptopForm />} />
        <Route path="product-page" element={<ProductPage />} />
        <Route path="success-window" element={<SuccessForm />} />
        <Route path="laptop-info" element={<LaptopInfo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
