import { CartItem } from "@/types/cart.type";
import { getCart, setCart } from "@/utills/localStorage";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface CartState {
  cart: CartItem[];
}
// get persisted cart from local stroage
const cart = getCart()

const initialState: CartState = {
  cart: cart ||  [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const itemExist = state.cart.find(
        (item) => item.productId == newItem.productId
      );

      if (itemExist) {
        // update quantity instead
        const updatedCart = state.cart.map((item) =>
          item.productId === newItem.productId
            ? { ...item, qty: item.qty + 1 }
            : item
        );
        state.cart = updatedCart;
        // saves cart to local storage
        setCart(updatedCart)
      } else {
        // add new item to count
        state.cart = state.cart.concat(newItem);
         // saves cart to local storage
         setCart(state.cart.concat(newItem))
      }
    },
    removeItem: (state, action: PayloadAction<CartItem["productId"]>) => {
      const updatedCart = state.cart.filter(
        (item) => item.productId != action.payload
      );
      state.cart = updatedCart;
        // saves cart to local storage
        setCart(updatedCart)
    },
    increaseQty: (state, action: PayloadAction<CartItem["productId"]>) => {
      const updatedCart = state.cart.map((item) =>
        item.productId === action.payload
          ? { ...item, qty: item.qty + 1, stock: item.stock - 1 }
          : item
      );
      state.cart = updatedCart;
        // saves cart to local storage
        setCart(updatedCart)
    },
    decreaseQty: (state, action: PayloadAction<CartItem["productId"]>) => {
      const updatedCart = state.cart.map((item) =>
        item.productId === action.payload
          ? { ...item, qty: item.qty - 1, stock: item.stock + 1 }
          : item
      );
      state.cart = updatedCart;
      // saves cart to local storage
      setCart(updatedCart)
    },
  },
});

export const { addItem, removeItem, increaseQty, decreaseQty } =
  cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
