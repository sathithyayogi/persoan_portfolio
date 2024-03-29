import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <div className="cursor-pointer">
            <Link className='text-[#00df9a] uppercase font-bold cursor-pointer' to={"/"}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Sathithya Yogi MP 🧘🏽</h1>
            </Link>
            <h3>Do What Excites 🤟🏼</h3>
            </div>
            {/* <ul className='md:flex hidden'>
                <li className='p-4'>Home 🏡</li>
                <li className='p-4'>Find Me 🌎</li>
                <li className='p-4'>Things I ❤️</li>
            </ul> */}
            {/* <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : 'fixed left-[-100%] ease-in-out duration-500'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Sathithya Yogi MP</h1>
                <ul className='p-4 uppercase'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Find Me 🌎</li>
                    <li className='p-4 border-b border-gray-600'>Things I ❤️</li>
                </ul>
            </div> */}
        </div>
    )
}

export default Navbar