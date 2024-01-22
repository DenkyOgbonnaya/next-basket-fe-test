import { useStoreDispatch } from "@/hooks/useStoreDispatch";
import { RootState } from "@/store";
import { saveItem } from "@/store/slice/whishlist.slice";
import { CartItem } from "@/types/cart.type";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import WishItemCard from "../wishItemCard";

export default function WishList() {
  const { whichlist } = useSelector((state: RootState) => state.whichlist);
  const dispatch = useStoreDispatch();

  const handleToggle = (item: CartItem) => {
    dispatch(saveItem(item));
  };

  return (
  
      <Box display="flex" flexDirection="column" gap="0.62rem">
        {whichlist.map((item) => (
          <WishItemCard
            item={item}
            key={item.productId}
            onToggle={handleToggle}
          />
        ))}
   
    </Box>
  );
}
