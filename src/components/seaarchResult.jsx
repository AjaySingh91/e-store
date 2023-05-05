import React from 'react'
import { getProductByQuerry } from '../fetcher'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import CategoryProducts from './categoryProducts';

function SeaarchResult() {
    const [products, setProducts] = useState([]);

    const [searchParams] = useSearchParams();
    const query = searchParams.get('s');

    useEffect(() => {
        const fetchData = async () => {
          const responseObj = await getProductByQuerry(query);
          setProducts(responseObj);
        };
        fetchData();
      }, [query]);

      const renderProducts = () => {
        if(products.length >0 ){
        return products.map((p) => (
          <CategoryProducts key={p.id} {...p}>
            {p.title}
          </CategoryProducts>
        ));} else{
           return <div>No result found</div>
        }
      };


  return (
    <div>
    <h1 className="product-Heading text-2xl ml-5 my-5">Products</h1>
    {renderProducts()}
  </div>
  )
}

export default SeaarchResult