import { BackBookIcon, OpenBookIcon, RocketIcon } from "@/assets";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import InfoCard from "../infoCard";
import Post from "../post";

export default function Posts() {
  const data = [
    {
      title: "Easy Wins",
      message: "Get your best looking smile now!",
      coverImge: "/images/post-cover-1.png"
    },
    {
      title: "Concrete",
      message:
        "Defalcate is most focused in helping you discover your most beautiful smile",
        coverImge: "/images/post-cover-3.png"
    },
    {
      title: "Hack Growth",
      message: "Overcame any hurdle or any other problem.",
      coverImge: "/images/post-cover-2.png"
    },
  ];
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="3.5rem">
      <Stack useFlexGap gap="0.62rem" textAlign="center">
        <Typography
          variant="text-sm"
          color="primary"
          fontWeight="700"
          lineHeight="1.5rem"
          letterSpacing="0.0125rem"
        >
          Practice Advice
        </Typography>
        <Typography
          variant="text-xl"
          color="text.primary"
          fontWeight="700"
          lineHeight="3.125rem"
          letterSpacing="0.00625rem"
        >
          Featured Posts
        </Typography>
       
      </Stack>
      <Box
        display="flex"
        gap="0.62rem"
        flexWrap="wrap"
        justifyContent="stretch"
      >
        {data.map((item) => (
          <Box
            key={item.title}
            width={{ mobile: "100%", tablet: "30%", laptop: "32%" }}
          >
            <Post coverImage={item.coverImge}  />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
