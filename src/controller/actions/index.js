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
