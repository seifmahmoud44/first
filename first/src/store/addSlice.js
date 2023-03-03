import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
  name: "addSlice",
  initialState: { products: null },
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload.data);
      state.products.push(action.payload);
    },
  },
});

export default addSlice.reducer;
export const { addProduct } = addSlice.actions;
