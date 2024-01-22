import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Box, Container, Stack } from "@mui/system";
import { Typography } from "@mui/material";
import TabPanel from "@/components/tabPanel";
import Image from "next/image";
import { IProduct } from "@/types/product.type";

interface Props {
  product:IProduct
}
export default function ProjectInformation({product}:Props) {
  const [value, setValue] = useState("Description");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box bgcolor="background.default" display={{mobile:"none", laptop:"block"}}>
      <Container
        maxWidth={false}
        sx={{ maxWidth: { mobile: "100%", laptop: "80%" } }}
      >
        <Box
          display="flex"
          justifyContent={{ mobile: "flex-start", laptop: "center" }}
          borderBottom="1px solid #ECECEC"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor={undefined}
            aria-label="product information tab"
            sx={{
              display: "flex",
              minHeight: "4.5rem",
              alignItems: "center",
              "& .MuiTabs-indicator": { display: "none" },
            }}
          >
            <Tab
              sx={{
                fontSize: { mobile: "0.75rem", laptop: "0.875rem" },
                fontWeight: "600",
                lineHeight: "1.5rem",
                letterSpacing: "0.0125rem",
                color: "text.secondary",
                textTransform: "capitalize",
                minWidth: "0px",
                minHeight: "0px",
                padding: "0px",
                height: "fit-content",
                mr: { mobile: "0.5rem", laptop: "3rem" },
              }}
              label="Description"
              value="Description"
            />
            <Tab
              sx={{
                fontSize: { mobile: "0.75rem", laptop: "0.875rem" },
                fontWeight: "600",
                lineHeight: "1.5rem",
                letterSpacing: "0.0125rem",
                color: "text.secondary",
                textTransform: "capitalize",
                minWidth: "0px",
                minHeight: "0px",
                padding: "0px",
                height: "fit-content",
                mr: { mobile: "0.5rem", laptop: "3rem" },
              }}
              label="Additional Information"
              value="additionalInformation"
            />
            <Tab
              sx={{
                fontSize: "0.75rem",
                fontWeight: "400",
                lineHeight: "1rem",
                letterSpacing: "0.0125rem",
                color: "text.secondary",
                textTransform: "capitalize",
                minWidth: "0px",
                minHeight: "0px",
                padding: "0px",
                height: "fit-content",
              }}
              label={
                <Stack direction="row" gap="0.31rem">
                  <Typography
                    sx={{
                      fontSize: { mobile: "0.75rem", laptop: "0.875rem" },
                      fontWeight: "600",
                      lineHeight: "1.5rem",
                      letterSpacing: "0.0125rem",
                      color: "text.secondary",
                      textTransform: "capitalize",
                      minWidth: "0px",
                      minHeight: "0px",
                      padding: "0px",
                      height: "fit-content",
                    }}
                  >
                    Reviews
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { mobile: "0.75rem", laptop: "0.875rem" },
                    }}
                    fontWeight="700"
                    lineHeight="1.5rem"
                    letterSpacing="0.0125rem"
                    color="secondary"
                  >
                    (0)
                  </Typography>
                </Stack>
              }
              value="reviews"
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index="Description">
          <Box
            display="flex"
            flexDirection={{ mobile: "column", laptop: "row" }}
            gap="1.88rem"
            flexWrap="wrap"
          >
            <Stack gap="1.88rem" width={{ mobile: "100%", laptop: "60%" }}>
              <Typography
                variant="text-2xl"
                fontWeight="700"
                lineHeight="2rem"
                letterSpacing="0.00625rem"
                color="text.primary"
              >
                {product.title}
              </Typography>

              <Typography
                variant="text-sm"
                fontWeight="400"
                lineHeight="1.25rem"
                letterSpacing="0.00625rem"
                color="text.secondary"
                component="p"
              >
                {product.description}
              </Typography>

              <Typography
                variant="text-sm"
                fontWeight="400"
                lineHeight="1.25rem"
                letterSpacing="0.00625rem"
                color="text.secondary"
                component="p"
                borderLeft="2px solid #23856D"
                paddingLeft="1rem"
              >
                {product.description}
              </Typography>

              <Typography
                variant="text-sm"
                fontWeight="400"
                lineHeight="1.25rem"
                letterSpacing="0.00625rem"
                color="text.secondary"
                component="p"
              >
                {product.description}
              </Typography>
            </Stack>
            <Box
              position="relative"
              height="23.25rem"
              flex={1}
              width={{ mobile: "350px", laptop: "38%" }}
              sx={{objectFit:"cover"}}
            >
              <Image src={product.thumbnail} fill alt="thumbnail" style={{objectFit:'cover'}} />
            </Box>
          </Box>
        </TabPanel>
      </Container>
    </Box>
  );
}
