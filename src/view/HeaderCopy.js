import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./css/headerCopy.css";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuItems = () => {
    return (
      <ul
        className="menu__items"
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <li>
          <Link to="/" className="item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="item">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="item">
            Carts
          </Link>
        </li>
        <li>
          <Link to="/about" className="item">
            About
          </Link>
        </li>
      </ul>
    );
  };

  const hamburgerIcon = (
    <GiHamburgerMenu
      className="hamburgerMenu"
      onClick={() => {
        setMenu(!menu);
      }}
    />
  );
  const closeIcon = (
    <MdClose
      className="closeBtn"
      onClick={() => {
        setMenu(!menu);
      }}
    />
  );

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="regular__menu">{menuItems()}</div>
        {menu && <div className="mobile__menu">{menuItems()}</div>}
        {!menu ? hamburgerIcon : closeIcon}
      </div>
    </div>
  );
};

export default Header;
