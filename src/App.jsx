import { useState, useEffect } from "react";
import "./App.css";
import { fetcher } from "./fetcher";
import ProductDetails from "./components/productDetails";
import Basket from "./components/basket";
import Checkout from "./components/checkout";
import Category from './components/category';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import OrderConfirmation from "./components/orderConfirmation";
import SeaarchResult from "./components/seaarchResult";


function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetcher("/categories");
      console.log(data);
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <>
       <BrowserRouter>
    <Routes > 
      <Route path="/" element={<Layout categories={categories} />}>
        <Route index element={<Home />} />
      <Route path="basket" element={<Basket />}/>
      <Route path="checkout" element={<Checkout />}/>
      <Route path="OrderConfirmation" element={<OrderConfirmation />}/>
      <Route path="categories/:categoryId/products/:productId" element={<ProductDetails />}/>
      <Route path="basket/products/:productId" element={<ProductDetails />}/>
      <Route path="categories/:categoryId" element={<Category />}/>
      <Route path="search" element={<SeaarchResult />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
