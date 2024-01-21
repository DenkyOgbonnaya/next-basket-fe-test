import { IProduct } from "@/types/product.type";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Button from "@mui/material/Button";
import Product from "../product";

export default function FeaturedProducts() {
  const products: IProduct[] = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "/images/card-cover-5.png",
      images: ["...", "...", "..."],
    },
    {
      id: 2,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "/images/card-cover-5.png",
      images: ["...", "...", "..."],
    },
    {
      id: 3,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "/images/card-cover-5.png",
      images: ["...", "...", "..."],
    },
    {
      id: 4,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "/images/card-cover-5.png",
      images: ["...", "...", "..."],
    },
    {
      id: 5,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "/images/card-cover-5.png",
      images: ["...", "...", "..."],
    },
    {
      id: 5,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "/images/card-cover-5.png",
      images: ["...", "...", "..."],
    },
    {
      id: 6,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "/images/card-cover-5.png",
      images: ["...", "...", "..."],
    },
  ];
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
      <Box display="flex" columnGap="1.88rem" rowGap="0.94rem" flexWrap="wrap">
        {products.map((product) => (
          <Box
            key={product.id}
            width={{ mobile: "100%", tablet: "30%", laptop: "17%" }}
          >
            <Product product={product} />
          </Box>
        ))}
      </Box>
      <Button
        variant="outlined"
        sx={{
          borderRadius: "0.3125rem",
          paddingX:"2.5rem",
          paddingY: "0.94rem",
          fontSize: "test-sm",
          fontWeight: "700",
          lineHeight: "1.375rem",
          letterSpacing: "0.0125rem",
        }}
      >
        LOAD MORE PRODUCTS
      </Button>
    </Box>
  );
}
