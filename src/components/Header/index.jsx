import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { images } from "../../assets/images";
import CartContext from "../../context/CartContext";
import { subMenu } from "../../helpers/constants";
import "./style.scss";

const Header = ({ openCart }) => {
  const { shoppedItems } = useContext(CartContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn) setIsLoggedIn(true);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
  };
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
          <div className="navigation-right">
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
              <li>
                {isLoggedIn ? (
                  <span onClick={handleLogOut}>Log out</span>
                ) : (
                  <NavLink to="/login">Login</NavLink>
                )}
              </li>
            </ul>
          </div>
        </nav>
        <ul className="navigation-bottom">
          {subMenu.map((sub) => (
            <li key={sub.id}>{sub.title}</li>
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
              <li key={sub.id + "m969"}>{sub.title}</li>
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

export default Header;
