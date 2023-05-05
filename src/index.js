import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CartContextProvider from "./context/cartContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
   <App />
    </CartContextProvider>
  </React.StrictMode>
);
