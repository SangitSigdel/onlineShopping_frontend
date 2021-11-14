import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import history from "../historyRouter";
import SearchBar from "./SearchBar";

import "./css/headerCopy.css";
import { connect } from "react-redux";

class Header extends React.Component {
  state = {
    menu: false,
    searchbar_bottom: false,
  };

  collapseMenu(menu_Type) {
    if (menu_Type === "mobile") {
      this.state.menu && this.setState({ menu: false });
    }
    console.log("hello from me", this.state.menu, menu_Type);
  }

  menuItems = (menu_Type) => {
    return (
      <ul className="menu__items" onClick={() => this.collapseMenu(menu_Type)}>
        <li>
          <Link to="/" className="item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/product" className="item">
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

  bottom_searchBar() {
    if (this.state.searchbar_bottom) {
      return (
        <div className="search__bar-bottom">
          <SearchBar />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar__container">
          <div className="logo">
            <h1
              onClick={() => {
                history.push("/");
              }}
            >
              ONESHOPPING
            </h1>
          </div>
          <div className="regular__menu">{this.menuItems()}</div>
          {this.state.menu && (
            <div className="mobile__menu">{this.menuItems("mobile")}</div>
          )}
          <div className="search__bar-top">
            <SearchBar />
          </div>
          <div className="search__icon">
            <FaSearch
              onClick={() => {
                if (!this.state.searchbar_bottom) {
                  this.setState({ searchbar_bottom: true });
                } else {
                  this.setState({ searchbar_bottom: false });
                }
              }}
            />
          </div>
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
        {this.bottom_searchBar()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps, {})(Header);
