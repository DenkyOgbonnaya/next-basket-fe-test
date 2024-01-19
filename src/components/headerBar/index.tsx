import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets";
import { Typography, Link } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";

export default function HeaderBar() {
  return (
    <Box
      component="header"
      bgcolor="secondary.main"
      height="3.625rem"
      display={{ mobile: "none", laptop: "flex" }}
      alignItems="center"
    >
      <Container maxWidth="desktop" >
        <Box display="flex" justifyContent="space-between">
          <Stack direction="row" gap="0.62rem">
            <Stack
              direction="row"
              useFlexGap
              gap="0.31rem"
              alignItems="center"
              paddingX="0.62rem"
            >
              <PhoneIcon />
              <Link
                href=""
                variant="text-xs"
                letterSpacing="0.0125rem"
                lineHeight="1rem"
                color="light.main"
                fontWeight="400"
                sx={{ textDecoration: "none" }}
              >
                (225) 555-0118
              </Link>
            </Stack>

            <Stack direction="row" useFlexGap gap="0.31rem" alignItems="center">
              <EmailIcon />
              <Link
                variant="text-xs"
                letterSpacing="0.0125rem"
                lineHeight="1rem"
                color="light.main"
                fontWeight="400"
                href="#"
                sx={{ textDecoration: "none" }}
              >
                michelle.rivera@example.com
              </Link>
            </Stack>
          </Stack>
          <Typography
            variant="text-sm"
            component="span"
            letterSpacing="0.0125rem"
            lineHeight="1.5rem"
            color="light.main"
            fontWeight="700"
          >
            Follow Us and get a chance to win 80% off
          </Typography>

          <Stack direction="row" useFlexGap gap="1rem" alignItems="center">
            <Typography
              variant="text-sm"
              letterSpacing="0.0125rem"
              lineHeight="1.5rem"
              color="light.main"
              fontWeight="700"
              component="span"
            >
              Follow us :
            </Typography>
            <Link href="#">
              <InstagramIcon />
            </Link>
            <Link href="#">
              <YoutubeIcon />
            </Link>
            <Link href="#">
              <FacebookIcon />
            </Link>
            <Link href="#">
              <TwitterIcon />
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
