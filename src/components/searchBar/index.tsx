import { Box, Stack } from "@mui/system";
import TextField from "@mui/material/TextField";

import { useState } from "react";
import { SearchIcon } from "@/assets";
import { Icon, Typography } from "@mui/material";

export default function SearchBar() {
  const [searching, setSearching] = useState(false);

  const toggleSearch = () => {
    setSearching(!searching);
  };
  return (
    <Stack direction="row" alignItems="center" padding="0px" margin="0px">
      <TextField
        id="standard-basic"
        placeholder="Search"
        hiddenLabel
        variant="standard"
        sx={{
          width: searching ? "150px" : "0px",
          opacity: searching ? 1 : 0,
          transition: "all",
          transitionDuration: "0.5s",
          transitionTimingFunction: "ease-in-out",
          fontSize: "text-sm",
        }}
      />
      <Icon
        component="button"
        sx={{
          unset: "all",
          border: "none",
          backgroundColor: "transparent",
          outline: "none",
          cursor: "pointer",
          padding:'0px',
          position: "relative",
          color: { mobile: "text.primary", tablet: "primary.main" },
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={toggleSearch}
      >
        <Typography
          variant="text-lg"
          sx={{
            position: "absolute",
            top: "0px",
            right: "0px",
            opacity: searching ? 1 : 0,
          }}
        >
          X
        </Typography>
        <Box
          position="absolute"
          top="0px"
          right="0px"
          sx={{ opacity: searching ? 0 : 1 }}
        >
          <SearchIcon />
        </Box>
      </Icon>
    </Stack>
  );
}
