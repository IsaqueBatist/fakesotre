import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartProduct } from "../../types/cart";

interface initialState {
  products: CartProduct[];
  total: number;
}

const initialState: initialState = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, action: { payload: number }) => {
      state.products = state.products.filter((p) => p.id != action.payload);
      console.log("removeu");
      console.log(action.payload);
    },
    increaseItem: (state, action) => {
      state.products = state.products.map((p) =>
        p.id === action.payload ? { ...p, quantity: p.quantity + 1 } : p
      );
    },
    decreaseItem: (state, action) => {
      state.products = state.products
        .map((p) =>
          p.id === action.payload ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0);
    },
    addItem: (state, action: PayloadAction<CartProduct>) => {
      const alredyExist = state.products.find(
        (p) => p.id === action.payload.id
      );
      if (alredyExist) {
        state.products = state.products.map((p) =>
          p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      } else {
        state.products.push(action.payload)
      }
    },
    setCart: (state, action: PayloadAction<CartProduct[]>) => {
      state.products = action.payload;
    },
  },
});

export const { removeItem, setCart, increaseItem, decreaseItem, addItem } =
  cartSlice.actions;
export default cartSlice.reducer;
