import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  devTools: true,
});

//how to use this reducer functions :
//using useDispatchc to pass data to reducer fn.
//using useSelector to get the state current value of initialState .....
