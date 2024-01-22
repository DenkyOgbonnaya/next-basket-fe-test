import ProductList from "@/app/_components/productList";
import { useGetProductsQuery } from "@/services/product.service";
import { IProduct } from "@/types/product.type";
import { Skeleton, Typography } from "@mui/material";
import { Box, Stack, Container } from "@mui/system";
import { useRouter } from "next/navigation";

export default function BestSellerProducts() {
  const { data, isLoading } = useGetProductsQuery(
    {skip:0, limit:10}
  );
  const router = useRouter()


  const handleProductClick = (product: IProduct) => {
    router.push(`/${product.id}`)
  };
  return (
    <Box component="section" bgcolor="background.paper" py="3rem">
      <Container
        maxWidth={false}
        sx={{
          maxWidth: {
            mobile: "100%",
            laptop: "80%",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          },
        }}
      >
        <Stack
          useFlexGap
          gap="0.62rem"
          paddingBottom="1rem"
          borderBottom="1px solid #ECECEC"
        >
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
      </Container>
    </Box>
  );
}
