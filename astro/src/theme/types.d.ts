import { PaletteColor } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BaseTheme {
    palette: Palette;
    typography: ITypography;
    shadows: IShadows;
  }

  interface ThemeOptions {
    palette: Palette;
    typography: ITypography;
    shadows: IShadows;
  }

  interface Palette {
    common: {
      black: string
      white: string
    }
    primary: PaletteColor
    secondary: PaletteColor
    red: PaletteColor
    green: PaletteColor
    yellow: PaletteColor
    dark: PaletteColor
    success: PaletteColor
    info: PaletteColor
    error: PaletteColor
    warning: PaletteColor
  }

  interface PaletteOptions {
    common: {
      black: string
      white: string
    }
    primary: PaletteColor
    secondary: PaletteColor
    red: PaletteColor
    green: PaletteColor
    yellow: PaletteColor
    dark: PaletteColor
    success: PaletteColor
    info: PaletteColor
    error: PaletteColor
    warning: PaletteColor
  }
}

declare module "@mui/material/ToggleButton" {
  interface ToggleButtonPropsColorOverrides {
    red: true;
    green: true;
    yellow: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    red: true;
    green: true;
    yellow: true;
  }
}

declare module "@mui/material/Link" {
  interface LinkPropsColorOverrides {
    red: true;
    green: true;
    yellow: true;
  }
}

export type IResponsiveValues = { sm: number; md: number; lg: number };

export type ITypographyRules = {
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: number;
  fontSize?: string;
  responsiveFontSizes?: IResponsiveValues;
  textTransform?: string
};

export type ITypography = {
  fontFamily: string;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  h1: ITypographyRules;
  h2: ITypographyRules;
  h3: ITypographyRules;
  h4: ITypographyRules;
  h5: ITypographyRules;
  h6: ITypographyRules;
  p: ITypographyRules;
  button: ITypographyRules;
};

export type IShadow = string;
export type IShadows = IShadow[];

export type IBreakpoints = Record<string, string>;
