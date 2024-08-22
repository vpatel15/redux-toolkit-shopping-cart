import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk('fetch-all-products',async (url) => {
  const response = await fetch(url);
  return response.json(); 
})

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [], fetchstatus: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.data = action.payload
      state.fetchstatus = 'success'
    })
    .addCase(fetchAllProducts.pending, (state) => {
      state.fetchstatus = 'loading'
    })
    .addCase(fetchAllProducts.rejected, (state) => {
      state.fetchstatus = 'error'
    })
  }
})

export default productSlice;

