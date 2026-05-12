import type { CSSProperties } from "react";
import { useState } from "react";

import useResponsive from "~/hooks/useResponsive";

interface ImageLinkProps {
  src: string;
  label: string;
  href: string;
}

const ImageLink = ({ src, label, href }: ImageLinkProps) => {
  const [hover, setHover] = useState(false);
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  const hoverStyles: CSSProperties | null = {
    cursor: "pointer",
    boxShadow: "14px 14px 0px 0px rgba(0, 0, 0, 0.25)",
    transform: "scale(1.01) rotate(-0.5deg)"
  };

  const isMobile = useResponsive("down", "sm");

  return (
    <a
      className="aspect-[3/2] flex justify-center items-center rounded-[2px] bg-white border-[8px] border-white shadow-[7px_7px_0_0_rgba(0,0,0,0.25)] transition-all duration-[600ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] overflow-hidden relative"
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ ...(hover && hoverStyles) }}
    >
      <img
        alt={label}
        loading="lazy"
        src={src}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />
      <h3
        className={`text-white font-display font-bold text-2xl md:text-3xl uppercase relative z-[1] ${isMobile ? "text-[2rem]" : ""}`}
      >
        {label}
      </h3>
    </a>
  );
};

export default ImageLink;
