"use client";
import { HeaderBar, NavBar } from "@/components";
import { Container } from "@mui/system";

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "background.paper",
        height: "100dvh",
        padding: "0px",
      }}
    >
      <HeaderBar />
      <NavBar />
    </Container>
  );
}
