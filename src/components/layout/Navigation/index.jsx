import React from "react";
import { images } from "../../../assets/images";
import "./style.scss";

const Navigation = ({ openCart }) => {
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
          <a href=".">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
