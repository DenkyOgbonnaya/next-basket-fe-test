import { IProduct } from "@/types/product.type";
import { Box } from "@mui/system";
import Product from "../product";

interface Props {
    products: IProduct[];
    onClick: (product: IProduct) => void;
}
export default function ProductList({products, onClick}:Props) {
  return (
    <Box display="flex" columnGap="1.88rem" rowGap="0.94rem" flexWrap="wrap">
      {products.map((product) => (
        <Box
          key={product.id}
          width={{ mobile: "100%", tablet: "30%", laptop: "17%" }}
        >
          <Product product={product} onClick={onClick} />
        </Box>
      ))}
    </Box>
  );
}
