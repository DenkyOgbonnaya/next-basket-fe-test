import { IProduct } from "@/types/product.type";
import { Skeleton, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Button from "@mui/material/Button";
import ProductList from "../productList";
import { useRouter } from "next/navigation";
import { useGetProductsQuery } from "@/services/product.service";
import { useState } from "react";

export default function FeaturedProducts() {
  const [skip, setSkip] = useState(0);
  const LIMIT = 10;
  const { data, isLoading, isFetching } = useGetProductsQuery(
    {skip, limit:LIMIT}
  );
  const router = useRouter();
  const totalRecords = data?.total || 0;
  const totalSkips = Math.ceil(totalRecords / LIMIT);

  const handleProductClick = (product: IProduct) => {
    router.push(`/${product.id}`);
  };

  const handleLoadMore = () => {
    setSkip((s) => s + 1);
  };
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="3.5rem">
      <Stack useFlexGap gap="0.62rem" textAlign="center">
        <Typography
          variant="text-xl"
          color="text.secondary"
          fontWeight="400"
          lineHeight="1.875rem"
          letterSpacing="0.0125rem"
        >
          Featured Products
        </Typography>
        <Typography
          variant="text-xl"
          color="text.secondary"
          fontWeight="700"
          lineHeight="2rem"
          letterSpacing="0.00625rem"
          textTransform="uppercase"
        >
          BESTSELLER PRODUCTS
        </Typography>
        <Typography
          variant="text-sm"
          color="text.secondary"
          fontWeight="400"
          lineHeight="1.25rem"
          letterSpacing="0.0125rem"
        >
          Problems trying to resolve the conflict between
        </Typography>
      </Stack>
      {isLoading ? (
        <Box
          display="flex"
          columnGap="1rem"
          rowGap="0.94rem"
          flexWrap="wrap"
          bgcolor="background.default"
        >
          {[1, 3, 4, 5, 6].map((item) => (
            <Box
              key={item}
              width={{ mobile: "100%", tablet: "30%", laptop: "17%" }}
            >
              <Stack useFlexGap gap="0.3rem">
                <Skeleton variant="rectangular" animation="wave" height="200px" width="200px" />
                <Skeleton variant="text" height="20px" width="100px" />
                <Skeleton variant="text" height="20px" width="50px" />
              </Stack>
            </Box>
          ))}
        </Box>
      ) : (
        <ProductList
          products={data?.products || []}
          onClick={handleProductClick}
        />
      )}

      {skip < totalSkips && (
        <Button
          onClick={handleLoadMore}
          variant="outlined"
          sx={{
            borderRadius: "0.3125rem",
            paddingX: "2.5rem",
            paddingY: "0.94rem",
            fontSize: "0.875rem",
            fontWeight: "700",
            lineHeight: "1.375rem",
            letterSpacing: "0.0125rem",
          }}
        >
          {isFetching ? "FETCHING MORE..." : " LOAD MORE PRODUCTS"}
        </Button>
      )}
    </Box>
  );
}
