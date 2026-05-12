import type { ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Overrides from "~/theme/components";

import palette from "./palette";
import shadows from "./shadows";
import typography from "./typography";

type GlobalThemeProviderProps = {
  children: ReactNode;
};
const GlobalThemeProvider = ({ children }: GlobalThemeProviderProps) => {
  const themeOptions: ThemeOptions = {
    palette,
    typography,
    shape: { borderRadius: 2 },
    shadows
  };

  const theme = createTheme(themeOptions);

  theme.components = Overrides(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export default GlobalThemeProvider;
