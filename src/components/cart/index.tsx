import { useStoreDispatch } from "@/hooks/useStoreDispatch";
import { RootState } from "@/store";
import { decreaseQty, increaseQty, removeItem } from "@/store/slice/cart.slice";
import { CartItem } from "@/types/cart.type";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import CartItemCard from "../cartItemCard";

export default function Cart() {
  const { cart } = useSelector((state: RootState) => state.cart);
  const dispatch = useStoreDispatch();

  const handleRemoveItem = (item: CartItem) => {
    dispatch(removeItem(item.productId));
  };
  const handleIncQty = (item: CartItem) => {
    if(item.stock < 1) return
    dispatch(increaseQty(item.productId));
  };
  const handleDecQty = (item: CartItem) => {
    if(item.qty <1) return;

    dispatch(decreaseQty(item.productId));
  };
  return (

      <Box display="flex" flexDirection="column" gap="0.62rem">
        {cart.map((item) => (
          <CartItemCard
            item={item}
            key={item.productId}
            onRemove={handleRemoveItem}
            onDecQty={handleDecQty}
            onIncQty={handleIncQty}
          />
        ))}
     
    </Box>
  );
}
