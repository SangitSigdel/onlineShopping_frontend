import React from "react";
import { connect } from "react-redux";
import {
  promotionalAction,
  addToCartAction,
  modifyProductQuantity,
} from "../controller/actions";

import mobile_img from "../img/mobile_img.png";
import laptop_img from "../img/laptop_img.jpeg";
import desktop_img from "../img/desktop_img.jpeg";
import gamingConsole_img from "../img/gamingConsole_img.jpeg";
import homeAppliances_img from "../img/homeAppliances_img.jpeg";
import digitalCamera_img from "../img/digitalCamera.jpeg";
import history from "../historyRouter";

import "./css/section1.css";
import CustomButton from "./customButton";
import ProductDisplayComponent from "./component/ProductDisplayComponent";

class Section1 extends React.Component {
  async componentDidMount() {
    this.props.promotionalAction();
  }

  category_click(product) {
    history.push({
      pathname: `/product`,
      search: `category=${product[1].category}`,
      state: { searchFor: `${product[1].category}` },
    });
  }

  renderCategories() {
    const categories = {
      mobile: {
        name: "Mobile Phones",
        src: mobile_img,
        category: "mobile",
      },
      Laptops: {
        name: "Laptops",
        src: laptop_img,
        category: "laptop",
      },
      desktop_computers: {
        name: "Desktop Computers",
        src: desktop_img,
        category: "desktop",
      },
      gaming_consoles: {
        name: "Gaming Consoles",
        src: gamingConsole_img,
        category: "gaming_console",
      },
      home_appliances: {
        name: "Home Appliances",
        src: homeAppliances_img,
      },
      digital_cameras: {
        name: "Digital Cameras",
        src: digitalCamera_img,
      },
    };

    return Object.entries(categories).map((key, index) => {
      return (
        <div
          className="card"
          key={key[0]}
          onClick={() => {
            this.category_click(key);
          }}
        >
          <div className="card-header">
            <h2>{key[1].name}</h2>
            <div className="card__image">
              <img src={key[1].src} alt={key[0]}></img>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="section1__container">
        <div className="section1__product-categories">
          <div className="product-categories__headerText">
            <h1>Product Categories</h1>
            <h3>
              Choose products from variety of categories that suits your needs
            </h3>
          </div>
          <div className="card-list">{this.renderCategories()}</div>
        </div>
        <div className="section1__top-products">
          <div className="top-products__headerText">
            <h1>Featured Products</h1>
            <h3>Product that will transform you life</h3>
          </div>
          <ProductDisplayComponent products={this.props.topProducts} fn_cartCount={this.props.fn_cartCount} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return { products: state.products, cart: state.cart,topProducts:state.topProducts };
};

export default connect(mapStateToProps, {
  promotionalAction,
  addToCartAction,
  modifyProductQuantity,
})(Section1);
