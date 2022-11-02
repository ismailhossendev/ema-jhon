import React from 'react';
import { useLoaderData, } from 'react-router-dom';
import Summary from '../Summary/Summary';
const OrderPreview = () => {
    const {products} = useLoaderData()
    console.log(products);


    return (
        <div>
            <Summary products={products} ></Summary>
        </div>
    );
};

export default OrderPreview;