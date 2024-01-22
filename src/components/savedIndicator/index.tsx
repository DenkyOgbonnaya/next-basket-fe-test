import { LoveIcon } from "@/assets";
import { useStoreSelector } from "@/hooks/useStoreSelector";
import { RootState } from "@/store";
import { Portal } from "@mui/base";
import { Typography, Box, Button, Modal, IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { Amount } from "..";
import WishList from "../wishlist";

export default function SavedIndicator() {
  const [showList, setShowList] = useState(false);
  const { whichlist } = useStoreSelector((state: RootState) => state.whichlist);
  const sumTotal = whichlist.reduce(
    (curr, acc) => acc.price * acc.qty + curr,
    0
  );
  const itemsCount = whichlist.length;

  const toggleList = () => {
    setShowList(!showList);
  };

  const handleCloseList = (
    event: {},
    reason: "escapeKeyDown" | "backdropClick"
  ) => {
    if (reason === "backdropClick") {
    }
  };
  return (
    <>
      <Stack
        onClick={toggleList}
        direction="row"
        component={IconButton}
        alignItems="center"
        useFlexGap
        gap="0.31rem"
        color={itemsCount <= 0 ? "text.primary" : "primary.main"}
        sx={{
          border: "none",
          outine: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
          
        }}
      >
        <LoveIcon />

        <Typography
          variant="text-xs"
          letterSpacing="0.0125rem"
          lineHeight="1rem"
          color="primary"
          fontWeight="400"
        >
          {itemsCount}
        </Typography>
      </Stack>
      <Portal>
        <Modal
          open={showList}
          onClose={handleCloseList}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ maxWidth: "700px", overflow: "scroll" }}
        >
          <Box bgcolor="background.default" p={{mobile:"1rem", laptop:"2rem"}}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: "1.5rem",
              }}
            >
              <Typography
                variant="text-base"
                letterSpacing="0.0125rem"
                lineHeight="1rem"
                fontWeight="700"
                color="text.primary"
              >
                Wishlist ({itemsCount})
              </Typography>
              <Button onClick={toggleList}>X</Button>
            </Box>
            {itemsCount < 1 ? (
              <Typography
                variant="text-base"
                letterSpacing="0.0125rem"
                lineHeight="1rem"
                fontWeight="700"
                color="text.primary"
              >
                No Wishlisted items
              </Typography>
            ) : (
              <>
                <WishList />

                <Box mt="2rem">
                  <Typography
                    variant="text-base"
                    letterSpacing="0.0125rem"
                    lineHeight="1rem"
                    fontWeight="700"
                    color="text.primary"
                  >
                    Sum Total = <Amount amount={sumTotal} />
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Modal>
      </Portal>
    </>
  );
}
