import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProductIds: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartProductIds = [action.payload, ...state.cartProductIds]
    },
    removeFromCart: (state, action) => {
      let tempCarts = [...state.cartProductIds];
      tempCarts = tempCarts.filter((cartId) => cartId !== action.payload);
      state.cartProductIds = [...tempCarts];
      // const indexToRemove = state.cartProductIds.indexOf[action.payload];
      // state.cartProductIds.splice(indexToRemove, 1);
    },
    clearAllItems: (state) => {
      state.cartProductIds = []
    }
  }
})

// const { actions: cartActions, reducer: cartReducer } = cartSlice;

export default cartSlice;