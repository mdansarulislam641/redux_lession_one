import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductsCard';

const Card = () => {
    const cards = useSelector(state =>state.card);
    console.log(cards)
    return (
        <div className='grid grid-cols-3 gap-5'>
            {cards?.sort((a,b)=> b.id - a.id).map((product,idx) => <ProductCard
            key={idx}
            product={product}
            ></ProductCard>)}
        </div>
    );
};

export default Card;