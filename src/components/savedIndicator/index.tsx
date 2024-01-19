import { LoveIcon } from "@/assets";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function SavedIndicator() {
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
    >
      <LoveIcon />

      <Typography
        variant="text-xs"
        letterSpacing="0.0125rem"
        lineHeight="1rem"
        color="primary"
        fontWeight="400"
      >
        {itemsCount}
      </Typography>
    </Stack>
  );
}
