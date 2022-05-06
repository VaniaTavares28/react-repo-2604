import React from 'react'
import HighlightBanner from '../HighlightBanner'
import Button from '../Button';
import { images } from '../../assets/images';
import "./style.scss";

const LandingContent = ({button, title, content, highlight}) => {

  return (
    <div className="landing">
      <div className="landing-content">
        {highlight && <HighlightBanner text="New!" type="new" />}
        <h2>
          All Natural <br />
          {title}
        </h2>
        <p>{content}</p>
        {button && (
          <Button buttonContent="Shop products" buttonType="no-fill" />
        )}
      </div>
      <div className="landing-image-container">
        <img src={images.homeFlask} alt="background" />
      </div>
    </div>
  );
}

export default LandingContent
