import { StarredIcon, UnStarredIcon } from "@/assets";
import { Typography, Avatar, Icon } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Image from "next/image";

export default function ClientSuccess() {
  const gridImages = [
    "/images/client-success-1.png",
    "/images/client-success-2.png",
    "/images/client-success-3.png",
    "/images/client-success-4.png",
    "/images/client-success-5.png",
    "/images/client-success-6.png",
    "/images/client-success-7.png",
    "/images/client-success-8.png",
    "/images/client-success-9.png",
  ];
  return (
    <Box
      display="flex"
      flexDirection={{ mobile: "column", laptop: "row" }}
      gap={{ mobile: "3rem", laptop: "8rem" }}
      overflow="hidden"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="3.62rem"
      >
        <Typography
          variant="text-2xl"
          fontWeight="700"
          lineHeight="2rem"
          letterSpacing="0.00625rem"
          color="text.primary"
          textAlign="center"
        >
          What they say about us
        </Typography>

        <Stack useFlexGap gap="1.25rem" alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src="/images/client-success-5.png"
            sx={{ width: "5.625rem", height: "5.625rem", flexShrink: 0 }}
          />
          <Stack direction="row" alignItems="center">
            {[1, 2, 3, 4, 5].map((item) => (
              <Icon key={item}>
                {item <= 4 ? <StarredIcon /> : <UnStarredIcon />}
              </Icon>
            ))}
          </Stack>

          <Typography
            variant="text-sm"
            fontWeight="700"
            lineHeight="1.5rem"
            letterSpacing="0.00625rem"
            color="text.secondary"
            component="p"
            textAlign="center"
          >
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </Typography>

          <Stack alignItems="center">
            <Typography
              variant="text-sm"
              fontWeight="700"
              lineHeight="2rem"
              letterSpacing="0.00625rem"
              color="primary"
            >
              Regina Miles
            </Typography>
            <Typography
              variant="text-sm"
              fontWeight="700"
              lineHeight="2rem"
              letterSpacing="0.00625rem"
              color="text.primary"
            >
              Designer
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{
          mobile: "repeat(3, 1fr)",
          tablet: "repeat(3, 1fr)",
        }}
        gap={{ mobile: "0.87rem", laptop: "1.12rem" }}
        width="100%"
      >
        {gridImages.map((imageUrl, index) => (
          <Box
            key={index}
            position="relative"
            width={{ mobile: "5rem", tablet: "8.92306rem" }}
            height={{ mobile: "5rem", tablet: "8.92306rem" }}
            overflow="hidden"
            
          >
            <Image src={imageUrl} alt="" fill style={{objectFit:"cover"}} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
