import React, {useContext} from 'react'
import { Link ,useNavigate } from 'react-router-dom';          // use to navigate another page
import { CartContext } from '../context/cartContext';


const CategoryProducts = ({ id,title, image,specs, features ,price, stock}) => {
    const navigate = useNavigate();    // another property to navigate another page from somewhere

    const {addProduct} = useContext(CartContext); 

  return (
    <article>
        <div className='category-product-tittle font-bold text-2xl ml-10 mt-5 '> <Link to={`products/${id}`}> {title}</Link></div>

        <div className="categoriesfeatures flex space-x-10 space-y-10">
        <figure>
            <div className='category-product-image-container'>
                <img className='h-72 m-5' src={`/assets/${image}`} alt={title}/>
            </div>
        </figure> 

        <aside> 
            <div className="category-product-info-dimentions md:w-96">
                <h3 className='text-xl font-bold'>Dimensions</h3>
                <label>{specs.dimensions}</label>
            </div>
            {specs.capacity &&
            <div className="category-product-info-capacity">
                <h3 className='text-xl font-bold'> Capacity</h3>
                <label>{specs.capacity}</label>
            </div>
            }

            <div className="category-product-info-features">
                <h3 className='text-xl font-bold'>Features</h3>
                <ul>
                    {features?.map((f,i) => {
                        return <li key={`feature${i}`} className='list-disc'>{f}</li>
                    })}
                </ul>
            </div>
        </aside>

        <div className='category-product-finance md:w-32 space-y-2 ml-32'>
            <div className="category-product-finance-price">
               <div className='bg-red-500 rounded-md w-20 font-bold text-xl pl-3 h-fit  p-1'> &pound;{price}</div>
            </div>
            <div className='bg-slate-300 rounded-md w-fit h-fit p-1 '>
                <p > Stock Level: {stock}</p>
                <p > Free Delivery</p>
            </div>

            <div className="category-product-action">
                <button onClick={() => navigate(`products/${id}`)} className='bg-slate-500 cursor-pointer p-1 px-2 rounded-md mb-1'>View Product</button>
                <button className='bg-slate-500 cursor-pointer p-1 rounded-md' onClick={() => addProduct({id,title,price})}>Add To Basket</button>
            </div>
        </div>
        </div>
    </article>

  )
}

export default CategoryProducts