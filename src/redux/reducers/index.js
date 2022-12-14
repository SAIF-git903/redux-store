import { combineReducers } from "redux";
import { productReducer, cartReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  // product: selectedProductReducer,
  cartReducer,
});

export default reducers;
