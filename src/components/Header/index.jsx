import React from 'react';
import { images } from '../../assets/images';
import "./style.scss";

const Header = () => {
  // ask about icon
  return (
    <div className='navigation-wrapper'>
      <nav className='navigation-top'>
      <ul>
        <li><a href='.'>About</a></li>
        <li><a href='.'>Consultation</a></li>
        </ul>
        <h2>sooth</h2>
        <div className="navigation-right">
          <div className="navigation-image-container">
            <img className="navigation-image" src={images.magnifying} alt="magnifying"/>
            </div>
        <ul>
        <li><a href='.'>Cart</a></li>
        <li><a href='.'>Login</a></li>
        </ul>
        </div>
      </nav>
      <ul className='navigation-bottom'>
      <li>Acne</li>
      <li>Sun</li>
      <li>Ezcema</li>
      <li>Psoriasis</li>
      <li>Vitiligio</li>
      </ul>
    </div>
  )
}

export default Header
