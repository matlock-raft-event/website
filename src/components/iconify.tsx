import { forwardRef } from "react";
import type { CSSProperties } from "react";
import { Icon } from "@iconify/react";
import type { IconifyIcon } from "@iconify/react";

export type IconifyProps = IconifyIcon | string;

interface Props {
  icon: IconifyProps;
  width?: number | string;
  className?: string;
  style?: CSSProperties;
  color?: string;
}

const Iconify = forwardRef<SVGSVGElement, Props>(({ icon, width = 20, className, style, color }, ref) => (
  <Icon
    ref={ref}
    className={className}
    color={color}
    height={width}
    icon={icon}
    style={style}
    width={width}
  />
));

Iconify.displayName = "Iconify";

export default Iconify;
