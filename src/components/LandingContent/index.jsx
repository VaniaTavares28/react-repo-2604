import React from 'react'
import HighlightBanner from '../HighlightBanner'
import "./style.scss"

const LandingContent = ({title, content, highlight, image}) => {
  return (
    <div className='landing'>
    <div className='landing-content'>
      {!!highlight && <HighlightBanner text="New!" color="dark-blue"/>}
    <h1>All Natural <br/>{title}</h1>
    <p>{content}</p>
    </div>
    {!!image && <div className="image-container"></div>}
    </div>
  )
}

export default LandingContent
