import React, { Children } from 'react';
import { getOldData } from '../../utilites/LsManager';

const Summary = ({ products,cartEmpty }) => {
    const test = getOldData();
    let seletedItem = 0
    let sorted = []
    for(const id in test){
       const sortedProducts =  products.find(product => product.id === id);
       sorted.push(sortedProducts)
       let values = test[id]
       seletedItem = seletedItem + values
    }
    let totalPrice = 0
    let shippingCharge = 0
    if(!(sorted[0] === undefined)){
        for(let product of sorted){
            console.log(product);
            totalPrice = totalPrice + product.price * product.quantity;
            shippingCharge = shippingCharge + product.shipping;
            // seletedItem = seletedItem + product.quantity
            
        }
    }
    let tax = (totalPrice * 0.10).toFixed(2);
    let grandTotal = totalPrice + parseFloat(tax) + shippingCharge;



    return (
        <div>
            <h1 className='text-2xl text-center mb-2'>Order Summary</h1>
            <div className="p-3">
                <p>Selected Items: {seletedItem}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shippingCharge}</p>
                <p>Tax: ${tax}</p>
                <h3 className='text-2xl'>Grand Total: ${grandTotal}</h3>
            </div>
            <button onClick={cartEmpty}  className='bg-red-500 w-full p-2 rounded font-semibold text-white hover:bg-blue-500 mb-2 hover:text-black'>Clear Cart</button>
            <button className='bg-red-900 w-full p-2 rounded font-semibold text-white hover:bg-blue-500 hover:text-black'>Order Preview</button>
        </div>
    );
};

export default Summary;