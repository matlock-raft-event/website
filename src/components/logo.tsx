import type { CSSProperties } from "react";

import LogoSvg from "../assets/images/logo.svg";

type LogoProps = {
  className?: string;
  style?: CSSProperties;
};

const Logo = ({ className, style }: LogoProps) => (
  <div className={className} style={style}>
    <img alt="Event Logo" src={(LogoSvg as { src?: string }).src ?? (LogoSvg as unknown as string)} />
  </div>
);

export default Logo;
