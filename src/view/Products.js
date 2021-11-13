import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { connect } from "react-redux";

import { searchedProducts } from "../controller/actions";
import ProductDisplayComponent from "./component/ProductDisplayComponent";


const Products=(props)=>{
  
  let productName = ""
  const {search} = useLocation() 
    const searchParams = new URLSearchParams(search)
    productName = searchParams.get('category')
  
  useEffect(()=>{
    props.searchedProducts(productName)
  },[])

    return(
      <div>
      <h1>Products</h1>
      <ProductDisplayComponent products={props.productSearched} fn_cartCount={props.fn_cartCount} />
    </div>
    )
  }

const mapStateToProps=(state)=>{
  return({
    productSearched:state.productSearched
  })
}

export default connect(mapStateToProps,{searchedProducts})(Products)
