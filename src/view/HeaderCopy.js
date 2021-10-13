import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import history from "../historyRouter";

import "./css/headerCopy.css";
import { connect } from "react-redux";

class Header extends React.Component {
  state = {
    menu: false,
    cardCount: 0,
  };

  menuItems = () => {
    return (
      <ul
        className="menu__items"
        onClick={() => {
          if (this.state.menu === false) {
            this.setState({ menu: true });
          } else {
            this.setState({ menu: true });
          }
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

  hamburgerIcon = (
    <GiHamburgerMenu
      className="hamburgerMenu"
      onClick={() => {
        if (!this.state.menu) {
          this.setState({ menu: true });
        } else {
          this.setState({ menu: false });
        }
      }}
    />
  );

  closeIcon = (
    <MdClose
      className="closeBtn"
      onClick={() => {
        if (!this.state.menu) {
          this.setState({ menu: true });
        } else {
          this.setState({ menu: false });
        }
      }}
    />
  );

  render() {
    return (
      <div className="navbar">
        <div className="navbar__container">
          <div className="logo">
            <h1>LOGO</h1>
          </div>
          <div className="regular__menu">{this.menuItems()}</div>
          {this.state.menu && (
            <div className="mobile__menu">{this.menuItems()}</div>
          )}
          {!this.state.menu ? this.hamburgerIcon : this.closeIcon}
          <div
            className="cart__icon"
            onClick={() => {
              history.push("/cart");
            }}
          >
            <FaShoppingCart />
            <section>
              {this.props.cart.length > 0 && (
                <div className="notification__circle">
                  {this.props.cart.length}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps, {})(Header);
