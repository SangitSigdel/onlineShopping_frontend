import { combineReducers } from "redux";

import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import topProductReducer from "./topProductReducer";
import searchProductReducer from "./searchProductReducer";

export default combineReducers({
  products: productReducer,
  topProducts: topProductReducer,
  cart: cartReducer,
  productSearched: searchProductReducer
});
