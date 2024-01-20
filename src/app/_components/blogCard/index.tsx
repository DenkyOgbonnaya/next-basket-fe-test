import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { IBlog } from "@/types/blog.type";

interface Props {
  blog: IBlog;
}
export default function BlogCard({ blog }: Props) {
  const imageURL = blog.coverPhoto;
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        padding: {moble:"1rem", laptop:"1.5rem"},
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${imageURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "opacity 0.3s ease-in-out", // Smooth transition for hover effect
          "&:hover": {
            opacity: 0.5,
          },
        }}
      />
      <CardContent
        sx={{
          position: "relative",
          zIndex: 2,
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: "0.31rem",
        }}
      >
        <Typography
          variant="text-sm"
          color="secondary"
          fontWeight="700"
          lineHeight="1.5rem"
          letterSpacing="0.0125rem"
        >
          {blog.numberOfItems} Items
        </Typography>
        <Typography
          variant="text-2xl"
          color="text.primary"
          fontWeight="700"
          lineHeight="3.125rem"
          letterSpacing="0.0125rem"
        >
          {blog.title}
        </Typography>
        <Button
          variant="text"
          sx={{
            padding: "0px",
            justifyContent: "flex-start",
            fontWeight: "700",
            fontSize: "text-sm",
            lineHeight: "1.5rem",
            letterSpacing: "0.0125rem",
            color: "text.primary",
            textTransform: "capitalize",
            width: "fit-content",
          }}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
}
