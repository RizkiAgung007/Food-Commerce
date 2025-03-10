import React from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'

const Home = () => {
  return (
    <div className='bg-gray-200 w-full min-h-screen'>
        <Navbar />
        {/* Category */}
        <Category />
    </div>
  )
}

export default Home