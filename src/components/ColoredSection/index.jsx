import React from 'react';
import Button from "../Button";
import './style.scss';

const ColoredSection = ({title, text, image, reverse, color}) => {
  return (
    <div className={`colored-section-${color}${reverse ? "-reverse" : ""}`}>
      <div className='colored-section-content'>
        <h3>{title}</h3>
        <p>{text}</p>
        <Button buttonContent="Shop More" buttonType={color === "silver_rust" ? "brown-no-fill" : "white-no-fill"}/>
      </div>
      <div className='colored-section-image'>
        <img src={image} alt={title} />
      </div>
    </div>
  )
}

export default ColoredSection
