import { BackBookIcon, OpenBookIcon, RocketIcon } from "@/assets";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import InfoCard from "../infoCard";

export default function HowItWorks() {
  const data = [
    {
      title: "Easy Wins",
      message: "Get your best looking smile now!",
      icon: BackBookIcon,
    },
    {
      title: "Concrete",
      message:
        "Defalcate is most focused in helping you discover your most beautiful smile",
      icon: OpenBookIcon,
    },
    {
      title: "Hack Growth",
      message: "Overcame any hurdle or any other problem.",
      icon: RocketIcon,
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
          color="text.primary"
          fontWeight="700"
          lineHeight="2rem"
          letterSpacing="0.00625rem"
          textTransform="uppercase"
        >
          THE BEST SERVICES
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
      <Box
        display="flex"
        columnGap="1.88rem"
        rowGap="0.94rem"
        flexWrap="wrap"
        justifyContent="stretch"
      >
        {data.map((item) => (
          <Box
            key={item.title}
            width={{ mobile: "100%", tablet: "30%", laptop: "30%" }}
          >
            <InfoCard {...item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
