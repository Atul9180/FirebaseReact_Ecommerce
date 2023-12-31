import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          }
        />
        <Route path="/login" element={<UserSignIn />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/productinfo/:id" element={<ProductDetails />} />
        <Route
          path="/addproduct"
          element={
            <ProtectedRouteForAdmin>
              <AddProduct />
            </ProtectedRouteForAdmin>
          }
        />
        <Route
          path="/updateproduct"
          element={
            <ProtectedRouteForAdmin>
              <UpdateProduct />
            </ProtectedRouteForAdmin>
          }
        />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;

//user Protected Route
export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

//admin Protected Route
export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin?.user.email === "atul@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
