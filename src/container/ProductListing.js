import React, { useEffect } from "react";
import axios from "axios";
import { setProduct } from "../redux/actions/productActions";

import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";

function HomeContainer() {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await axios 
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    let data = response.data.map((item) => {
      item.quantity = 1;
      return item;
    });
    dispatch(setProduct(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row ">
        <ProductComponent />
      </div>
    </div>
  );
}

export default HomeContainer;
