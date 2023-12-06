import { createContext, useContext } from "react";

const MyContext = createContext();

export default MyContext;
export const MyContextState = () => useContext(MyContext);
