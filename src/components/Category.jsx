import React from 'react'
import CategoriesAssets from '../components/Assets'

const Category = ({filter}) => {
  return (
    <div className='w-full sm:flex sm:flex-wrap grid grid-cols-4 sm:justify-center items-center gap-6 sm:px-0 px-4 mt-6'>
      { CategoriesAssets.map((item, index) => (
  <div 
    key={index}
    className={`flex flex-col items-center hover:scale-105 justify-center sm:w-24 w-12 sm:h-24 h-12 rounded-xl shadow-lg bg-white gap-2 p-2 cursor-pointer hover:bg-green-500 group duration-100 ease-in
     ${ CategoriesAssets.length % 4 === 3 && index >= CategoriesAssets.length - 3 ? 'ml-8 sm:ml-0' : ''}`}
    onClick={() => filter(item.categoryName)}
  >
    {item.icon}
    {item.name}
  </div>
))}
    </div>
  )
}

export default Category