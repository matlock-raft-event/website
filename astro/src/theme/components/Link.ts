import type { Theme } from "@mui/material/styles";

const Link = (theme: Theme) => ({
  MuiLink: {
    defaultProps: {
      color: "red.main"
    }
  }
});

export default Link;
