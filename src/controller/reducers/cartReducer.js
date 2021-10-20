const cartReducer = (state = [], action) => {
  if (action.type === "ADD_PRODUCT_TO_CART") {
    return [...state, action.payload];
  } else if (action.type === "REMOVE_PRODUCT_FROM_CART") {
    return state.filter(
      (product) => product.product.name !== action.payload.product.name
    );
  } else if (action.type === "MODIFY_PRODUCT_QUANTITY") {
    const new_Object = [...state];
    Object.keys(new_Object).map((key, index) => {
      if (new_Object[key].product._id === action.payload.product.product._id) {
        if (action.payload.increment) {
          new_Object[key].quantity = new_Object[key].quantity + 1;
        } else {
          new_Object[key].quantity = new_Object[key].quantity - 1;
        }
      }
    });
    return new_Object;
  } else {
    return state;
  }
};

export default cartReducer;
