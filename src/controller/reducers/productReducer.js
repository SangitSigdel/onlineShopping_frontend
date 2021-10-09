const productReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH__SLIDER__DATA":
      return action.payload;
    case "FETCH__PROMOTIONAL__DATA":
      return action.payload;
    default:
      return state;
  }
};
export default productReducer;
