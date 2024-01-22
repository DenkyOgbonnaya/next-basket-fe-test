import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { IProduct } from "@/types/product.type";
import { Amount } from "@/components";

interface Props {
  product: IProduct;
  onClick: (product: IProduct) => void;
}
export default function Product({ product, onClick }: Props) {
  const handleProductClick = () => {
    onClick(product);
  };
  return (
    <Card
      component="article"
      sx={{ width: { mobile: "100%", laptop: "100%" }, boxShadow: "none" }}
      onClick={handleProductClick}
    >
      <CardMedia
        sx={{ height: "14.875rem" }}
        image={product.thumbnail}
        title={product.title}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.62rem",
          padding: "1.56rem",
          paddingBottom: "2.19rem",
          textAlign: "center",
        }}
      >
        <Typography
          variant="text-base"
          fontWeight="700"
          lineHeight="1.5rem"
          letterSpacing="0.00625rem"
          color="text.primary"
          component="div"
        >
          {product.title}
        </Typography>
        <Typography
          variant="text-sm"
          fontWeight="700"
          lineHeight="1.5rem"
          letterSpacing="0.00625rem"
          color="text.secondary"
        >
          {product.category}
        </Typography>
        <Stack
          direction="row"
          mt="calc(0.94rem - 0.62rem)"
          useFlexGap
          gap="0.31rem"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="text-base"
            fontWeight="700"
            lineHeight="1.5rem"
            letterSpacing="0.00625rem"
            color="muted.main"
          >
            <Amount amount={product.price} />
          </Typography>
          <Typography
            variant="text-base"
            fontWeight="700"
            lineHeight="1.5rem"
            letterSpacing="0.00625rem"
            color="secondary"
          >
            <Amount amount={product.discountPercentage} />
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
