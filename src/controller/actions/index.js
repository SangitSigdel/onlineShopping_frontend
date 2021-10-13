import shoppingApi from "../api/shoppingApi";

export const sliderAction = () => {
  return async function (dispatch) {
    const response = await shoppingApi.get("/product?slider=true");

    dispatch({
      type: "FETCH__SLIDER__DATA",
      payload: response.data.data,
    });
  };
};

export const promotionalAction = () => {
  return async function (dispatch) {
    const response = await shoppingApi.get("/product?promotional=true");

    dispatch({
      type: "FETCH__PROMOTIONAL__DATA",
      payload: response.data.data,
    });
  };
};

export const addToCartAction = (product) => {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: product,
  };
};

export const removeFromCartAction = (product) => {
  return {
    type: "REMOVE_PRODUCT_FROM_CART",
    payload: product,
  };
};
