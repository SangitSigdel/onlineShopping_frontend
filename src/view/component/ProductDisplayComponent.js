import React from "react";
import { connect } from "react-redux";

import { addToCartAction } from "../../controller/actions";
import CustomButton from "../customButton";
import "../css/productDisplayComponent.css"


class ProductDisplayComponent extends React.Component{
    
    addToCart(product) {
        const obj = this.props.cart;
    
        let added = false;
        Object.keys(obj).forEach((key) => {
          console.log(obj[key]);
          if (obj[key].product._id === product._id) {
            added = true;
            alert("Item already added");
          }
        });
        if (!added) {
          this.props.addToCartAction(product, 1);
          this.props.fn_cartCount(this.props.cart.length);
        }
      }

        renderProducts() {
          // Pass top products as a prop in the class from the component want to access this component.
          console.log('inside product display',this.props.products)
          if (this.props.products.length > 0) {
            return this.props.products.map((el) => {
              return (
                <div className="display__card" key={el._id}>
                  <h2>{el.name}</h2>
                  <div className="image__container">
                    <img src={el.images[0]} alt={el.name} />
                  </div>
                  <p>{el.description}</p>
                  <h1>£ {el.price}</h1>
                  <div
                    onClick={() => {
                      this.addToCart(el);
                    }}
                  >
                    <CustomButton button_text="Add To Cart" />
                  </div>
                </div>
              );
            });
          }
        }

        render(){
          
          return(
              <div className="grid">{this.renderProducts()}</div>
          )
    
        }
}
const mapStateToProps=(state)=>{
  return({
    cart: state.cart,
  })
}

export default connect(mapStateToProps,{addToCartAction})(ProductDisplayComponent)