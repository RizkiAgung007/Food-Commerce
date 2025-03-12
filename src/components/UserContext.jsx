import React, { createContext, useState } from 'react'
import { foodItem } from '../food' 

export const dataCont = createContext()
const UserContext = ({children}) => {

    let [categories, setCategories] = useState(foodItem)
    let [inputBtn, setInputBtn] = useState("")
    let [showCart, setShowCart] = useState(false)

    let data = {
        inputBtn,
        setInputBtn,
        categories,
        setCategories,
        showCart,
        setShowCart
    }
  return (
    <div>
        <dataCont.Provider value={ data }>
            {children}
        </dataCont.Provider>
    </div>
  )
}

export default UserContext