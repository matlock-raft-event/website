import type { CSSProperties } from "react";
import { useState } from "react";

import SanityImage from "~/components/sanity-image";

type SponsorItemProps = {
  image: unknown;
  altText?: string;
  href?: string;
  onClick?: VoidFunction;
  readOnly?: boolean;
};

const SponsorItem = ({
  image,
  altText,
  href,
  onClick,
  readOnly = false
}: SponsorItemProps) => {
  const [hover, setHover] = useState(false);
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  const hoverStyles: CSSProperties | null = readOnly
    ? null
    : ({
      cursor: "pointer",
      boxShadow: "14px 14px 0px 0px rgba(0, 0, 0, 0.25)",
      transform: "scale(1.01) rotate(-0.5deg)"
    });

  return (
    <a
      className="aspect-square flex justify-center items-center p-[5%] rounded-[2px] bg-white shadow-[7px_7px_0_0_rgba(0,0,0,0.25)] transition-all duration-[600ms] ease-[cubic-bezier(0.165,0.84,0.44,1)]"
      href={href}
      onClick={onClick}
      onKeyDown={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        ...(hover && hoverStyles)
      }}
    >
      <SanityImage
        alt={altText}
        image={image}
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
          objectFit: "contain"
        }}
      />
    </a>
  );
};

export default SponsorItem;
