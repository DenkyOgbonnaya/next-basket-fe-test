"use client";
import { HeaderBar, NavBar } from "@/components";
import { IBlog } from "@/types/blog.type";
import { Box, Container, Stack } from "@mui/system";
import BlogList from "./_components/blogList";
import CallToAction from "./_components/callToAction";
import ClientSuccess from "./_components/clientSuccess";
import FeaturedProducts from "./_components/featuredProducts";
import Footer from "./_components/footer";
import HowItWorks from "./_components/howItWorks";
import Posts from "./_components/posts";

export default function Home() {
  const blogs: IBlog[] = [
    {
      title: "FURNITURE",
      numberOfItems: 5,
      coverPhoto: "/images/card-cover-5.png",
    },
    {
      title: "FURNITURE",
      numberOfItems: 5,
      coverPhoto: "/images/card-cover-6.png",
    },
    {
      title: "FURNITURE",
      numberOfItems: 5,
      coverPhoto: "/images/card-cover-8.png",
    },
    {
      title: "FURNITURE",
      numberOfItems: 5,
      coverPhoto: "/images/card-cover-7.png",
    },
  ];
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.paper",
        height: "100dvh",
        padding: "0px",
        gap: "5rem",
      }}
    >
      <Stack useFlexGap gap="0.75rem">
        <HeaderBar />
        <NavBar />
      </Stack>
      <Box
        component="section"
        px={{ mobile: "2.5rem", laptop: "9.19rem" }}
        py={{ mobile: "2rem", laptop: "5rem" }}
      >
        <BlogList blogs={blogs} />
      </Box>
      <Box
        component="section"
        px={{ mobile: "2.5rem", laptop: "1rem" }}
        py={{ mobile: "2rem", laptop: "5rem" }}
        maxWidth={{ mobile: "100%", laptop: "75%" }}
        alignSelf="center"
      >
        <FeaturedProducts />
      </Box>
      <Box
        component="section"
        px={{ mobile: "2.5rem", laptop: "1rem" }}
        py={{ mobile: "2rem", laptop: "5rem" }}
        maxWidth={{ mobile: "100%", laptop: "75%" }}
        alignSelf="center"
      >
        <HowItWorks />
      </Box>
      <Box
        component="section"
        px={{ mobile: "2.5rem", laptop: "1rem" }}
        py={{ mobile: "2rem", laptop: "5rem" }}
        maxWidth={{ mobile: "100%", laptop: "75%" }}
        alignSelf="center"
      >
        <Posts />
      </Box>
      <Box
        component="section"
        px={{ mobile: "2.5rem", laptop: "1rem" }}
        py={{ mobile: "2rem", laptop: "5rem" }}
        maxWidth={{ mobile: "100%", laptop: "75%" }}
        alignSelf="center"
      >
        <ClientSuccess />
      </Box>
      <Box
        component="section"
        px={{ mobile: "2.5rem", laptop: "1rem" }}
        maxWidth={{ mobile: "100%", laptop: "75%" }}
        py={{ mobile: "2rem", laptop: "5rem" }}
        alignSelf="center"
        bgcolor="green"
      >
        <CallToAction />
      </Box>
      <Footer />
    </Container>
  );
}
