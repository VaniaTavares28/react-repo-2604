import React from 'react';
import "./style.scss"

const stylingTypes ={
  new: "oxford_blue",
  discount: "cape_brown",
}

const HighlightBanner = ({text, type, absolute}) => {
  return (
    <div className={`card-banner-${stylingTypes[type]} ${absolute ? "hightlight-absolute" : ""}`}>
      {text}
    </div>
  )
}

export default HighlightBanner
