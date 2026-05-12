import { Stack, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import type { PaletteColor } from "@mui/material/styles";

import useResponsive from "~/hooks/useResponsive";
import { TITLE_FONT_FAMILY } from "~/theme/typography";

const StyledContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(3)
}));

const Bullet = () => (
    <span>
        <Typography variant="h6">
            &#8226;
        </Typography>
    </span>
);

type HeadingProps = {
    color?: PaletteColor;
    subtitle?: string;
    title: string;
};

const Heading = ({
    color,
    subtitle,
    title
}: HeadingProps) => {
    const theme = useTheme();
    const textColor = color?.contrastText ?? theme.palette.primary.contrastText;

    const isMobile = useResponsive("down", "sm");

    return (
        <StyledContainer style={{ color: textColor }}>
            {
                subtitle &&
                <Stack alignItems="center" direction="row" mb={1} spacing={isMobile ? 1 : 2}>
                    <Bullet />
                    <Typography textAlign="center" textTransform="uppercase" variant="h6">{subtitle}</Typography>
                    <Bullet />
                </Stack>
            }
            <Typography fontFamily={TITLE_FONT_FAMILY} textAlign="center" variant="h2">{title}</Typography>
        </StyledContainer>
    );
};

export default Heading;
