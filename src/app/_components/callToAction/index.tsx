import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Button from "@mui/material/Button";
import { Amount } from "@/components";

export default function CallToAction() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      position="relative"
      alignItems="center"
      gap="3.5rem"
      width="100%"
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // width: '100%',
          backgroundImage: `url(/images/call-to-action-bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Stack
        useFlexGap
        gap="1.88rem"
        textAlign="center"
        zIndex={5}
        maxWidth={{mobile:"100%", laptop:"50%"}}
        paddingTop="10rem"
        paddingBottom="7rem"
        px={{mobile:"2rem", laptop:"0px"}}
      >
        <Typography
          variant="text-sm"
          color="primary"
          fontWeight="700"
          lineHeight="1.5rem"
          letterSpacing="0.0125rem"
        >
          Designing Better Experience
        </Typography>
        <Typography
          variant="text-2xl"
          color="text.primary"
          fontWeight="700"
          lineHeight="3.125rem"
          letterSpacing="0.0125rem"
        >
          Problems trying to resolve the conflict between
        </Typography>
        <Typography
          variant="text-sm"
          color="text.secondary"
          fontWeight="400"
          lineHeight="1.25rem"
          letterSpacing="0.0125rem"
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </Typography>

        <Typography
          variant="text-2xl"
          color="secondary"
          fontWeight="700"
          lineHeight="2rem"
          letterSpacing="0.00625rem"
        >
          <Amount amount={16} />
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: "0.3125rem",
            paddingX: "2.5rem",
            paddingY: "0.94rem",
            fontSize: "0.875rem",
            fontWeight: "700",
            lineHeight: "1.375rem",
            letterSpacing: "0.0125rem",
            width:"fit-content",
            color:"light.main",
            alignSelf:'center'
          }}
        >
          ADD YOUR CALL TO ACTION
        </Button>
      </Stack>
    </Box>
  );
}
