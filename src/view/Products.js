import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { connect } from "react-redux";

import { searchedProducts } from "../controller/actions";
import ProductDisplayComponent from "./component/ProductDisplayComponent";
import "./css/productsListing.css";

const Products = (props) => {
  let productName = "";
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  productName = searchParams.get("category");

  useEffect(() => {
    props.searchedProducts(productName);
  }, []);

  const displayHeading = () => {
    let heading = "abc";
    if (productName.length > 0) {
      heading = `Search Result For ${productName}`;
    } else {
      heading = "Listing all Products";
    }
    return heading;
  };

  return (
    <div>
      <h1 className="productListing_heading">{displayHeading()}</h1>
      <ProductDisplayComponent
        products={props.productSearched}
        fn_cartCount={props.fn_cartCount}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productSearched: state.productSearched,
  };
};

export default connect(mapStateToProps, { searchedProducts })(Products);
