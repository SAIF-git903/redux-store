import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCTS,
} from "../constants/action-types";

export const setProduct = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (product) => {
  return {
    type: REMOVE_SELECTED_PRODUCTS,
    payload: product,
  };
};
