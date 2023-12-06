import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

//first slice of name: cart....will let store know about all slices:
//reducers will have functions(state,action) of dispatch to use later ....
//state will tell current initial state current situation values.....action has payload to use value in reducer fn.
//action has type and payload.....type a string and payload arguments for reducer functions:

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    deleteFromCart(state, action) {
      return state.filter((item) => item.id != action.payload.id);
    },
  },
});

//Now destruct the reducer fns. from cartSlice actions...
export const { addToCart, deleteFromCart } = cartSlice.actions;
//then export reducers of cartslice:  export cartSlice.reducer
export default cartSlice.reducer;

//Add this slice to store inside reducers....
