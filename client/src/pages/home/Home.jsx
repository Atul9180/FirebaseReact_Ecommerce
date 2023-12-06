import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import FeaturedServices from "../../components/services/FeaturedServices";
import Testimonial from "../../components/testimonial/Testimonial";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  console.log(cartItems);

  //Jo is functions se say :shirt cart me jayega vo cartItems me as current state value dikhega
  //example to use redux toolkit:
  const addCart = () => {
    dispatch(addToCart("T-Shirt"));
  };

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  };

  return (
    <Layout>
      <div className="flex gap-3 justify-center">
        <button onClick={() => addCart()}>add</button>
        <button onClick={() => deleteCart()}>delete</button>
      </div>
      <HeroSection />
      <Filter />
      <ProductCard />
      <FeaturedServices />
      <Testimonial />
    </Layout>
  );
};

export default Home;
