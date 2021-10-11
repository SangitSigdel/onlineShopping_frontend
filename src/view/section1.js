import React from "react";
import { connect } from "react-redux";
import { promotionalAction } from "../controller/actions";

import mobile_img from "../img/mobile_img.png";
import laptop_img from "../img/laptop_img.jpeg";
import desktop_img from "../img/desktop_img.jpeg";
import gamingConsole_img from "../img/gamingConsole_img.jpeg";
import homeAppliances_img from "../img/homeAppliances_img.jpeg";
import digitalCamera_img from "../img/digitalCamera.jpeg";

import "./css/section1.css";
import CustomButton from "./customButton";

class Section1 extends React.Component {
  async componentDidMount() {
    this.props.promotionalAction();
  }

  renderCategories() {
    const categories = {
      mobile: {
        name: "Mobile Phones",
        src: mobile_img,
      },
      Laptops: {
        name: "Laptops",
        src: laptop_img,
      },
      desktop_computers: {
        name: "Desktop Computers",
        src: desktop_img,
      },
      gaming_consoles: {
        name: "Gaming Consoles",
        src: gamingConsole_img,
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

    return Object.entries(categories).map(function (key, index) {
      return (
        <div className="card" key={key[0]}>
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

  renderTopProducts() {
    if (this.props.products.length > 0) {
      return this.props.products.map((el) => {
        return (
          <div className="display__card" key={el.name}>
            {console.log(el)}
            <h2>{el.name}</h2>
            <div className="image__container">
              <img src={el.images[0]} />
            </div>
            <p>{el.description}</p>
            <h1>£ {el.price}</h1>
            <CustomButton button_text="Add To Cart" />
          </div>
        );
      });
    }
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
          <div className="grid">{this.renderTopProducts()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, { promotionalAction })(Section1);
