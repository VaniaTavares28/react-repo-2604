import React from 'react';
import "./style.scss";

const Button = ({buttonContent, buttonType, disabled}) => {
  return (
    <button className={`custom-button-${buttonType}${disabled ? "-disabled" : ""}`} disabled={disabled}>
      {buttonContent}
    </button>
  )
}

export default Button;
