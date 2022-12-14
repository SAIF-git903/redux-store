import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const cartStyle = {
  marginRight: "25px",
  marginTop: "10px",
  fontSize: "25px",
  span: {
    textDecoration: "none",
  },
};

function Header() {
  const quantity = useSelector((state) => {
    let sum = 0;
    state.cartReducer.products.forEach((item) => {
      sum += item.quantity;
    });
    return sum;
  });
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            FakeStore
          </a>
          <Link to="/cartItemsDetails" style={cartStyle}>
            {<FiShoppingCart />}
            <span style={cartStyle.span}>{quantity}</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
