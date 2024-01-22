"use client";
import Footer from "@/app/_components/footer";
import { Container, Stack } from "@mui/system";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useGetProductQuery } from "@/services/product.service";
import Link from "@mui/material/Link";
import HeaderBar from "../_components/headerBar";
import NavBar from "../_components/navBar";
import { RightChevron } from "@/assets";
import ProductDescription from "../_components/productDescription";
import ProjectInformation from "../_components/projectInformation";
import Partners from "../_components/partners";
import BestSellerProducts from "../_components/bestSellerProducts";
import { useParams } from "next/navigation";
import Loading from "./loading";

export default function ProductDetails() {
  const productId = useParams().productId as string;
  const { data, isLoading } = useGetProductQuery(productId);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.default",
        minHeight: "100dvh",
        padding: "0px",
      }}
    >
      <Stack useFlexGap gap="0.75rem">
        <HeaderBar />
        <NavBar />
      </Stack>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: { mobile: "100%", laptop: "80%" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<RightChevron color="#BDBDBD" />}
          sx={{
            py: "1.5rem",
            alignSelf: { mobile: "center", laptop: "flex-start" },
          }}
        >
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            fontSize="text-sm"
            fontWeight="700"
            lineHeight="1.5rem"
            letterSpacing="0.0125rem"
          >
            Home
          </Link>

          <Link
            underline="hover"
            color="muted.main"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
            fontSize="text-sm"
            fontWeight="700"
            lineHeight="1.5rem"
            letterSpacing="0.0125rem"
          >
            Shop
          </Link>
        </Breadcrumbs>
      </Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ProductDescription product={data! || {}} />
          <ProjectInformation product={data! || {}} />
          <BestSellerProducts />
          <Partners />
          <Footer />
        </>
      )}
    </Container>
  );
}
