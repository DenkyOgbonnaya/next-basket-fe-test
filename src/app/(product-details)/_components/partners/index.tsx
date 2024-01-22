import { Aws, HoliIcon, Leave, Lyft, Redit, Stripe } from "@/assets";
import { Icon } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function Partners() {
  return (
    <Box bgcolor="background.paper"  py="3rem">
      <Container
        maxWidth={false}
        sx={{
          maxWidth: { mobile: "100%", laptop: "80%" },
          minHeight:"fit-content",
          display: "flex",
          flexDirection: { mobile: "column", laptop: "row" },
          justifyContent: {mobile:"flex-start", laptop:"space-between"},
          alignItems:"center",
          gap:{mobile:"3.75rem", laptop:"1rem"}
        }}
      >
        <HoliIcon />
        <Lyft />
        <Leave />
        <Stripe />
        <Aws />
        <Redit />
      </Container>
    </Box>
  );
}
