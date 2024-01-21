"use client";
import { createTheme } from "@mui/material/styles";
import { montserrat } from "./styles.font";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#23A6F0",
      contrastText: "#23A6F0",
    },
    secondary: {
      main: "#23856D",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#2DC071",
    },
    error: {
      main: "#E77C40",
    },
    text: {
      primary: "#252B42",
      secondary: "#737373",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    muted: {
      main: "#BDBDBD",
    },
    light: {
      main: "#FFF",
    },
  },

  /* Type scale for typography fontsize is 1.125(Major seconds) approximated  */

  typography: {
    fontFamily: montserrat.style.fontFamily,
    fontSize: 16,
    "text-xs": {
      fontSize: "0.75rem", //12px
    },
    "text-sm": {
      fontSize: "0.875rem", //14px
    },
    "text-base": {
      fontSize: "1rem", //16px
    },
    "text-lg": {
      fontSize: "1.125rem", //18px
    },
    "text-xl": {
      fontSize: "1.25rem", //20.25px
    },
    "text-2xl": {
      fontSize: "1.5rem", //22.78px
    },
    "text-3xl": {
      fontSize: "1.602rem", // 25.63p
    },
    "text-4xl": {
      fontSize: "1.802rem", //28.83px
    },
    "text-5xl": {
      fontSize: "2rem", //32.44px
    },
    "text-6xl": {
      fontSize: "2.281rem", //36.49px
    },
    "text-7xl": {
      fontSize: "2.57rem", //41.05px
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
      xl: 1536,
    },
  },
});

export default theme;
