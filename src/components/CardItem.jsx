import React from 'react'
import Image1 from '../assets/image1.avif'
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { DecreamentQty, IncreamentQty, RemoveItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const CardItem = ({name, id, price, image, qty}) => {
    let dispatch = useDispatch()
  return (
    <div className='w-full h-32 p-2 flex justify-between'>
        <div className='w-[80%] h-full flex gap-5'>
            <div className='w-[60%] h-full overflow-hidden rounded-lg'>
                <img src={ image } alt='' className='object-cover'/>
            </div>
            <div className='w-[40%] flex flex-col sm:gap-12 gap-12'>
                <div className='text-gray-600 font-semibold sm:text-sm'>
                    { name }
                </div>
                <div className='sm:w-28 sm:h-10 flex rounded-lg border overflow-hidden'>
                <button className="w-[30%] hover:bg-gray-400 hover:text-white transition-all flex justify-center items-center cursor-pointer"
                onClick={() => qty > 1 ? dispatch(DecreamentQty(id)) : dispatch(RemoveItem(id))}>
                    -
                </button>
                    <span className='w-[40%] bg-slate-200 flex justify-center items-center cursor-pointer'>{ qty }</span>
                    <button className='w-[30%] hover:bg-gray-400 hover:text-white transition-all flex justify-center items-center cursor-pointer'
                    onClick={()=>{ dispatch(IncreamentQty(id)) }}>
                        +
                    </button>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-start items-end sm:gap-14 gap-12'>
            <span className='font-semibold sm:text-sm  text-[10px] sm:pt-0 pt-2 text-gray-600'>Rp { price.toLocaleString("id-ID") }</span>
            <FaTrashAlt className='sm:w-6 sm:h-6 w-5 h-5 text-red-600 cursor-pointer' onClick={()=> {dispatch(RemoveItem(id)); toast.error("Item Removed");}}/>
        </div>
    </div>
  )
}

export default CardItem