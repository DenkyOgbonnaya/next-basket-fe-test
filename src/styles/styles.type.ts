declare module "@mui/material/styles" {
  interface TypographyVariants {
    "text-xs": React.CSSProperties;
    "text-sm": React.CSSProperties;
    "text-base": React.CSSProperties;
    "text-lg": React.CSSProperties;
    "text-xl": React.CSSProperties;
    "text-2xl": React.CSSProperties;
    "text-3xl": React.CSSProperties;
    "text-4xl": React.CSSProperties;
    "text-5xl": React.CSSProperties;
    "text-6xl": React.CSSProperties;
    "text-7xl": React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    "text-xs"?: React.CSSProperties;
    "text-sm": React.CSSProperties;
    "text-base": React.CSSProperties;
    "text-lg": React.CSSProperties;
    "text-xl": React.CSSProperties;
    "text-2xl": React.CSSProperties;
    "text-3xl": React.CSSProperties;
    "text-4xl": React.CSSProperties;
    "text-5xl": React.CSSProperties;
    "text-6xl": React.CSSProperties;
    "text-7xl": React.CSSProperties;
  }

  
  /*=============================================
  =            Breakpoints           =
  =============================================*/
  
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: true;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
  
  /*=====  End of Breakpoints  ======*/
  
  
  /*=============================================
  =            Color pallets            =
  =============================================*/
  
  interface Palette {
    muted: Palette['primary'];
    background: Palette["background"]
  }

  interface PaletteOptions {
    muted?: PaletteOptions['primary'];
    background?: PaletteOptions["background"]
  }
  
  /*=====  End of Color pallets  ======*/
  
  
 
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "text-xs": true;
    "text-sm": true;
    "text-base": true;
    "text-lg": true;
    "text-xl": true;
    "text-2xl": true;
    "text-3xl": true;
    "text-4xl": true;
    "text-5xl": true;
    "text-6xl": true;
    "text-7xl": true;
  }



}

export {};
