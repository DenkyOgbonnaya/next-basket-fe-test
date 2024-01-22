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
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.default",
        height: "100dvh",
        padding: "0px",
        maxWidth:{mobile:"100%", laptop:"xl"},
        overflowX:'hidden'
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
        <Container
          maxWidth={false}
          sx={{ maxWidth: { mobile: "100%", laptop: "100%" } }}
        >
          <BlogList blogs={blogs} />
        </Container>
      </Box>
      <Box
        component="section"
        px={{ mobile: "2.5rem", laptop: "1rem" }}
        py={{ mobile: "2rem", laptop: "5rem" }}
        alignSelf="center"
      >
        <Container
          maxWidth={false}
          sx={{ maxWidth: { mobile: "100%", laptop: "75%" } }}
        >
          <FeaturedProducts />
        </Container>
      </Box>
      <Box
        component="section"
        px={{ mobile: "2.5rem", laptop: "1rem" }}
        py={{ mobile: "2rem", laptop: "5rem" }}
        alignSelf="center"
      >
        <Container
          maxWidth={false}
          sx={{ maxWidth: { mobile: "100%", laptop: "75%" } }}
        >
          <HowItWorks />
        </Container>
      </Box>
      <Box
        component="section"
        px={{ mobile: "2.5rem", laptop: "1rem" }}
        py={{ mobile: "2rem", laptop: "5rem" }}
        alignSelf="center"
      >
        <Container
          maxWidth={false}
          sx={{ maxWidth: { mobile: "100%", laptop: "75%" } }}
        >
          <Posts />
        </Container>
      </Box>
      <Box
        component="section"
        px={{ mobile: "2.5rem", laptop: "1rem" }}
        py={{ mobile: "2rem", laptop: "5rem" }}
        alignSelf="center"
      >
        <Container
          maxWidth={false}
          sx={{ maxWidth: { mobile: "100%", laptop: "75%" } }}
        >
          <ClientSuccess />
        </Container>
      </Box>
      <Box
        component="section"
        bgcolor="background.default"
      >
         <CallToAction />
      </Box>
      <Footer />
    </Container>
  );
}
