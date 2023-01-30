import React from 'react';
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCard, removeCard } from '../redux/actionCreators/productAction';
import {MdDeleteForever} from 'react-icons/md';

const ProductCard = ({product}) => {
    const disPatch = useDispatch();
    const {pathname} = useLocation()
   
    return (
        <div
        className='shadow-lg relative rounded-3xl border  p-3 flex flex-col text-indigo-900'
        key={product._id}
      >
        {pathname.includes("card") && <div className='bg-indigo-500 absolute top-2 right-2 grid place-items-center w-8 h-8 rounded-full text-white text-center'>
          <p className=''>{product?.quantity}</p>
        </div>}
        <div className='h-52 w-52 mx-auto'>
          <img src={product.image} alt={product.model} />
        </div>
        <h1 className='font-bold text-center'>{product.model}</h1>
        <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
        <div className=' flex-1'>
          <ul className='space-y-2'>
            {product.keyFeature.map((feature,idx) => {
              return <li key={idx} className='text-sm '>{feature}</li>;
            })}
          </ul>
        </div>
        <div className='flex gap-2 mt-5'>
         { !pathname.includes('card') && <button
            className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
          onClick={()=>disPatch(addToCard(product))}
          >
            Add to cart
          </button>}
        { pathname.includes('card') &&  <button
            onClick={()=>disPatch(removeCard(product))}
          className='px-3 py-1 text-xl flex items-center w-3/4 mx-auto justify-center bg-red-600 text-white rounded-2xl'>
            Delete <MdDeleteForever size={24}/> 
          </button>}
         { !pathname.includes('card') && <button
          
            title='Add to wishlist'
            className='bg-indigo-500  py-1 px-2 rounded-full'
          >
            <BiListPlus className='text-white' />
          </button>}
        </div>
      </div>
    );
};

export default ProductCard;