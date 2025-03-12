import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Card from '../components/Card'
import CardItem from '../components/CardItem'
import foodItem from '../food'
import { dataCont } from '../components/UserContext'
import { RxCross2 } from "react-icons/rx";
import CategoriesAssets from '../components/Assets'

const Home = () => {
  let {categories, setCategories, inputBtn, showCart, setShowCart} = useContext(dataCont)

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
        
        {!inputBtn?
          <Category filter={filter}/>
          : null}

        {/* Card Food */}
        <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
          {categories.map((item) => (
            <Card key={item.id} name={item.name} image={item.image} id={item.id} price={item.price}/>
          ))}
        </div>

        <div className={`w-full sm:w-[35vw] h-full fixed top-0 right-0 p-6 bg-white transition-all duration-300 ${showCart ? "translate-x-0" : "translate-x-full"}`}>
          <header className='w-full flex justify-between items-center'>
            <span className='text-green-500 text-lg'>
              Checkout items
            </span>
            <RxCross2 className='w-8 h-8 text-green-500 text-lg cursor-pointer' onClick={()=> setShowCart(false)}/>
          </header>
          <CardItem />
        </div>
    </div>
  )
}

export default Home