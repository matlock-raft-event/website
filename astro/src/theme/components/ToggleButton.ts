import type { Theme } from "@mui/material/styles";

import { SECONDARY_FONT_FAMILY } from "~/theme/typography";

const ToggleButton = (theme: Theme) => ({
    MuiToggleButton: {
        defaultProps: {
            color: "red",
            disableRipple: true
        },
        styleOverrides: {
            root: {
                fontFamily: SECONDARY_FONT_FAMILY
            }
        }
    }
});

export default ToggleButton;
