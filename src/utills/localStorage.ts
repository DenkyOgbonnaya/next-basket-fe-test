import { CartItem } from "@/types/cart.type";

export const setCart = (cart: CartItem[]) => {
  localStorage.cart = JSON.stringify(cart);
};

export const getCart = ():CartItem[] => {
  if(typeof window != "undefined") {
    const cartJson = localStorage.cart;

    return cartJson ? JSON.parse(cartJson) : []
  }
  
  return []
  };

  export const setWhichlist = (list: CartItem[]) => {
    if(typeof window != "undefined") {
      localStorage.wishlist = JSON.stringify(list);
    }
    
  };
  
  export const getWhichlist = ():CartItem[] => {
    if(typeof window != "undefined") {
      const listJson = localStorage.wishlist;
  
      return listJson ? JSON.parse(listJson) : []
    }
   return []
    };