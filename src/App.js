import "./App.css";
import Header from "./container/Header";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./container/ProductListing";
import CartItemsDetails from "./container/CartItemsDetails";
import ProductDetails from "./container/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cartItemsDetails" element={< ProductDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
