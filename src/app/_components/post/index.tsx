import * as React from "react";
import Card from "@mui/material/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import {
  ChevronDownIcon,
  ChevronRight,
  ClockIcon,
  EmailIcon,
  ImageIcon,
} from "@/assets";
import Button from "@mui/material/Button";

interface Props {
    coverImage: string
}
export default function Post({coverImage}:Props) {
    const [value, setValue] = React.useState('Google');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  

  return (
    <Card
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "background.default",
        boxShadow: "0px 1px 2px 0px #C4C4C4",
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: "18.75rem" }}
        image={coverImage}
        alt="Paella dish"
      />
      <Box
        sx={{
          position: "absolute",
          top: "1.25rem",
          left: "1.25rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0.1875rem",
          backgroundColor: "error.main",
          height: "1.5rem",
          px: "0.625rem",
        }}
      >
        <Typography
          fontSize="text-sm"
          fontWeight="700"
          lineHeight="15rem"
          letterSpacing=" 0.0125rem"
          color="light.main"
        >
          New
        </Typography>
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          padding: "1.56rem",
          paddingBottom: "2.19rem",
          gap: "0.62rem",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor={undefined}
          aria-label="basic tabs example"
          sx={{
            padding: "0px",
            display: "flex",
            gap: "1rem",
            justifyContent: "flex-start",
            minHeight: "0px",
            height: "fit-content",
            '& .MuiTabs-indicator': { display: 'none' }
          }}
        >
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
              mr: "0.94rem",
            }}
            label="Google"
            value="Google"
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
              mr: "0.94rem",
            }}
            label="Trending"
            value="Trending"
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
            label="New"
            value="New"
          />
        </Tabs>

        <Typography
          variant="text-xl"
          fontWeight="400"
          lineHeight="1.875rem"
          letterSpacing=" 0.0125rem"
          color="text.primary"
        >
          Loudest à la Madison #1 (L&apos;integral)
        </Typography>
        <Typography
          variant="text-sm"
          fontWeight="400"
          lineHeight="1.25rem"
          letterSpacing="0.0125rem"
          color="text.secondary"
          sx={{ fontSize: "text-xs" }}
        >
          We focus on ergonomics and meeting you where you work. It&apos;s only a
          keystroke away.
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          mt="calc(1.56rem - 0.62rem)"
        >
          <Stack direction="row" useFlexGap gap="0.31rem">
            <ClockIcon />
            <Typography
              variant="text-xs"
              fontWeight="400"
              lineHeight="1rem"
              letterSpacing="0.0125rem"
              color="text.secondary"
            >
              22 April 2021
            </Typography>
          </Stack>
          <Stack direction="row" useFlexGap gap="0.31rem">
            <ImageIcon />
            <Typography
              variant="text-xs"
              fontWeight="400"
              lineHeight="1rem"
              letterSpacing="0.0125rem"
              color="text.secondary"
            >
              10 comments
            </Typography>
          </Stack>
        </Box>
        <Button
          variant="text"
          sx={{
            mt: "calc(1.56rem - 0.62rem)",
            fontSize: "0.875rem",
            fontWeight: "700",
            lineHeight: "1.5rem",
            letterSpacing: "0.0125rem",
            textTransform: "capitalize",
            justifyContent: "flex-start",
            color: "text.secondary",
            backgroundColor: "none",
          }}
          endIcon={<ChevronRight />}
        >
          Learn More
        </Button>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}
