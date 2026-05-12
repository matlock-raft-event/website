import type { BoxProps } from "@mui/material";
import { Box } from "@mui/material";

import LogoSvg from "../assets/images/logo.svg";

const Logo = (props: BoxProps) => (
  <Box {...props}>
    <img alt="Event Logo" src={LogoSvg.src ?? LogoSvg} />
  </Box>
);

export default Logo;
