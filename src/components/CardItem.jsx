import React from 'react'
import Image1 from '../assets/image1.avif'
import { FaTrashAlt } from "react-icons/fa";

const CardItem = () => {
  return (
    <div className='w-full h-32 p-2 flex justify-between'>
        <div className='w-[80%] h-full flex gap-5'>
            <div className='w-[60%] h-full overflow-hidden rounded-lg'>
                <img src={Image1} alt='' className='object-cover'/>
            </div>
            <div className='w-[40%] flex flex-col sm:gap-10 gap-12'>
                <div className='sm:text-lg text-gray-600 font-semibold'>
                    Pancake
                </div>
                <div className='sm:w-28 sm:h-10 flex rounded-lg border overflow-hidden'>
                    <button className='w-[30%] hover:bg-gray-400 hover:text-white transition-all flex justify-center items-center cursor-pointer'>-</button>
                    <span className='w-[40%] bg-slate-200 flex justify-center items-center cursor-pointer'>1</span>
                    <button className='w-[30%] hover:bg-gray-400 hover:text-white transition-all flex justify-center items-center cursor-pointer'>+</button>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-start items-end sm:gap-12 gap-12'>
            <span className='font-semibold sm:text-lg text-[10px] sm:pt-0 pt-2 text-gray-600'>Rp. 18.000</span>
            <FaTrashAlt className='sm:w-6 sm:h-6 w-5 h-5 text-red-600 cursor-pointer'/>
        </div>
    </div>
  )
}

export default CardItem