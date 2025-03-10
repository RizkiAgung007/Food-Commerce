import React from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from 'react-icons/io5';
import { LuShoppingBag } from 'react-icons/lu';

const Navbar = () => {
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-8'>
        <div className='w-[60px] h-[60px] flex justify-center items-center rounded-md ml-10'>
            <div className='flex items-center gap-2'>
                <MdFastfood className='w-[30px] h-[30px] text-green-500'/>
                <h2 className='flex font-semibold md:text-3xl text-xl'>Fast<span className='text-green-500'>Food</span></h2>
            </div>
        </div>
        <form action='' className='flex items-center'>
            <IoSearch />
            <input type='text' placeholder='Search Items...'></input>
        </form>
        <div className='w-[60px] h-[60px] flex justify-center items-center mr-10'>
            <LuShoppingBag />
        </div>
    </div>
  )
}

export default Navbar