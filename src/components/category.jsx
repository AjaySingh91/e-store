import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {  getProduct } from "../fetcher";
import CategoryProducts from "./categoryProducts";
// import Home from "./home";
// import ProductDetails from "./productDetails";

const Category = ({ id, title, oncCategoryClick }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseObj = await getProduct(categoryId);
      setProducts(responseObj);
    };
    fetchData();
  }, [categoryId]);

  const renderProducts = () => { 
    return products.map((p) => (
      <>
      <CategoryProducts key={p.id} {...p}>
        {p.title}
      </CategoryProducts>
    </>
    ));
  };

  return (
    <div>
      <h1 className="product-Heading text-2xl ml-5 my-5">Products</h1>
      {products && renderProducts()}
    </div>
  );
};

export default Category;
