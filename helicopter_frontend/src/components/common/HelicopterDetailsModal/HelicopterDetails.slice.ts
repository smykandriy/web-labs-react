import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../redux";
import { Helicopter } from "../HelicopterItem";

interface CartState {
  items: { item: Helicopter; count: number }[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Helicopter>) => {
      const existingItem = state.items.find((item) => item.item.id === action.payload.id);

      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.items.push({ item: action.payload, count: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<Helicopter>) => {
      const existingItem = state.items.find((item) => item.item.id === action.payload.id);

      if (existingItem) {
        if (existingItem.count === 1) {
          state.items = state.items.filter((item) => item.item.id !== action.payload.id);
        } else {
          existingItem.count -= 1;
        }
      }
    },
  },
});


export const selectCartItems = (state: RootState) => state.cart.items;

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
