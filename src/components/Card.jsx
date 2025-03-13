import React from 'react'
import { useDispatch } from 'react-redux'
import { AddItem } from '../redux/cartSlice'

function Card({name,image,id,price}) {
    let dispatch = useDispatch()
    return (
        <div key={id} className='w-72 h-96 bg-white hover:scale-102 transition-all p-4 rounded-2xl flex flex-col gap-3'>
            <div className='w-full h-[60%] overflow-hidden'>
                <img src={ image } alt='' className='rounded-2xl object-cover'/>
            </div>
            <div className='sm:text-2xl text-xl font-semibold'>
                { name }
            </div>
            <div className='w-full flex justify-between items-center font-semibold text-green-500'>
                Rp { price.toLocaleString("id-ID") }
            </div>
            <button className='w-full p-3 border border-green-500 hover:border-transparent hover:bg-green-500 hover:text-white rounded-2xl cursor-pointer transition-all'
            onClick={() => dispatch(AddItem({id:id, name:name, image:image, price:price, qty:1}))}>
                Add to cart
            </button>
        </div>
    )    
}


export default Card