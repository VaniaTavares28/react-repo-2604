import React from 'react'
import HighlightBanner from '../HighlightBanner'
import Button from '../Button';
import "./style.scss";

const LandingContent = ({button, title, content, highlight}) => {
  return (
    <div className='landing'>
    <div className='landing-content'>
      {!!highlight && <HighlightBanner type="new"/>}
    <h2>All Natural <br/>{title}</h2>
    <p>{content}</p>
{!!button && <Button buttonContent="Shop products" buttonType="no-fill" />}
    </div>
    <div className="image-container"/>
    </div>
  )
}

export default LandingContent
