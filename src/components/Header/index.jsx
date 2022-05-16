import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { images } from "../../assets/images";
import { subMenu } from "../../helpers/constants";
import "./style.scss";

const Header = ({ openCart }) => {
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
      <header className="navigation-wrapper">
        <ul className="navigation-bottom">
          {subMenu.map((sub) => (
            <li key={sub.id}>
              <a href=".">{sub.title}</a>
            </li>
          ))}
        </ul>
      </header>
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
              <span onClick={openCart}>Cart</span>
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
              <li>
                {isLoggedIn ? (
                  <span onClick={handleLogOut}>Log Out</span>
                ) : (
                  <NavLink to="/login">Login</NavLink>
                )}
              </li>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
