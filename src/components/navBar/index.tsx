import Button from "@mui/material/Button";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { MouseEvent, useState } from "react";
import { ChevronDownIcon, MenuIcon, UserIcon } from "@/assets";
import SearchBar from "../searchBar";
import CartIndicator from "../cartIndicator";
import SavedIndicator from "../savedIndicator";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState<EventTarget | Element | null>(null);
  const open = Boolean(anchorEl);

  const pathName = usePathname();

  const activeLink = (url: string, pathname: string) => {
    return pathname === url;
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  const mobileMenus = [
    {
      title: "Home",
      route: "/home",
    },
    {
      title: "Prodcut",
      route: "/product",
    },
    {
      title: "Pricing",
      route: "/pricing",
    },
    {
      title: "Contact",
      route: "/contact",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }} position="relative">
      <AppBar
        position="static"
        sx={{
          bgcolor: "background.default",
          boxShadow: "none",
          height: "3.625rem",
          px:{mobile: "2.19rem", laptop:"2.38rem"}
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px:"0px" }}>
          <Stack
            useFlexGap
            direction="row"
            gap="calc(4.94rem + 2.5rem)"
            alignItems="center"
            px="0px"
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
            <Stack
              direction="row"
              useFlexGap
              component="nav"
              gap="0.94rem"
              display={{ mobile: "none", laptop: "flex" }}
            >
              <Link
                href=""
                variant="text-sm"
                letterSpacing="0.0125rem"
                lineHeight="1.5rem"
                color="text.secondary"
                fontWeight="700"
                sx={{ textDecoration: "none" }}
              >
                Home
              </Link>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                variant="text"
                sx={{ padding: "0px" }}
                endIcon={<ChevronDownIcon />}
              >
                <Typography
                  variant="text-sm"
                  letterSpacing="0.0125rem"
                  lineHeight="1.75rem"
                  color="text.primary"
                  fontWeight="500"
                  sx={{ textDecoration: "none", textTransform: "capitalize" }}
                >
                  Shop
                </Typography>
              </Button>
              

              <Link
                href=""
                variant="text-sm"
                letterSpacing="0.0125rem"
                lineHeight="1.5rem"
                color="text.secondary"
                fontWeight="700"
                sx={{ textDecoration: "none" }}
              >
                About
              </Link>
              <Link
                href=""
                variant="text-sm"
                letterSpacing="0.0125rem"
                lineHeight="1.5rem"
                color="text.secondary"
                fontWeight="700"
                sx={{ textDecoration: "none" }}
              >
                Blog
              </Link>
              <Link
                href=""
                variant="text-sm"
                letterSpacing="0.0125rem"
                lineHeight="1.5rem"
                color="text.secondary"
                fontWeight="700"
                sx={{ textDecoration: "none" }}
              >
                Contact
              </Link>
              <Link
                href=""
                variant="text-sm"
                letterSpacing="0.0125rem"
                lineHeight="1.5rem"
                color="text.secondary"
                fontWeight="700"
                sx={{ textDecoration: "none" }}
              >
                Pages
              </Link>
            </Stack>
          </Stack>

          <Stack
            component="nav"
            direction="row"
            useFlexGap
            gap="1.88rem"
            alignItems="center"
          >
            <Stack
              direction="row"
              useFlexGap
              gap="0.31rem"
              alignItems="center"
              display={{ mobile: "none", tablet: "flex" }}
            >
              <UserIcon />
              <Link
                href=""
                variant="text-sm"
                letterSpacing="0.0125rem"
                lineHeight="1.5rem"
                color="primary"
                fontWeight="700"
                sx={{ textDecoration: "none" }}
              >
                Login / Register
              </Link>
            </Stack>

            <SearchBar />
            <CartIndicator />
            <Box display={{ mobile: "none", laptop: "block" }}>
              <SavedIndicator />
            </Box>
            <Box
              component="button"
              onClick={toggleMenu}
              display={{ mobile: "block", laptop: "none" }}
              sx={{
                unset: "all",
                border: "none",
                backgroundColor: "transparent",
                outline: "none",
                padding: "0px",
              }}
            >
              <MenuIcon />
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* 

          MOBILE MENU

          */}
      <Stack
         useFlexGap
         direction="column"
         component="nav"
         gap="1.88rem"
         display={{ mobile: "flex", laptop: "none" }}
         alignItems="center"
         position="absolute"
         bgcolor="background.default"
         top={menuExpanded ? 50 : -600}
         margin="0 auto"
         right="0"
         left="0"
         zIndex={50}
         paddingTop="3rem"
         paddingBottom="2rem"
         sx={{
           transition: "all",
           transitionDuration: "1s",
           transitionTimingFunction: "ease-in-out",
         }}
      >
        {mobileMenus.map((menu) => (
          <Link
            key={menu.title}
            href={menu.route}
            variant="text-xl"
            letterSpacing="0.0125rem"
            lineHeight="2.8125rem"
            color="text.secondary"
            fontWeight={activeLink(pathName, menu.route) ? "400" : "600"}
            sx={{ textDecoration: "none" }}
          >
            {menu.title}
          </Link>
        ))}
      </Stack>
    </Box>
  );
}
