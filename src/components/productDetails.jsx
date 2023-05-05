import React, { useState } from 'react'
import { getProductById } from '../fetcher';
// import { CartContext } from '../context/cartContext';
// import { useContext } from 'react';

import { useParams } from 'react-router-dom'  // use for fetching URL and getting parameter

function ProductDetails({id,title,price}) {

    const params = useParams();
    const [product, setProduct] = useState({});
    
    // const {addProduct} = useContext(CartContext); 

  React.useEffect(() =>{
    const fetchData = async () =>{
      const responseObj = await getProductById(params.productId);
      setProduct(responseObj);
    }
    fetchData();
  }, [params.productId]); 

  const createMarkup = () =>{                          // check from where it is called use for dangerously changing the html with react function
    return{__html: product.description}
  }

  return (
    <article>
        <div className='category-product-tittle font-bold text-2xl ml-10 mt-5 '>{product.title}</div>

        <div className="categoriesfeatures flex space-x-10 space-y-10">
        <figure>
            <div className='category-product-image-container'>
                <img className='h-72 m-5' src={`/assets/${product.image}`} alt={product.title}/>
            </div>
        </figure> 

        <aside>
            <div className="category-product-info-dimentions md:w-96">
                <h3 className='text-xl font-bold'>Dimensions</h3>
                <label>{product.specs?.dimensions}</label>
            </div>
            {product.specs?.capacity &&
            <div className="category-product-info-capacity">
                <h3 className='text-xl font-bold'> Capacity</h3>
                <label>{product.specs?.capacity}</label>
            </div>
            }

            <div className="category-product-info-features">
                <h3 className='text-xl font-bold'>Features</h3>
                <ul>
                    {product.features?.map((f,i) => {
                        return <li key={`feature${i}`} className='list-disc'>{f}</li>
                    })}
                </ul>
            </div>
        </aside>

        <div className='category-product-finance md:w-32 space-y-2 ml-32'> 
            <div className="category-product-finance-price">
               <div className='bg-red-500 rounded-md w-20 font-bold text-xl pl-3 h-fit  p-1'> &pound;{product.price}</div>
            </div>
            <div className='bg-slate-300 rounded-md w-fit h-fit p-1 '>
                <p > Stock Level: {product.stock}</p>
                <p > Free Delivery</p>
            </div>

            <div className="category-product-action">
                {/* <button className='bg-slate-500 cursor-pointer p-1 rounded-md' onClick={() => addProduct({id,title,price})}>Add To Basket</button> */}
            </div>
        </div>
        </div>

        <div className='desc ml-10' dangerouslySetInnerHTML={createMarkup()}></div>

    </article>
  )
}

export default ProductDetails