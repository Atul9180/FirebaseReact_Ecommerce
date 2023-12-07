import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import NoPage from "./pages/nopage/NoPage";
import ProductDetails from "./pages/products/ProductDetails";
import UserSignUp from "./pages/Authentication/UserSignUp";
import UserSignIn from "./pages/Authentication/UserSignIn";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import AddProduct from "./pages/admin/productPages/AddProduct";
import UpdateProduct from "./pages/admin/productPages/UpdateProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<UserSignIn />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/productinfo/:id" element={<ProductDetails />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/updateproduct" element={<UpdateProduct />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
