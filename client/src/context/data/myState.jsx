import React from "react";
import MyContext from "./myContext";

const MyState = (props) => {
  const state = {
    name: "Atul Patel",
    course: "MCA",
  };

  const color = "red";

  return (
    <MyContext.Provider value={{ state, color }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
