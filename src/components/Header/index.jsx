import React, { useContext } from 'react';
import { images } from '../../assets/images';
import CartContext from '../../context/CartContext';
import { subMenu } from '../../helpers/constants';
import "./style.scss";

const Header = () => {
  const {openCart, shoppedItems} = useContext(CartContext);

  const handleOpenCart = () => {
    if(shoppedItems.length) {
      openCart()
    }
  }
  return (
    <>
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
        <li><a href='.' onClick={handleOpenCart}>Cart</a></li>
        <li><a href='.'>Login</a></li>
        </ul>
        </div>
      </nav>
      <ul className='navigation-bottom'>
      {subMenu.map(sub => <li key={sub.id}>{sub.title}</li>)}
      </ul>
    </div>
    <div className='navigation-wrapper-mobile'>
      <div className='navigation-mobile'>
        <h2>Menu</h2>
        <h2>sooth</h2>
        <div className="navigation-right">
          <div className="navigation-image-container">
            <img className="navigation-image" src={images.magnifying} alt="magnifying"/>
            </div>
        <ul>
        <li><a href='.' onClick={handleOpenCart}>Cart</a></li>
        </ul>
        </div>
      </div>
      <div className='navigation-toggle'>
      <ul>
        <li><a href='.'>About</a></li>
        <li><a href='.'>Consultation</a></li>
        {subMenu.map(sub => <li key={sub.id + "m969"}>{sub.title}</li>)}
        <li><a href='.'>Login</a></li>
        </ul>
      </div>
  
    </div>
    </>
  )
}

export default Header
