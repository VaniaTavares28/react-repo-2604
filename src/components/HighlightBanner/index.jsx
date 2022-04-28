import React from 'react';
import "./style.scss"

const HighlightBanner = ({color, text}) => {
  return (
    <div className={`card-banner ${color}`}>
      {text}
    </div>
  )
}

export default HighlightBanner
