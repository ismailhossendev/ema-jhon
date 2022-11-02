import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Logo.svg'
const Header = () => {
    return (
        <div>
            <header className='bg-[#1C2B35]'>
                <nav className='flex justify-between w-9/12 mx-auto'>
                    <img src={logo} alt="" />
                    <ul className='flex text-white items-center gap-3'>
                        <li>Home</li>
                        <li>Product</li>
                        <li> <Link to='/orders'>Orders</Link></li>
                        <li>Store</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;