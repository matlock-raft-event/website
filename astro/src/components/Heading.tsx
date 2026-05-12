import { Typography } from "@mui/material";
import type { PaletteColor } from "@mui/material/styles";
import { styled, useTheme } from "@mui/material/styles";

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
                <div className={`flex flex-row items-center mb-2 ${isMobile ? "gap-2" : "gap-4"}`}>
                  <Bullet />
                  <Typography textAlign="center" textTransform="uppercase" variant="h6">{subtitle}</Typography>
                  <Bullet />
                </div>
      }
      <Typography fontFamily={TITLE_FONT_FAMILY} textAlign="center" variant="h2">{title}</Typography>
    </StyledContainer>
  );
};

export default Heading;
