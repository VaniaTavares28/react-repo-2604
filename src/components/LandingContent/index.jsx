import React from 'react'
import HighlightBanner from '../HighlightBanner'
import "./style.scss"

const LandingContent = ({title, content, highlight}) => {
  return (
    <div className='landing'>
    <div className='landing-content'>
      {!!highlight && <HighlightBanner text="New!" color="dark-blue"/>}
    <h2>All Natural <br/>{title}</h2>
    <p>{content}</p>
    </div>
    <div className="image-container"/>
    </div>
  )
}

export default LandingContent
