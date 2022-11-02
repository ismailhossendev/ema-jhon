import React from 'react';

const Product = (props) => {
    const { img, name, price, ratings, seller, id } = props.product;
    return (
        <div className='border border-[#95A0A7] rounded-[8px] relative'>
            <div className="p-2">
            <img className='h-72 rounded-sm p-2' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings} star</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='
            bg-[#FFE0B3]
             w-full
              py-1
               rounded-md
                absolute bottom-0
                 hover:bg-yellow-300
            '>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;