import { CartItem } from "@/types/cart.type";

export const setCart = (cart: CartItem[]) => {
  localStorage.cart = JSON.stringify(cart);
};

export const getCart = ():CartItem[] => {
   const cartJson = localStorage.cart;

   return cartJson ? JSON.parse(cartJson) : []
  };