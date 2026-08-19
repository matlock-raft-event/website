import type { CSSProperties } from "react";

import LogoSvg from "../assets/images/logo.svg";
import { resolveAssetSrc } from "~/lib/assets";

type LogoProps = {
  className?: string;
  style?: CSSProperties;
};

const Logo = ({ className, style }: LogoProps) => (
  <div className={className} style={style}>
    <img alt="The Matlock Raft Event" src={resolveAssetSrc(LogoSvg)} />
  </div>
);

export default Logo;
