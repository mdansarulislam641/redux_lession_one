import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import productReducer from '../redux/reducers/productReducer';
import ProductCard from './ProductsCard';

const Home = () => {
    const [products , setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProducts(data))
    },[]);
   const state = useSelector(productReducer);
   console.log(state)
    return (
        <div className='grid grid-cols-3 gap-5 space-y-3'>
           {
            products?.map((product,idx) => <ProductCard
                key={idx}
                product ={product}
            ></ProductCard>)
           }
        </div>
    );
};

export default Home;