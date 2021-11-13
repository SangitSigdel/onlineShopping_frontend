const searchProductReducer = (state = [], action) => {
    switch (action.type) {
      case "SEARCHED_PRODUCTS":
        return action.payload;
      default:
        return state;
    }
  };
  export default searchProductReducer;
  