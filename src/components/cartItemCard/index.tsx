import { Caution, Minus, Plus, Trash } from "@/assets";
import { CartItem } from "@/types/cart.type";
import { truncateWords } from "@/utills/helper";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import Image from "next/image";
import { Amount } from "..";

interface Props {
  item: CartItem;
  onRemove: (item: CartItem) => void;
  onIncQty: (item: CartItem) => void;
  onDecQty: (item: CartItem) => void;
}
export default function CartItemCard({
  item,
  onDecQty,
  onRemove,
  onIncQty,
}: Props) {
  const getOriginalPrice = (item: CartItem) => {
    const percentDiscount = Number(item.discount);
    const priceDiscount = percentDiscount / 100;

    return item.price / (1 - priceDiscount);
  };
  return (
    <Box
      sx={{
        bgColor: "background.default",
        boxShadow: "0px 0px 1px 0px #737373",
        p: "1rem",
        borderRadius: "5px",
      }}
      component="article"
    >
      <Box display="flex" justifyContent="space-between">
        <Stack direction="row" useFlexGap gap="0.62rem">
          <Box
            position="relative"
            width={{ mobile: "50px", laptop: "80px" }}
            height={{ mobile: "50px", laptop: "80px" }}
          >
            <Image src={item.thumbnail} alt={item.title} fill />
          </Box>
          <Stack>
            <Typography
              variant="text-sm"
              color="text.primary"
              fontWeight="700"
              lineHeight="1.5rem"
              letterSpacing="0.0125rem"
            >
              {truncateWords(item.title, 15)}
            </Typography>
            <Typography
              variant="text-xs"
              color="text.secondary"
              fontWeight="600"
              lineHeight="1.5rem"
              letterSpacing="0.0125rem"
            >
              Category: Phones
            </Typography>
            <Stack direction="row" gap="0.31rem" useFlexGap alignItems="center">
              <Caution width={20} height={20} />
              <Typography
                variant="text-xs"
                color="text.secondary"
                fontWeight="600"
                lineHeight="1.5rem"
                letterSpacing="0.0125rem"
              >
                Stock: {item.stock} units left: ;
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Typography
            variant="text-sm"
            color="secondary"
            fontWeight="700"
            lineHeight="1.5rem"
            letterSpacing="0.0125rem"
            textAlign="right"
          >
            <Amount amount={item.price} />
          </Typography>
          <Stack
            direction={{ mobile: "column", laptop: "row" }}
            alignItems="center"
            useFlexGap
            gap="0.31rem"
          >
            <Typography
              variant="text-sm"
              color="muted.main"
              fontWeight="600"
              lineHeight="1.5rem"
              letterSpacing="0.0125rem"
              sx={{ textDecoration: "line-through" }}
            >
              <Amount amount={getOriginalPrice(item)} />
            </Typography>
            <Box
              display="flex"
              px="0.5rem"
              height="2rem"
              justifyContent="center"
              alignItems="center"
              borderRadius="10px"
              bgcolor="warning.main"
              sx={{ opacity: 0.5 }}
            >
              <Typography
                variant="text-xs"
                color="light.main"
                fontWeight="600"
                lineHeight="1.5rem"
                letterSpacing="0.0125rem"
              >
                -{item.discount}%
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: "1rem" }}
      >
        <Button
          color="primary"
          sx={{ fontSize: "0.75rem", color: "primary.main" }}
          startIcon={<Trash width={20} height={20} />}
          onClick={() => onRemove(item)}
        >
          Remove
        </Button>
        <Stack flexDirection="row" alignItems="center" useFlexGap gap="0.63rem">
          <IconButton onClick={() => onDecQty(item)}>
            <Minus width={30} height={30} />
          </IconButton>
          <Typography
            variant="text-sm"
            color="text.primary"
            fontWeight="400"
            lineHeight="1.5rem"
            letterSpacing="0.0125rem"
          >
            {item.qty}
          </Typography>
          <IconButton color="warning" onClick={() => onIncQty(item)}>
            <Plus width={30} height={30} />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
