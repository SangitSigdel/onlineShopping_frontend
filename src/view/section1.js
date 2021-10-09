import React from "react";
import { connect } from "react-redux";
import { promotionalAction } from "../controller/actions";

import "./css/section1.css";
import Card from "./card";

class Section1 extends React.Component {
  async componentDidMount() {
    this.props.promotionalAction();
  }

  renderList() {
    if (this.props.products.length > 0) {
      return this.props.products.map((product) => {
        return (
          <div key={product._id}>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <p>{product.description}</p>
            <p>ImageURL: {product.images}</p>
          </div>
        );
      });
    }
  }

  renderCategories() {
    const categories = [
      "Mobile Phones",
      "Laptops",
      "Desktops",
      "Gaming Console",
      "Home Appliances",
      "Medical Appliances",
    ];

    return categories.map((el) => {
      return (
        <div className="card">
          <div className="card-header">
            <p>May 25th 2020</p>
            <h2>Card tricks are fun. Hi mom!</h2>
          </div>
        </div>
      );
    });
  }

  renderTopProducts() {
    const products = [1, 2, 3, 4, 5, 6, 7, 8];

    return products.map((el) => {
      return (
        <div className="display__card">
          <h1>hello boss</h1>
          <h3>This is the actual card i was talking about</h3>
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
            <h3>Choose from variety of categories that suits your needs</h3>
          </div>
          <div className="card-list">{this.renderCategories()}</div>
        </div>
        <div className="section1__top-products">
          <div className="top-products__headerText">
            <h1>Best Products</h1>
            <h3>Product that will transform you life</h3>
          </div>
          <div className="grid">{this.renderTopProducts()}</div>
        </div>
        {this.renderList()}
        <Card />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, { promotionalAction })(Section1);
