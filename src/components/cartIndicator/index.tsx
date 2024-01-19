import { CartIcon } from "@/assets";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function CartIndicator() {
  const itemsCount = 1;
  return (
    <Stack
      direction="row"
      component="button"
      alignItems="center"
      useFlexGap
      gap="0.31rem"
      sx={{
        border: "none",
        outine: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
      }}
      color={{mobile:"text.primary", tablet: "primary.main"}}
    >
      <CartIcon />

      <Typography
        variant="text-xs"
        letterSpacing="0.0125rem"
        lineHeight="1rem"
        fontWeight="400"
      >
        {itemsCount}
      </Typography>
    </Stack>
  );
}
