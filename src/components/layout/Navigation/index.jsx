import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { images } from "../../../assets/images";
import "./style.scss";

const Navigation = ({ openCart }) => {
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
          <span onClick={openCart}>Cart</span>
        </li>
        <li>
          {isLoggedIn ? (
            <span onClick={handleLogOut}>Log Out</span>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
