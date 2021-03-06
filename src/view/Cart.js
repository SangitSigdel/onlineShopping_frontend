import React from "react";
import Footer from "./footer";
import { connect } from "react-redux";
import { RiDeleteBin7Fill } from "react-icons/ri";

import history from "../historyRouter";

import CustomButton from "./customButton";

import {
  removeFromCartAction,
  modifyProductQuantity,
} from "../controller/actions";
import "./css/cart.css";

const Cart = (props) => {
  const increaseQuantity = (product, quanity) => {
    props.modifyProductQuantity(product, true);
  };

  const decreaseQuantity = (product, quantity) => {
    if (quantity > 1) {
      props.modifyProductQuantity(product, false);
    }
  };

  const calculateTotalPrice = (product_price, product_qunatity) => {
    const price = product_price;
    const total_quanity = product_qunatity;
    return price * total_quanity;
  };

  const carItems = () => {
    return props.cart.map((el) => {
      return (
        <div className="cart__product-contents" key={el.product._id}>
          <div className="cart__product-img-container">
            <img src={el.product.images[0]} alt={el.product.name} />
          </div>
          <div>
            <div className="cart__product-name">
              <h2>{el.product.name}</h2>
            </div>
            <div className="cart__product-description">
              <h4>{el.product.description}</h4>
            </div>
          </div>
          <div className="cart__product_actions">
            <div className="add__remove-btn">
              <div
                className="remove_Btn"
                onClick={() => {
                  decreaseQuantity(el, el.quantity);
                }}
              >
                -
              </div>
              <div className="product__quantity">{el.quantity}</div>
              <div
                className="add_Btn"
                onClick={() => {
                  increaseQuantity(el, el.quantity);
                }}
              >
                +
              </div>
            </div>

            <div className="cart__product-price">
              <h3>£ {calculateTotalPrice(el.product.price, el.quantity)}</h3>
            </div>
            <RiDeleteBin7Fill
              className="cart__product-del-icon"
              onClick={() => {
                props.removeFromCartAction(el);
              }}
            />
          </div>
        </div>
      );
    });
  };

  const calculateGrandTotal = () => {
    let toatlPrice = 0;
    props.cart.map((el) => {
      let quantity = el.quantity;
      let price = el.product.price;
      toatlPrice = toatlPrice + quantity * price;
      return 0;
    });
    return toatlPrice;
  };

  const addedCart = () => {
    return (
      <div>
        <div className="cart__products">
          <div className="cart__products__display">{carItems()}</div>
          <div className="cart__total">
            <h2>Order Summary</h2>
            <div className="cart__total-display">
              <h3>Sub Total : </h3>
              <h3> £ {calculateGrandTotal()} </h3>
            </div>
            <div
              onClick={() => {
                history.push("/");
              }}
            >
              <CustomButton button_text="Checkout" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return <h1 className="empty__cart">Please Add items to your cart</h1>;
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

export default connect(mapStateToProps, {
  removeFromCartAction,
  modifyProductQuantity,
})(Cart);
