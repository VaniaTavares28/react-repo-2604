import React from 'react';
import Button from "../Button";
import './style.scss';

const ColoredSection = ({title, text, image, reverse, color}) => {
  return (
    <div className={`colored-section-${color}${reverse ? "-reverse" : null}`}>
      <div className='colored-section-content'>
        <h3>{title}</h3>
        <p>{text}</p>
        <Button text="Shop More" type={color === "silver_rust" ? "brown-no-fill" : "white-no-fill"}/>
      </div>
    </div>
  )
}

export default ColoredSection
