import React, { useEffect, useState } from 'react';
import ProductCard from './ProductsCard';

const Home = () => {
    const [products , setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProducts(data))
    },[])
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