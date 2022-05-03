import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {
  const savedShow = localStorage.getItem("showCart")

  const [shoppedItems, setShoppedItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [showCart, setShowCart] = useState(!!savedShow);
  
  const closeCart = () => {
    setShowCart(false)
    localStorage.removeItem("showCart")
  };

  const openCart = () => {
    setShowCart(true)
    localStorage.setItem("showCart", JSON.stringify(true))
  };

  const addToCart = ({title, price, image, id}) => {
    const foundItemIndex = shoppedItems.findIndex(cart => cart.id === id);
    if (foundItemIndex !== -1) {
      setShoppedItems(prev => {
        const newItems = [...prev];
        const newQuantity = newItems[foundItemIndex].quantity += 1;
        newItems[foundItemIndex].quantity = newQuantity;
        return newItems;
      })
    } else {
      setShoppedItems(prev => [...prev, {title, price, quantity: 1, image, id}])
    }
  }

  const removeFromCart = ({id}) => {
    setShoppedItems(prev => prev.filter(item => item.id !== id))
  }

  const updateQuantity = ({id, quantity}) => {
    const itemIndex = shoppedItems.findIndex(cart => cart.id === id);
    if(quantity === 0) {
      setShoppedItems(prev => prev.filter(item => item.id !== id))
    } else {
      setShoppedItems(prev => {
        const newItems = [...prev];
        newItems[itemIndex].quantity = quantity;
        return newItems;
      })
    }
  }

  useEffect(() => {
    if(shoppedItems.length) {
      const newTotal = shoppedItems.reduce((previous, current) => previous + current.price * current.quantity, 0)
      setCartTotal(newTotal);
      
      localStorage.setItem("total", JSON.stringify(newTotal * 100))
      localStorage.setItem("cartItems", JSON.stringify(shoppedItems))
    }
    else {
      const savedTotal = parseInt(localStorage.getItem("total"));
      let savedItems = localStorage.getItem("cartItems");
      if(savedItems){ 
        setCartTotal(savedTotal);
        setShoppedItems(JSON.parse(savedItems));
      }
    }
  }, [shoppedItems])

  return (<CartContext.Provider value={{showCart, cartTotal, shoppedItems, addToCart, updateQuantity, removeFromCart, openCart, closeCart}}>
    {children}
  </CartContext.Provider>)
}

export default CartContext;