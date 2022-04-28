import React from 'react';
import "./style.scss";

const Header = () => {
  // ask about icon
  return (
    <div className='navigation-wrapper'>
      <nav className='navigation-top'>
      <ul>
        <li>About</li>
        <li>Consultation</li>
        </ul>
        <h2>sooth</h2>
        <ul>
        <li>Q</li>
        <li>Cart</li>
        <li>Login</li>
        </ul>
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
