import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Card from '../components/Card'
import CardItem from '../components/CardItem'
import foodItem from '../food'
import { dataCont } from '../components/UserContext'
import { RxCross2 } from "react-icons/rx";
import CategoriesAssets from '../components/Assets'
import { useSelector } from 'react-redux'

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

  let items = useSelector(state=> state.cart)

  let subTotal = items.reduce((total, item) => total + item.qty * item.price,0)
  let deliveryFee = 500;
  let tax = subTotal*0.5/100;
  let totalPrice = Math.floor(subTotal + deliveryFee + tax);

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

        <div className={`w-full sm:w-[35vw] flex flex-col items-center h-full overflow-auto fixed top-0 right-0 p-6 bg-white transition-all duration-300 ${showCart ? "translate-x-0" : "translate-x-full"}`}>
          <header className='w-full flex justify-between items-center'>
            <span className='text-green-500 sm:text-lg text-sm font-semibold'>
              Checkout items
            </span>
            <RxCross2 className='w-8 h-8 text-green-500 text-lg cursor-pointer' onClick={()=> setShowCart(false)}/>
          </header>
          <div className='w-full mt-8 flex flex-col gap-5'>
            {items.map((item)=> (
              <CardItem name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
            ))}
          </div>
          <div className='w-full flex flex-col gap-4 border-t-2 border-b-2 border-gray-500 p-8 mt-7'>
            <div className='w-full flex justify-between items-center'>
              <span className='sm:text-lg text-sm text-gray-500 font-semibold'>Subtotal</span>
              <span className='text-gray-500 font-semibold sm:text-lg text-sm'>Rp { subTotal.toLocaleString("id-ID") }</span>
            </div>
            <div className='w-full flex justify-between items-center'>
              <span className='sm:text-lg text-sm text-gray-500 font-semibold'>Delivery Fee</span>
              <span className='text-gray-500 font-semibold sm:text-lg text-sm'>Rp { deliveryFee.toLocaleString("id-ID") }</span>
            </div>
            <div className='w-full flex justify-between items-center'>
              <span className='sm:text-lg text-sm text-gray-500 font-semibold'>Tax</span>
              <span className='text-gray-500 font-semibold sm:text-lg text-sm'>Rp { tax.toLocaleString("id-ID") }</span>
            </div>
          </div>
          <div className='w-full flex justify-between items-center p-8'>
            <span className='sm:text-lg text-sm text-gray-500 font-semibold'>Total</span>
            <span className='text-gray-500 font-semibold sm:tel'>Rp { totalPrice.toLocaleString("id-ID") }</span>
          </div>
          <button className='w-1/2 p-3 border border-green-500 hover:border-transparent hover:bg-green-500 hover:text-white rounded-2xl cursor-pointer transition-all'>
            Order
          </button>
        </div>
    </div>
  )
}

export default Home