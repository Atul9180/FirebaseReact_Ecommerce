import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import ProductDetails from "./pages/products/ProductDetails";
import UserSignUp from "./pages/Authentication/UserSignUp";
import UserSignIn from "./pages/Authentication/UserSignIn";

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
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
