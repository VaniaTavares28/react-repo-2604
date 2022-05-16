import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [shoppedItems, setShoppedItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const closeCart = () => {
      setShowCart(false);
    };

    const openCart = () => {
      setShowCart(true);
    };

  const addToCart = ({ title, price, image, id }) => {
    const foundItemIndex = shoppedItems.findIndex((cart) => cart.id === id);
    if (foundItemIndex !== -1) {
      setShoppedItems((prev) => {
        const newItems = [...prev];
        const newQuantity = (newItems[foundItemIndex].quantity += 1);
        newItems[foundItemIndex].quantity = newQuantity;
        return newItems;
      });
    } else {
      setShoppedItems((prev) => [
        ...prev,
        { title, price, quantity: 1, image, id },
      ]);
    }
  };

  const removeFromCart = ({ id }) => {
    if (shoppedItems.length !== 1) {
      setShoppedItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setShoppedItems([]);
      setCartTotal(0);
      localStorage.removeItem("total");
      localStorage.removeItem("cartItems");
    }
  };

  const updateQuantity = ({ id, quantity }) => {
    const itemIndex = shoppedItems.findIndex((cart) => cart.id === id);
    if (quantity === 0 && shoppedItems.length !== 1) {
      setShoppedItems((prev) => prev.filter((item) => item.id !== id));
    } else if (quantity === 0) {
      setShoppedItems([]);
      setCartTotal(0);
      localStorage.removeItem("total");
      localStorage.removeItem("cartItems");
    } else {
      setShoppedItems((prev) => {
        const newItems = [...prev];
        newItems[itemIndex].quantity = quantity;
        return newItems;
      });
    }
  };

  useEffect(() => {
    if (shoppedItems.length) {
      const newTotal = shoppedItems.reduce(
        (previous, current) => previous + current.price * current.quantity,
        0
      );
      setCartTotal(newTotal);
      localStorage.setItem("total", JSON.stringify(newTotal * 100));
      localStorage.setItem("cartItems", JSON.stringify(shoppedItems));
    } else {
      const savedTotal = parseInt(localStorage.getItem("total"));
      let savedItems = localStorage.getItem("cartItems");
      if (savedItems) {
        setCartTotal(savedTotal / 100);
        setShoppedItems(JSON.parse(savedItems));
      }
    }
  }, [shoppedItems]);

  return (
    <CartContext.Provider
      value={{
        cartTotal,
        shoppedItems,
        showCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;