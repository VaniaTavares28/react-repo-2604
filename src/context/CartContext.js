import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {
  const [shoppedItems, setShoppedItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0)

  const addToCart = ({title, price, quantity, image}) => {
    const foundItemIndex = shoppedItems.findIndex(cart => cart.title === title);
    if (foundItemIndex !== -1) {
      setShoppedItems(prev => {
        const newItems = [...prev];
        const quantityToAdd = quantity || 1;
        newItems[foundItemIndex].quantity = newItems[foundItemIndex].quantity + quantityToAdd;
        return newItems;
      })
    } else {
      setShoppedItems(prev => [...prev, {title, price, quantity: quantity || 1, image}])
    }
  }

  const removeFromCart = ({title}) => {
    setShoppedItems(prev => prev.filter(item => item.title !== title))
  }

  useEffect(() => {
    if(shoppedItems.length) {
      console.log(shoppedItems)
      const newTotal = shoppedItems.reduce((previous, current) => previous + current.price * current.quantity, 0)
      setCartTotal(newTotal);
      localStorage.setItem("total", newTotal)
      localStorage.setItem("cartItems", shoppedItems)
    } else {
      localStorage.removeItem("total")
      localStorage.removeItem("cartItems")
    }
  }, [shoppedItems])

  return (<CartContext.Provider value={{cartTotal, shoppedItems, addToCart, removeFromCart}}>
    {children}
  </CartContext.Provider>)
}

export default CartContext;