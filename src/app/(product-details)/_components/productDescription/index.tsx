import {
  BackCevron,
  CartIcon,
  EyeIcon,
  LoveIcon,
  NextChevron,
  StarredIcon,
  UnStarredIcon,
} from "@/assets";
import { Amount } from "@/components";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Button, IconButton, Typography } from "@mui/material";
import { Box, Stack, Container } from "@mui/system";
import Image from "next/image";
import { useRef, useState } from "react";
import { IProduct } from "@/types/product.type";

interface Props {
  product:IProduct
}
export default function ProductDescription({product}:Props) {
  const [selectedColor, setSelectedColor] = useState("");
  const [active, setActive] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const scrollAmount = 500;

  
  const colorVariations = [
    {
      name: "Blue",
      color: "#23A6F0",
    },
    {
      name: "Green",
      color: "#2DC071",
    },
    {
      name: "Orange",
      color: "#E77C40",
    },
    {
      name: "Dark Blue",
      color: "#252B42",
    },
  ];

  const handleColorSelection = (
    event: React.MouseEvent<HTMLElement>,
    color: string
  ) => {
    setSelectedColor(color);
  };

  const handleNext = () => {
    const container = sliderRef.current;
    if (container) container.scrollLeft += scrollAmount;

    if (active < product.images.length) -1;
    setActive((a) => a + 1);
  };
  const handlePrev = () => {
    const container = sliderRef.current;
    if (container) container.scrollLeft -= scrollAmount;

    if (active > 0) setActive((a) => a - 1);
  };

  return (
    <Box
      component="article"
      bgcolor="background.paper"
      paddingBottom="3rem"
      paddingTop="2.12rem"
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: { mobile: "100%", laptop: "80%" },
          display: "flex",
          flexDirection: { mobile: "column", laptop: "row" },
          gap: "1.88rem",
        }}
      >
        <Box
          display="flex"
          width={{ mobile: "100%", laptop: "50%" }}
          flexDirection="column"
          gap="1.31rem"
          position="relative"
        >
          <Box
            ref={sliderRef}
            display="flex"
            width="100%"
            sx={{
              scrollBehavior: "smooth",
              transition: "all",
              transitionDuration: "1s",
              transitionTimingFunction: "ease-in-out",
              overflow: "scroll",
              scrollbarWidth: "0px",
              "&::-webkit-scrollbar": {
                width: 0,
              },
            }}
            gap="0.5rem"
          >
            {product.images.map((img, index) => (
              <Box
                key={index}
                position="relative"
                height={{ mobile: "15rem", laptop: "28.125rem" }}
                minWidth={{ mobile: "350px", laptop: "100%" }}
                sx={{objectFit:"cover"}}
              >
                <Image src={img} fill alt="" style={{ objectFit: "cover" }} />
              </Box>
            ))}
          </Box>
          <IconButton
            sx={{ position: "absolute", bottom: 250, left: 20, zIndex: 10 }}
            onClick={handlePrev}
          >
            <BackCevron />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{ position: "absolute", bottom: 250, right: 20, zIndex: 10 }}
          >
            <NextChevron />
          </IconButton>

          <Box display="flex" gap="1.19rem" flexWrap="wrap">
            {product.images.map((img, index) => (
              <Box
                key={index}
                position="relative"
                width={{ mobile: "4.25rem", laptop: "6.25rem" }}
                height={{ mobile: "3.4rem", laptop: "4.6875rem" }}
                border={active === index ? "3px solid #23A6F0" : "none"}
                overflow="hidden"
                sx={{
                  transition: "all",
                  transitionDuration: "0.5s",
                  transitionTimingFunction: "ease-in-out",
                  objectFit:"cover"
                }}
              >
                <Image src={img} fill alt="" style={{ objectFit: "cover" }} />
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          display="flex"
          flex={1}
          flexDirection="column"
          gap="0.75rem"
          paddingX="1.5rem"
          paddingY="0.6rem"
          height={{mobile:"fit-content", laptop:"28.125rem"}}
        >
          <Typography
            variant="text-xl"
            fontWeight="400"
            lineHeight="1.875rem"
            letterSpacing="0.0125rem"
            color="text.primary"
          >
            {product.title}
          </Typography>
          <Stack direction="row" alignItems="center" useFlexGap gap="0.62rem">
            <Stack direction="row" alignItems="center">
              {[1, 2, 3, 4, 5].map((item) => (
                <Box component="span" key={item}>
                  {item <= product.rating ? <StarredIcon /> : <UnStarredIcon />}
                </Box>
              ))}
            </Stack>
            <Typography
              variant="text-sm"
              fontWeight="700"
              lineHeight="1.5rem"
              letterSpacing="0.0125rem"
              color="text.secondary"
            >
              {product.rating} Reviews
            </Typography>
          </Stack>
          <Typography
            variant="text-2xl"
            fontWeight="700"
            lineHeight="2rem"
            letterSpacing="0.00625rem"
            color="text.primary"
          >
            <Amount amount={product.price} />
          </Typography>

          <Stack direction="row" alignItems="center" gap="0.31rem">
            <Typography
              variant="text-sm"
              fontWeight="700"
              lineHeight="1.5rem"
              letterSpacing="0.0125rem"
              color="text.secondary"
            >
              Availability :
            </Typography>

            <Typography
              variant="text-sm"
              fontWeight="700"
              lineHeight="1.5rem"
              letterSpacing="0.0125rem"
              color="primary"
            >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </Typography>
          </Stack>
          <Typography
            variant="text-sm"
            fontWeight="400"
            lineHeight="1.25rem"
            letterSpacing="0.00625rem"
            color="text.secondary"
            component="p"
            display={{mobile:"block", laptop:"none"}}
          >
            {product.description}
          </Typography>

          <Box
            borderTop="1px solid #BDBDBD"
            justifySelf="flex-end"
            mt="6.44rem"
          >
            <ToggleButtonGroup
              color="primary"
              value={selectedColor}
              exclusive
              onChange={handleColorSelection}
              aria-label="Platform"
              sx={{ gap: "0.32rem", mt: "1.81rem", borderRadius: "none" }}
            >
              {colorVariations.map((color) => (
                <ToggleButton
                  key={color.name}
                  value={color.name}
                  sx={{
                    backgroundColor: color.color,
                    width: "1.875rem",
                    height: "1.875rem",
                    "&.MuiToggleButtonGroup-grouped": {
                      borderRadius: "100% !important",
                      mx: 1,
                      border: "1px solid lightgrey !important",
                    },
                  }}
                />
              ))}
            </ToggleButtonGroup>
            <Stack direction="row" useFlexGap gap="0.62rem" mt="4.19rem">
              <Button
                variant="contained"
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: "700",
                  letterSpacing: "0.0125rem",
                  lineHeight: "1.5rem",
                  color: "light.main",
                  textTransform: "capitalize",
                  boxShadow: "none",
                }}
              >
                Select Options
              </Button>
              <IconButton
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  boder: "1px solid #E8E8E8",
                  boxShadow: "0px 0px 1px 1px #E8E8E8",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#BDBDBD",
                  backgroundColor: "background.default",
                }}
              >
                <LoveIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  boder: "1px solid #E8E8E8",
                  boxShadow: "0px 0px 1px 1px #E8E8E8",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#BDBDBD",
                  backgroundColor: "background.default",
                }}
              >
                <CartIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  boder: "1px solid #E8E8E8",
                  boxShadow: "0px 0px 1px 1px #E8E8E8",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#BDBDBD",
                  backgroundColor: "background.default",
                }}
              >
                <EyeIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
