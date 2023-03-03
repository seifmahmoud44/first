import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], isLoading: false };

const addSlice = createSlice({
  name: "addSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products.filter(
        (product) => product[action.payload] === state.products[action.payload]
      );
    },
  },
});

export default addSlice.reducer;
export const { addProduct, deleteProduct } = addSlice.actions;
