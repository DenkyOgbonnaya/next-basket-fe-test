import ProductList from "@/app/_components/productList";
import { IProduct } from "@/types/product.type";
import { Typography } from "@mui/material";
import { Box, Stack, Container } from "@mui/system";

export default function BestSellerProducts() {
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

  const handleProductClick = (product: IProduct) => {};
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
        <ProductList products={products} onClick={handleProductClick} />
      </Container>
    </Box>
  );
}
