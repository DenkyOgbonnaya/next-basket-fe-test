import { CartItem } from "@/types/cart.type";
import { getWhichlist, setWhichlist } from "@/utills/localStorage";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface WhichlistState {
  whichlist: CartItem[];
}
// get persisted whichlist from local stroage
const list = getWhichlist();

const initialState: WhichlistState = {
  whichlist: list || [],
};

export const cartSlice = createSlice({
  name: "whichlist",
  initialState,
  reducers: {
    saveItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const itemExist = state.whichlist.find(
        (item) => item.productId == newItem.productId
      );

      if (itemExist) {
        // update quantity instead
        const updated = state.whichlist.filter(
          (item) => item.productId != action.payload.productId
        );
        state.whichlist = updated;
        // saves  to local storage
        setWhichlist(updated);
      } else {
        // add new item to count
        state.whichlist = state.whichlist.concat(newItem);
        // saves cart to local storage
        setWhichlist(state.whichlist.concat(newItem));
      }
    },
  },
});

export const { saveItem } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
