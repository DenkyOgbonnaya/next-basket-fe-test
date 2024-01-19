import { Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: "background.paper", height: "100dvh" }}
    >
      <Typography variant="text-base" color="text.primary">With default Theme:</Typography>
    </Container>
  );
}
