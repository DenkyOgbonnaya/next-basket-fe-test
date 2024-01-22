"use client";
import { Skeleton } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function Loading() {

  return (
    <Box
      component="article"
      bgcolor="background.paper"
      paddingBottom="3rem"
      paddingTop="2.12rem"
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: { mobile: "100%", laptop: "80%" },
          display: "flex",
          flexDirection: { mobile: "column", laptop: "row" },
          gap: "1.88rem",
        }}
      >
        <Box
          display="flex"
          width={{ mobile: "100%", laptop: "50%" }}
          flexDirection="column"
          gap="1.31rem"
          position="relative"
        >
          <Box
            display="flex"
            width="100%"
            sx={{
              scrollBehavior: "smooth",
              transition: "all",
              transitionDuration: "1s",
              transitionTimingFunction: "ease-in-out",
              overflow: "scroll",
              scrollbarWidth: "0px",
              "&::-webkit-scrollbar": {
                width: 0,
              },
            }}
            gap="0.5rem"
          >
            <Skeleton
              variant="rectangular"
              sx={{
                minWidth: { mobile: "350px", laptop: "100%" },
                height: { mobile: "15rem", laptop: "28.125rem" },
              }}
            ></Skeleton>
          </Box>

          <Box display="flex" gap="1.19rem" flexWrap="wrap">
            {[1, 2, 34, 4].map((img, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                sx={{
                  height: { mobile: "100px", laptop: "100px" },
                  width: { mobile: "100px", laptop: "100px" },
                }}
              ></Skeleton>
            ))}
          </Box>
        </Box>

        <Box
          display="flex"
          flex={1}
          flexDirection="column"
          gap="0.75rem"
          paddingX="1.5rem"
          paddingY="0.6rem"
          height={{ mobile: "fit-content", laptop: "28.125rem" }}
        >
          <Skeleton variant="text" width="200px" />
          <Skeleton variant="text" width="200px" />
          <Skeleton variant="text" width="200px" />

          <Box
            borderTop="1px solid #BDBDBD"
            justifySelf="flex-end"
            mt="6.44rem"
            display ="flex"
            gap="0.5rem"
            paddingY="1rem"
          >
            {[1, 2, 3, 4].map((color) => (
              <Skeleton
                key={color}
                variant="rectangular"
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius:"100%"
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
