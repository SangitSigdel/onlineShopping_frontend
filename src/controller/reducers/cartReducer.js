const cartReducer = (state = [], action) => {
  if (action.type === "ADD_PRODUCT_TO_CART") {
    return [...state, action.payload];
  } else if (action.type === "REMOVE_PRODUCT_FROM_CART") {
    return state.filter((product) => product !== action.payload.product.name);
  } else {
    return state;
  }
};

export default cartReducer;
