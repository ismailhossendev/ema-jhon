import React, { useEffect, useState } from 'react';
import { getOldData, setLs } from '../../utilites/LsManager';
import Product from '../Product/Product';
import Summary from '../Summary/Summary';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cartProduct,setCartProduct] = useState([])
    const [count,setCount] = useState(0)
    const [page,setPage] = useState(0);
    const [size,setSize] = useState(10);

    
    useEffect(() => {
        fetch(`http://localhost:5000/products?size=${size}&page=${page}`)
        .then(res => res.json())
        .then(data => {
            setProducts(data.products)
            setCount(data.count);
        })
    },[size,page])
    const pages = Math.ceil(count / size);
    useEffect(()=>{
        const data = getOldData()
        const oldData = [];
        if(data){
            for(const id in data){
                const test = products.find(product => {
                    if(id === product.id){
                        product.quantity = data[id]
                    };
                    return (product.id === id)
                });
                oldData.push(test)
            }
            if(!(oldData[0] === undefined)){
                setCartProduct(oldData)
            }
        }
        

    },[products])
    const handleAddToCart = (product) => {   

        const newProducts = [...cartProduct, product]

        setCartProduct(newProducts)
        setLs(product.id)
        
    }

    const productCartEmpty = () => {
        setCartProduct([])
        localStorage.clear()
    }
    //handle using for - value
    const handlePrevious = () =>{
        if(page){
            setPage(page -1)
        }
    }

    const handleNext = () =>{
        if((pages -1) > page){
            setPage(page +1)
        }
    }

    return (
        <>
        <div className="flex justify-center space-x-1 text-gray-100 my-5" bis_skin_checked="1">
            <button onClick={handlePrevious} title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>

            {
                [...Array(pages).keys()].map(num => <button onClick={()=>setPage(num)} className={`w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-900 text-gray-100 ${page === num && "border-blue-900 bg-red-600"} `}>
                    {num + 1}</button>)
            }
            
            <button onClick={handleNext} title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
            <div className='grid grid-cols-5 lg:w-10/12 mx-auto mt-5'>
                <div className='col-span-4 border  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3'>
                    {
                        products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div className='border border-red-900 bg-[#FF99004D]'>
                    <Summary products={products} cartEmpty={productCartEmpty}></Summary>   
                </div>
            </div>
        </>
    );
};

export default Products;