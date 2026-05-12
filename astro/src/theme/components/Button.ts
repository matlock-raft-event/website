import type { Theme } from "@mui/material/styles";

import { TITLE_FONT_FAMILY } from "~/theme/typography";

const Button = (theme: Theme) => ({
    MuiButton: {
        defaultProps: {
            variant: "contained" as const,
            color: "red",
            disableRipple: true
        },
        styleOverrides: {
            root: {
                fontFamily: TITLE_FONT_FAMILY,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                textAlign: "center",
                borderRadius: 2,
                transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",

                "&.MuiButton-text": {
                    ">.MuiButton-startIcon": {
                        marginRight: theme.spacing(0.5)
                    },
                    ">.MuiButton-endIcon": {
                        marginLeft: theme.spacing(0.5)
                    }
                },
                "&:hover": {
                    transform: "scale(1.01)"
                }
            }
        }
    }
});

export default Button;
