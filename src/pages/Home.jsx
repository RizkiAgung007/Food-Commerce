import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Card from '../components/Card'
import foodItem from '../food'
import CategoriesAssets from '../components/Assets'

const Home = () => {
  let [categories, setCategories] = useState(foodItem)

  function filter(category) {
    if (category === "All") {
      setCategories(foodItem)
    } else {
      let newFilt = foodItem.filter((item) => (item.food_Category === category)) 
      setCategories(newFilt)
    }
  }

  return (
    <div className='bg-gray-200 w-full min-h-screen'>
        <Navbar />
        
        {/* Category */}
        <Category filter={filter}/>

        {/* Card Food */}
        <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
          {categories.map((item) => (
            <Card key={item.id} name={item.name} image={item.image} id={item.id} price={item.price}/>
          ))}
        </div>
    </div>
  )
}

export default Home