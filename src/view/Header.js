import React from "react";
import './css/mainHeader.css'

import {Link} from 'react-router-dom'

const Header =()=>{

   
  const mobileMenu=()=>{
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');
    // const navLogo = document.querySelector('#navbar__logo');

    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
  }

  const hideMobileMenu= ()=>{
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');
    // const navLogo = document.querySelector('#navbar__logo');

    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  }

    return(
      <div>
        <nav className="navbar">
          <div className="navbar__container">
            <Link to="/" id='navbar__logo'>COLOR</Link>
            <div className="navbar__toggle" id="mobile-menu" onClick={mobileMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
          <ul className="navbar__menu" onClick={hideMobileMenu}>
            <li className="navbar__item"><Link to="/" className="navbar__links" id="home-page">Home</Link></li>
            <li className="navbar__item"><Link to="/products" className="navbar__links" id="home-page">Products</Link></li>
            <li className="navbar__item"><Link to="/cart" className="navbar__links" id="home-page">Cart</Link></li>
            <li className="navbar__item"><Link to="/about" className="navbar__links" id="home-page">About</Link></li>
          </ul>
        </nav>
    </div>
    )
}

export default Header