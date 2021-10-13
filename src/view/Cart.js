import React from "react";
import Footer from "./footer";
import { connect } from "react-redux";
import { RiDeleteBin7Fill } from "react-icons/ri";

import "./css/cart.css";

const Cart = (props) => {
  const addedCart = () => {
    {
      console.log(props.cart);
      return props.cart.map((el) => {
        return (
          <div className="cart__product-contents" key={el._id}>
            <div className="cart__product-img-container">
              <img src={el.images[0]} />
            </div>
            <div className="cart__product-description">
              <h4>{el.description}</h4>
            </div>
            <div className="cart__product-price">
              <h3>£ {el.price}</h3>
            </div>
            <RiDeleteBin7Fill className="cart__product-del-icon" />
          </div>
        );
      });
    }
  };

  const emptyCart = () => {
    return <h1>Please Add items to your cart</h1>;
  };

  return (
    <div className="cart_container">
      <h1>Your Shopping Cart </h1>
      <div className="cart__product-container">
        {props.cart.length > 0 ? addedCart() : emptyCart()}
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps)(Cart);
