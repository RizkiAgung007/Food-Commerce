import React from 'react'
import Img1 from '../assets/image1.avif'

function Card({name,image,id,price}) {
    return (
        <div key={id} className='w-72 h-96 bg-white hover:scale-102 transition-all p-4 rounded-2xl flex flex-col gap-3'>
            <div className='w-full h-[60%] overflow-hidden'>
                <img src={ image } alt='' className='rounded-2xl object-cover'/>
            </div>
            <div className='sm:text-2xl text-xl font-semibold'>
                { name }
            </div>
            <div className='w-full flex justify-between items-center font-semibold text-green-500'>
                Rp.{ price }
            </div>
            <button className='w-full p-3 border border-green-500 hover:border-transparent hover:bg-green-500 hover:text-white rounded-2xl cursor-pointer transition-all'>
                Add to cart
            </button>
        </div>
    )    
}


export default Card