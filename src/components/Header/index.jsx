import React, { useContext, useState } from 'react';
import { images } from '../../assets/images';
import CartContext from '../../context/CartContext';
import { subMenu } from '../../helpers/constants';
import "./style.scss";

const Header = ({ openCart }) => {
  const { shoppedItems } = useContext(CartContext);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="navigation-wrapper">
        <nav className="navigation-top">
          <ul>
            <li>
              <a href=".">About</a>
            </li>
            <li>
              <a href=".">Consultation</a>
            </li>
          </ul>
          <h2>sooth</h2>
          <ul>
            <li className="navigation-image">
              <img src={images.magnifying} alt="magnifying" />
            </li>
            <li>
              {shoppedItems.length ? (
                <span onClick={openCart}>Cart</span>
              ) : (
                <p>Cart</p>
              )}
            </li>
            <li>
              <a href=".">Login</a>
            </li>
          </ul>
        </nav>
        <ul className="navigation-bottom">
          {subMenu.map((sub) => (
            <li key={sub.id}>
              <a href=".">{sub.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navigation-wrapper-mobile">
        <div>
          <div
            className="navigation-image-container"
            onClick={() => setOpenMenu(true)}
          >
            <img src={images.menu} alt="menu-icon" />
          </div>
          <h2>sooth</h2>
        </div>
        <div>
          <div className="navigation-image-container">
            <img
              className="navigation-image"
              src={images.magnifying}
              alt="magnifying"
            />
          </div>
          <ul>
            <li>
              {shoppedItems.length ? (
                <span onClick={openCart}>Cart</span>
              ) : (
                <p>Cart</p>
              )}
            </li>
          </ul>
        </div>
      </div>
      {openMenu && (
        <div className="navigation-toggle">
          <button onClick={() => setOpenMenu(false)} className="btn-absolute">
            &#10005;
          </button>
          <ul>
            <li>
              <a href=".">About</a>
            </li>
            <li>
              <a href=".">Consultation</a>
            </li>
            {subMenu.map((sub) => (
              <li key={sub.id + "m969"}>
                <a href=".">{sub.title}</a>
              </li>
            ))}
            <li>
              <a href=".">Login</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header
