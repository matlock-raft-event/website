import type { PaletteColor } from "@mui/material/styles";
import { styled, useTheme } from "@mui/material/styles";

import useResponsive from "~/hooks/useResponsive";

const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: theme.spacing(3)
}));

const Bullet = () => (
  <span>
    <h6 className="font-serif font-medium text-sm sm:text-base md:text-lg">
            &#8226;
    </h6>
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
                  <h6 className="font-serif font-medium text-sm sm:text-base md:text-lg text-center uppercase">{subtitle}</h6>
                  <Bullet />
                </div>
      }
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center">{title}</h2>
    </StyledContainer>
  );
};

export default Heading;
