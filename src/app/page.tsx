"use client"
import { HeaderBar } from "@/components";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: "background.paper", height: "100dvh", padding:"0px" }}
    >
      <HeaderBar />
    </Container>
  );
}
