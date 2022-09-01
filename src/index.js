import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import UserInfo from "pages/UserInfo";
import LaptopInfo from "pages/LaptopInfo";
import { ProductList } from "components/ProductList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="user-info" element={<UserInfo />} />
        <Route path="laptop-info" element={<LaptopInfo />} />
        <Route path="product-list" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
