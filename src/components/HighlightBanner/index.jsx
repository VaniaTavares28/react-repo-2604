import React from 'react';
import "./style.scss"

const stylingTypes ={
  new: "oxford-blue",
  discount: "brow"
}
const HighlightBanner = ({text, type}) => {
  return (
    <div className={`card-banner ${stylingTypes[type]}`}>
      {text}
    </div>
  )
}

export default HighlightBanner
