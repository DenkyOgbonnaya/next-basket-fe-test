import { CartItem } from "@/types/cart.type";

export const setCart = (cart: CartItem[]) => {
  localStorage.cart = JSON.stringify(cart);
};

export const getCart = ():CartItem[] => {
   const cartJson = localStorage.cart;

   return cartJson ? JSON.parse(cartJson) : []
  };

  export const setWhichlist = (list: CartItem[]) => {
    localStorage.wishlist = JSON.stringify(list);
  };
  
  export const getWhichlist = ():CartItem[] => {
     const listJson = localStorage.wishlist;
  
     return listJson ? JSON.parse(listJson) : []
    };