import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from 'react-icons/io5';
import { FaCartShopping } from "react-icons/fa6";
import { dataCont } from '../components/UserContext'
import { foodItem } from '../food'

const Navbar = () => {
    let {inputBtn, setInputBtn, categories, setCategories, showCart, setShowCart} = useContext(dataCont)
    useEffect(()=> {
        let newList = foodItem.filter((item)=> item.name.includes(inputBtn) || item.name.toLocaleLowerCase().includes(inputBtn))
        setCategories(newList)
    }, [inputBtn])
  return (
    <div className='w-full h-24 flex justify-between items-center px-5 sm:px-8'>
        <div className='w-16 h-16 flex justify-center items-center rounded-sm ml-0 sm:ml-18 sm:pr-0 pr-2'>
            <div className='flex items-center gap-2'>
                <MdFastfood className='w-8 h-8 text-green-500'/>
                <h2 className='sm:flex hidden font-semibold sm:text-3xl text-xl'>Fast<span className='text-green-500'>Food</span></h2>
            </div>
        </div>
        <form className='flex items-center w-2/3 sm:w-1/2 h-12 sm:h-14 px-5 gap-5 bg-white rounded-xl' 
        onSubmit={(e)=> e.preventDefault()}>
            <IoSearch className='w-5 h-5 text-gray-500'/>
            <input type='text' placeholder='Search Items...' className='w-full outline-none text-lg' 
            onChange={(e)=> setInputBtn(e.target.value)} value={inputBtn}></input>
        </form>
        <div className='relative w-16 h-16 flex justify-center items-center mr-0 sm:mr-10 sm:pl-0 pl-2'>
            <span className='absolute sm:top-1 top-4 sm:right-2 right-4.5 font-bold text-green-900'>0</span>
            <FaCartShopping className='w-8 h-8 text-green-500 cursor-pointer' onClick={()=> setShowCart(true)}/>
        </div>
    </div>
  )
}

export default Navbar