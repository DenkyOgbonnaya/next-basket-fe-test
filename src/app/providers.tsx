"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Provider as StoreProvider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/styles/styles.theme";
import { store } from "@/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
      </StoreProvider>
     
    </AppRouterCacheProvider>
  );
}
