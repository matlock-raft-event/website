import type { Theme } from "@mui/material/styles";

const Typography = (theme: Theme) => ({
  MuiTypography: {
    styleOverrides: {
      body1: {
        // marginBottom: "1.125rem !important"
      },
      body2: {
        // marginBottom: "1.125rem !important"
      }
    }
  }
});

export default Typography;
