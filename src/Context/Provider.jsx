import React from 'react'
import appContext from './AppContext'
import { useState } from 'react'

const Provider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [isCartVisible, setIsCartVisible] = useState(false)

    const value = {products, setProducts, cartItems, setCartItems, isCartVisible, setIsCartVisible}


  return (
    <div>
        <appContext.Provider value={value}>
            {children}
        </appContext.Provider>
    </div>
  )
}

export default Provider