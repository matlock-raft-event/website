import * as React from "react";
import { Stack, Typography } from "@mui/material";
import type { PaletteColor } from "@mui/material/styles";
import { styled, useTheme } from "@mui/material/styles";

import { TITLE_FONT_FAMILY } from "~/theme/typography";

import FacebookIcon from "./FacebookIcon";

const StyledSection = styled("section")(({ theme }) => ({
  width: "100%",
  paddingBottom: theme.spacing(4)
}));

const StyledRow = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: 8,
  gap: 16,
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row"
  }
}));

type FooterProps = {
  color?: PaletteColor;
};

const links = [
  { label: "About", to: "/about" },
  { label: "Info", to: "/info" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Contact", to: "/contact" },
  { label: "Gallery", to: "/gallery" }
];

const NavLink = ({
  label,
  to
}: { label: string, to: string }) => {
  const theme = useTheme();
  return (
    <Typography
      key={label}
      color="secondary.contrastText"
      component="a"
      href={to}
      sx={{
        transition:
                    "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
        fontFamily: TITLE_FONT_FAMILY,
        fontWeight: 600,
        textTransform: "uppercase",
        textDecorationColor: "transparent",
        "&:hover": {
          transform: "scale(1.05)",
          textDecorationColor: theme.palette.secondary.contrastText,
          textShadow: "none"
        }
      }}
      variant="h6"
    >
      {label}
    </Typography>
  );
};

const Footer = ({ color }: FooterProps) => {
  const theme = useTheme();

  const bgColor = color?.main ?? theme.palette.secondary.main;
  const textColor = color?.contrastText ?? theme.palette.secondary.contrastText;

  return (
    <StyledSection style={{ backgroundColor: bgColor }}>
      <Stack alignItems="center" spacing={2}>
        <Stack>
          <Typography
            sx={{ color: textColor }}
            variant="overline"
          >
                        FIND US ELSEWHERE
          </Typography>
          <StyledRow>
            <FacebookIcon color={textColor} href="https://www.facebook.com/matlockraftevent/" />
          </StyledRow>
        </Stack>

        <StyledRow>
          {
            links.map(link => (
              <NavLink
                key={link.label}
                label={link.label}
                to={link.to}
              />
            ))
          }
        </StyledRow>
        <Typography
          sx={{ color: textColor }}
          textAlign="center"
          variant="body2"
        >
                    &#169; Copyright
          {" "}
          {new Date().getFullYear()}
          {" "}
                    -
          {" "}
          <strong>Dasac’s Matlock Raft Event</strong>
          {" "}
                    - In the aid of the the
                    Royal National Lifeboats Institute (RNLI)
        </Typography>
        <Typography
          sx={{ color: textColor }}
          textAlign="center"
          variant="body2"
        >
                    Website designed and coded with ♥ by
          {" "}
          <strong>Ian Ryde</strong>
          {" "}
                    and
          {" "}
          <strong>Sam Hepburn</strong>
                    .
        </Typography>
      </Stack>
    </StyledSection>
  );
};
export default Footer;
