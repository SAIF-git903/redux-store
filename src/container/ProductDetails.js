import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProduct,
  selectedProduct,
} from "../redux/actions/productActions";

const containerStyle = {
  display: "flex",
  border: "1px solid black",
  margin: "20px",
  padding: "20px",
  position: "relative",
  img: {
    width: "100px",
    height: "120px",
  },
  data: {
    marginLeft: "40px",
  },
  price: {
    position: "absolute",
    top: "15px",
    right: "15px",
  },
  sold: {
    color: "#DAA520",
  },
  h2: {
    marginTop: "20px",
  },
};

function ProductDetails() {
  const dispatch = useDispatch();

  const products = useSelector((state) => {
    let rr = state.cartReducer.products;
    return rr;
  });
  const renderedProductDetails = products.map((renderedProduct) => {
    const { category, id, title, image, price, description, quantity, rating } =
      renderedProduct;
    let accumulatedPrice = quantity * price;
    return (
      <>
        <div className="container" style={containerStyle} id="container">
          <div>
            <img src={image} alt="" style={containerStyle.img} />
          </div>
          <div className="data" style={containerStyle.data}>
            <h5 style={containerStyle.h2}>{title}</h5>
            <p>Sold : {rating.count} Items</p>
            <p style={containerStyle.sold}>Rating: {rating.rate}</p>
            <p>{description}</p>
            <p>{quantity}</p>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  debugger;
                  dispatch(selectedProduct(renderedProduct));
                }}
              >
                +
              </button>
              <button type="button" className="btn btn-warning">
                BTN
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  dispatch(removeProduct(renderedProduct));
                }}
              >
                -
              </button>
            </div>
          </div>
          <div style={containerStyle.price}>
            <strong>${accumulatedPrice}</strong>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <h1>Shopping Cart</h1>
      {renderedProductDetails}
    </>
  );
}

export default ProductDetails;
