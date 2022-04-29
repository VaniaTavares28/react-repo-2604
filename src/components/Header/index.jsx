import React from 'react';
import { images } from '../../assets/images';
import { subMenu } from '../../helpers/constants';
import "./style.scss";

const Header = () => {

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
      {subMenu.map(sub => <li key={sub.id}>{sub.title}</li>)}
      </ul>
    </div>
  )
}

export default Header
