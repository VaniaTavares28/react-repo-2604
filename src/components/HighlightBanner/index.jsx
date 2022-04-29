import React from 'react';
import "./style.scss"

const stylingTypes ={
  new: {
    style: "oxford_blue",
    text: "New!"
  },
  discount: {
    style: "cape_brown",
    text: "15% off"
  },
}

const HighlightBanner = ({type, absolute}) => {
  return (
    <div className={`card-banner-${stylingTypes[type].style} ${absolute ? "hightlight-absolute" : ""}`}>
      {stylingTypes[type].text}
    </div>
  )
}

export default HighlightBanner
