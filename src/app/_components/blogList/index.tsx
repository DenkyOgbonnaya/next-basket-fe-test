import Grid from "@mui/material/Grid";
import { IBlog } from "@/types/blog.type";
import BlogCard from "../blogCard";
import { Box } from "@mui/system";

interface Props {
  blogs: IBlog[];
}
export default function BlogList({ blogs }: Props) {
    
  return (
    <Box display="grid" gridTemplateRows="2" height="35rem" gridTemplateColumns="repeat(12, 1fr)" gap="0.94rem">
      <Box gridColumn={{mobile:"span 12", tablet:"span 4"}}  gridRow="span 2">
        <BlogCard blog={blogs[0]} />
      </Box>
      <Box gridColumn={{mobile:"span 12", tablet:"span 8"}} display="grid"   gridRow="span 2" gap="0.94rem"  >
        <Box display="grid" gridAutoRows="1fr"  gridTemplateColumns="repeat(12, 1fr)" gap="0.94rem">
          <Box gridColumn="span 12"  >
            <BlogCard blog={blogs[1]} />
          </Box>
          <Box gridColumn={{mobile:"span 12", tablet:"span 6"}}   >
            <BlogCard blog={blogs[2]} />
          </Box>
          <Box gridColumn={{mobile:"span 12", tablet:"span 6"}}>
            <BlogCard blog={blogs[3]} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
