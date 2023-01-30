import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { brandToggleAction, stockToggleAction } from '../redux/actionCreators/brandToggleAction';

import ProductCard from './ProductsCard';

const Home = () => {
    const dispatch = useDispatch();

    const [products , setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data =>setProducts(data.data))
    },[]);
   const filter = useSelector((state)=> state.filter.filters);
   const {brand , stock} = filter ;
   console.log(brand)
  
    return (
        
       <div>
        <div className='flex gap-5 my-10 justify-end px-5'>
            <button onClick={()=>dispatch(stockToggleAction())} className='px-3 hover:bg-indigo-500 hover:text-white duration-300 font-bold py-2 rounded-xl border-indigo-500 border-2'>InStock</button>
            <button  onClick={()=>dispatch(brandToggleAction("amd"))} className='px-3 hover:bg-indigo-500  hover:text-white duration-300 font-bold py-2 rounded-xl border-indigo-500 border-2'>AMD</button>
            <button  onClick={()=>dispatch(brandToggleAction("Intel"))} className='px-3 font-bold hover:bg-indigo-500 py-2 rounded-xl border-indigo-300 hover:text-white duration-300 border-2'>Intel</button>
        </div>
         <div className='grid grid-cols-3 gap-5 space-y-3'>
           {
            products?.map((product,idx) => <ProductCard
                key={idx}
                product ={product}
            ></ProductCard>)
           }
        </div>
       </div>
    );
};

export default Home;