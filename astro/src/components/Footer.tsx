import * as React from "react";
import type { PaletteColor } from "@mui/material/styles";
import { styled, useTheme } from "@mui/material/styles";

import { Button } from "~/components/ui/button";

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
}: { label: string, to: string }) => (
  <Button
    className="text-cream-contrast"
    href={to}
    variant="link"
  >
    {label}
  </Button>
);

const Footer = ({ color }: FooterProps) => {
  const theme = useTheme();

  const bgColor = color?.main ?? theme.palette.secondary.main;
  const textColor = color?.contrastText ?? theme.palette.secondary.contrastText;

  return (
    <StyledSection style={{ backgroundColor: bgColor }}>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col">
          <p
            className="font-bold text-xs uppercase tracking-wider"
            style={{ color: textColor }}
          >
                        FIND US ELSEWHERE
          </p>
          <StyledRow>
            <FacebookIcon color={textColor} href="https://www.facebook.com/matlockraftevent/" />
          </StyledRow>
        </div>

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
        <p
          className="text-sm leading-relaxed text-center"
          style={{ color: textColor }}
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
        </p>
        <p
          className="text-sm leading-relaxed text-center"
          style={{ color: textColor }}
        >
                    Website designed and coded with ♥ by
          {" "}
          <strong>Ian Ryde</strong>
          {" "}
                    and
          {" "}
          <strong>Sam Hepburn</strong>
                    .
        </p>
      </div>
    </StyledSection>
  );
};
export default Footer;
