import React from 'react'
import CategoriesAssets from '../components/Assets'

const Category = () => {
  return (
    <div className='w-full flex flex-wrap justify-center items-center gap-6'>
        { CategoriesAssets.map((categories, index) => (
        <div key={ index } 
        className='flex flex-col items-center justify-center w-24 h-24 rounded-xl shadow-lg bg-white gap-2 p-2 cursor-pointer hover:bg-green-500 group duration-100 ease-in'>
            <div className='text-green-500 group-hover:text-white'>
                { categories.icon }
            </div>
            <h1 className='group-hover:text-white text-gray-600'>
                { categories.name }
            </h1>
        </div>
        ))}
    </div>
  )
}

export default Category