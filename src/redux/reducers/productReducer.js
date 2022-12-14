import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCTS,
} from "../constants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCT:
      const _products = state.products;
      let _itemIndex = _products.findIndex((item) => item.id === payload.id);
      if (_itemIndex === -1) {
        _products.push(payload);
      } else {
        _products[_itemIndex].quantity += 1;
      }
      let rr = { ...state, products: _products };

      return rr;

    case REMOVE_SELECTED_PRODUCTS:
      let products = [...state.products];
      let itemIndex = products.findIndex((item) => item.id === payload.id);
      if (products[itemIndex]?.quantity < 2) {
        products.splice(itemIndex, 1);
      } else {
        products[itemIndex].quantity -= 1;
      }

      const aaa = {
        ...state,
        products,
      };
      return aaa;
    default:
      return state;
  }
};
