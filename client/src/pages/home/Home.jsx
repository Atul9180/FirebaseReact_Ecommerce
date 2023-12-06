import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import FeaturedServices from "../../components/services/FeaturedServices";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <FeaturedServices />
      <Testimonial />
    </Layout>
  );
};

export default Home;
