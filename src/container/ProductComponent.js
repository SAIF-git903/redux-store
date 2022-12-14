import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  // const selectCounterValue = (state) => state.value;
  // const currentValue = selectCounterValue(store.getState());
  // console.log(currentValue, "Getting State");

  const dispatch = useDispatch();
  const renderingData = products.map((product) => {
    const { category, id, title, image, price, quantity } = product;
    return (
      <>
        <div className="col-md-4 " style={{ marginTop: "20px" }} key={price}>
          <div className="card" style={{ width: "15rem", cursor: "pointer" }}>
            <img
              src={image}
              className="card-img-top"
              alt="product img"
              style={{ width: "50%", height: "50%", marginLeft: "25%" }}
            />
            <div className="card-body" key={id}>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{category}</p>
              <p>
                Price : <sup>$</sup>
                <strong>{price}</strong>
              </p>
              <a
                href="#"
                className="btn btn-primary"
                onClick={() => {
                  dispatch(selectedProduct(product));
                }}
              >
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      </>
    );
  });
  return <>{renderingData}</>;
}

export default ProductComponent;
