import React from 'react';
import "./style.scss"

const stylingTypes ={
  new: {
    style: "oxford-blue",
    text: "New!"
  },
  discount: {
    style: "brown",
    text: "15% off"
  },
}
const HighlightBanner = ({type}) => {
  return (
    <div className={`card-banner ${stylingTypes[type].style}`}>
      {stylingTypes[type].text}
    </div>
  )
}

export default HighlightBanner
