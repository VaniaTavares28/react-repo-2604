import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import "./style.scss";

const Button = ({buttonContent, buttonType, disabled, buttonInfo}) => {
  const { addToCart } = useContext(CartContext)
  
  const handleClick = () => {
    if(buttonInfo?.price) {
      const {title, price, image, id} = buttonInfo
      const newItemToAdd = {title, price, image, id}
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
