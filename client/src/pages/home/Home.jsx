import React from "react";
import Layout from "../../components/layout/Layout";
import { MyContextState } from "../../context/data/myContext";

const Home = () => {
  const {
    state: { name, course },
    color,
  } = MyContextState();
  console.log({ name, course });

  return (
    <Layout>
      <h1>Name: {name}</h1>
      <h1>Class: {course}</h1>
      <h1>Color: {color}</h1>
    </Layout>
  );
};

export default Home;
