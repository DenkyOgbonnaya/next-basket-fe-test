import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Icon, Stack } from "@mui/material";

interface Props {
  icon: any;
  title: string;
  message: string;
}
export default function InfoCard({ icon: CardIcon, title, message }: Props) {
  return (
    <Card
      sx={{
        width: { mobile: "100%", laptop: "100%" },
        height: "100%",
        boxShadow: "none",
        backgroundColor: "#ffffff",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
          paddingx: "2.5rem",
          paddingBottomY: "2.19rem",
          textAlign: "center",
        }}
      >
        <CardIcon />
        <Typography
          variant="text-2xl"
          fontWeight="700"
          lineHeight="2rem"
          letterSpacing="0.00625rem"
          color="text.primary"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          variant="text-sm"
          fontWeight="400"
          lineHeight="1.25rem"
          letterSpacing="0.0125rem"
          color="text.secondary"
        >
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
}
