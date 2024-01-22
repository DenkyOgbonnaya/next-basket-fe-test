import { FbBrandIcon, IgBrandIcon, XBrandIcon } from "@/assets";
import { Typography, Link as MuLink, TextField, Button } from "@mui/material";
import { Box, Container, height, Stack, textTransform } from "@mui/system";
import Link from "next/link";

export default function Footer() {
  const companyInfoLinks = [
    { title: "About Us", link: "#" },
    { title: "Career", link: "#" },
    { title: "We are hiring", link: "#" },
    { title: "Blog", link: "#" },
  ];

  const featuresLinks = [
    { title: "Business Marketing", link: "#" },
    { title: "User Analytic", link: "#" },
    { title: "Live Chat", link: "#" },
    { title: "Unlimited Support", link: "#" },
  ];

  const resourceLinks = [
    { title: "IOS & Android", link: "#" },
    { title: "Watch a Demo", link: "#" },
    { title: "Customers", link: "#" },
    { title: "API", link: "#" },
  ];

  return (
    <Box component="footer" display="flex" flexDirection="column">
      <Box
        height="8.625rem"
        bgcolor="background.paper"
        boxShadow="0px 0px 1px 0px #E6E6E6"
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: { mobile: "100%", laptop: "75%" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            borderBottom: "1px solid #E6E6E6",
          }}
        >
          <Typography
            variant="text-2xl"
            component="span"
            letterSpacing="0.00625rem"
            lineHeight="2rem"
            color="text.primary"
            fontWeight="700"
            noWrap
          >
            Bandage
          </Typography>
          <Stack direction="row" useFlexGap gap="1rem" alignItems="center">
            <Link href="#">
              <FbBrandIcon />
            </Link>
            <Link href="#">
              <IgBrandIcon />
            </Link>

            <Link href="#">
              <XBrandIcon />
            </Link>
          </Stack>
        </Container>
      </Box>
      <Box bgcolor="background.default" paddingY="3.12rem">
        <Container
          maxWidth={false}
          sx={{
            maxWidth: { mobile: "100%", laptop: "75%" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            height: "100%",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <Stack useFlexGap gap="0.62rem">
            <Typography
              variant="text-base"
              component="span"
              letterSpacing="0.00625rem"
              lineHeight="1.5rem"
              color="text.primary"
              fontWeight="700"
              noWrap
              marginBottom="calc(1.25rem - 0.62rem)"
            >
              Company Info
            </Typography>
            {companyInfoLinks.map((link) => (
              <MuLink
                variant="text-sm"
                // href={link.link}
                component="span"
                letterSpacing="0.00625rem"
                lineHeight="1.5rem"
                color="text.secondary"
                fontWeight="700"
                noWrap
                sx={{ textDecoration: "none" }}
              >
                {link.title}
              </MuLink>
            ))}
          </Stack>
          {/* LEGAL LINKKS */}
          <Stack useFlexGap gap="0.62rem">
            <Typography
              variant="text-base"
              component="span"
              letterSpacing="0.00625rem"
              lineHeight="1.5rem"
              color="text.primary"
              fontWeight="700"
              noWrap
              marginBottom="calc(1.25rem - 0.62rem)"
            >
              Legal Info
            </Typography>

            {companyInfoLinks.map((link) => (
              <MuLink
                variant="text-sm"
                // href={link.link}
                component="span"
                letterSpacing="0.00625rem"
                lineHeight="1.5rem"
                color="text.secondary"
                fontWeight="700"
                noWrap
                sx={{ textDecoration: "none" }}
              >
                {link.title}
              </MuLink>
            ))}
          </Stack>

          {/* Feature LINKKS */}
          <Stack useFlexGap gap="0.62rem">
            <Typography
              variant="text-base"
              component="span"
              letterSpacing="0.00625rem"
              lineHeight="1.5rem"
              color="text.primary"
              fontWeight="700"
              noWrap
              marginBottom="calc(1.25rem - 0.62rem)"
            >
              Features
            </Typography>

            {featuresLinks.map((link) => (
              <MuLink
                variant="text-sm"
                // href={link.link}
                component="span"
                letterSpacing="0.00625rem"
                lineHeight="1.5rem"
                color="text.secondary"
                fontWeight="700"
                noWrap
                sx={{ textDecoration: "none" }}
              >
                {link.title}
              </MuLink>
            ))}
          </Stack>
          {/* RESOURCED LINKKS */}
          <Stack useFlexGap gap="0.62rem">
            <Typography
              variant="text-base"
              component="span"
              letterSpacing="0.00625rem"
              lineHeight="1.5rem"
              color="text.primary"
              fontWeight="700"
              noWrap
              marginBottom="calc(1.25rem - 0.62rem)"
            >
              Resources
            </Typography>

            {resourceLinks.map((link) => (
              <MuLink
                variant="text-sm"
                // href={link.link}
                component="span"
                letterSpacing="0.00625rem"
                lineHeight="1.5rem"
                color="text.secondary"
                fontWeight="700"
                noWrap
                sx={{ textDecoration: "none" }}
              >
                {link.title}
              </MuLink>
            ))}
          </Stack>

          {/* CONTACT FORM */}
          <Stack
            useFlexGap
            gap="0.62rem"
            maxWidth={{ mobile: "fit-content", laptop: "32%" }}
          >
            <Typography
              variant="text-base"
              component="span"
              letterSpacing="0.00625rem"
              lineHeight="1.5rem"
              color="text.primary"
              fontWeight="700"
              noWrap
              marginBottom="calc(1.25rem - 0.62rem)"
            >
              Get In Touch
            </Typography>

            <Box component="form" display="flex">
              <TextField
                placeholder="Your Email"
                sx={{
                  borderRadius: "0.3125rem",
                  border: "0px solid #E6E6E6",
                  bgcolor: "background.paper",
                  borderRight: "none",
                  borderBottomRightRadius: "0px",
                  borderTopRightRadius: "0px",
                  outline: "none",
                  "& input::placeholder": {
                    fontSize: "0.875rem",
                    fontWeight: "400",
                    color: "GrayText.secondary",
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  color: "light.main",
                  fontSize: "0.875rem",
                  fontWeight: "400",
                  lineHeight: "1.75rem",
                  letterSpacing: "0.0125rem",
                  textTransform: "capitalize",
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                }}
              >
                Subscribe
              </Button>
            </Box>
            <Typography
              variant="text-xs"
              component="span"
              letterSpacing="0.00625rem"
              lineHeight="1.75rem"
              color="text.secondary"
              fontWeight="400"
              noWrap
            >
              Lore imp sum dolor Amit
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Box
        height="4.625rem"
        bgcolor="background.paper"
        boxShadow="0px 0px 1px 0px #E6E6E6"
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: { mobile: "100%", laptop: "75%" },
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography
            variant="text-sm"
            component="span"
            letterSpacing="0.0125rem"
            lineHeight="1.5rem"
            color="text.secondary"
            fontWeight="700"
            textAlign={{mobile:"center", laptop:"left"}}
          >
            Made With Love By Finland All Right Reserved
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
