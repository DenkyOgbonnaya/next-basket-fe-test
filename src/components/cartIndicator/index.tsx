import { CartIcon } from "@/assets";
import Modal from "@mui/material/Modal";
import { IconButton, Typography, Button, Portal } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useStoreSelector } from "@/hooks/useStoreSelector";
import { RootState } from "@/store";
import { useState } from "react";
import Cart from "../cart";
import { Amount } from "..";

export default function CartIndicator() {
  const [showCart, setShowCart] = useState(false);
  const { cart } = useStoreSelector((state: RootState) => state.cart);
  const sumTotal = cart.reduce((curr, acc) => acc.price * acc.qty + curr, 0);
  const itemsCount = cart.length;

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleCloseCart = (
    event: {},
    reason: "escapeKeyDown" | "backdropClick"
  ) => {
    if (reason === "backdropClick") {
      
    }
   
  };

  return (
    <>
      <Stack
        onClick={toggleCart}
        direction="row"
        component={IconButton}
        alignItems="center"
        useFlexGap
        gap="0.31rem"
        sx={{
          border: "none",
          outine: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
        color={itemsCount <= 0 ? "text.primary" : "primary.main"}
      >
        <CartIcon />

        <Typography
          variant="text-xs"
          letterSpacing="0.0125rem"
          lineHeight="1rem"
          fontWeight="400"
        >
          {itemsCount}
        </Typography>
        <Portal>
          <Modal
            open={showCart}
            onClose={handleCloseCart}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ maxWidth: "700px" }}
          >
            <Box bgcolor="background.default" p="2rem">
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
                  Cart ({itemsCount})
                </Typography>
                <Button onClick={toggleCart}>X</Button>
              </Box>

              <Cart />

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
            </Box>
          </Modal>
        </Portal>
      </Stack>
    </>
  );
}
