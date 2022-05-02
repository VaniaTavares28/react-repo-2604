import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import "./style.scss";

const Button = ({buttonContent, buttonType, disabled, title, price, quantity, image}) => {
  const { addToCart } = useContext(CartContext)
  const handleClick = () => {
    if(title && price && image) {
      const newItemToAdd = {title, price, quantity, image}
      addToCart(newItemToAdd);
    }
  }
  return (
    <button onClick={handleClick} className={`custom-button-${buttonType}${disabled ? "-disabled" : ""}`} disabled={disabled}>
      {buttonContent}
    </button>
  )
}

export default Button;
