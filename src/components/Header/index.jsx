import React from 'react';
import "./style.scss";

const Header = () => {
  return (
    <div className='navigation'>
      <nav className='navigation-top'>
      <ul>
        <li>About</li>
        <li>Consultation</li>
        </ul>
        <h1>sooth</h1>
        <ul>
        <li>OQ</li>
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
