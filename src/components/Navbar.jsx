import React from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from 'react-icons/io5';
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='w-full h-24 flex justify-between items-center px-8'>
        <div className='w-16 h-16 flex justify-center items-center rounded-md ml-18'>
            <div className='flex items-center gap-2'>
                <MdFastfood className='w-8 h-8 text-green-500'/>
                <h2 className='flex font-semibold md:text-3xl text-xl'>Fast<span className='text-green-500'>Food</span></h2>
            </div>
        </div>
        <form className='flex items-center w-1/2 h-14 px-5 gap-5 bg-white rounded-xl'>
            <IoSearch className='w-5 h-5 text-gray-500'/>
            <input type='text' placeholder='Search Items...' className='w-full outline-none text-lg'></input>
        </form>
        <div className='relative w-16 h-16 flex justify-center items-center mr-10'>
            <span className='absolute top-1 right-2 font-bold text-green-900'>0</span>
            <FaCartShopping className='w-8 h-8 text-green-500'/>
        </div>
    </div>
  )
}

export default Navbar