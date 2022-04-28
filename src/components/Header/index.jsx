import React from 'react';
import "./style.scss";

const Header = () => {
  return (
    <>
      <div className='header-top'>
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
      </div>
      <ul className='header-bottom'>
      <li>Acne</li>
      <li>Sun</li>
      <li>Ezcema</li>
      <li>Psoriasis</li>
      <li>Vitiligio</li>
      </ul>
    </>
  )
}

export default Header
