import type { CSSProperties } from "react";
import { useState } from "react";

import SanityImage from "~/components/SanityImage";

interface ImageCardProps {
  aspectRatio?: string;
  image?: unknown;
  fallbackSrc?: string;
  title?: string;
  description?: string;
  href?: string;
  onClick?: VoidFunction;
  readOnly?: boolean;
  hideBorders?: boolean;
}

const ImageCard = (
  {
    aspectRatio,
    description,
    image,
    fallbackSrc,
    title,
    href,
    onClick = () => null,
    readOnly = false,
    hideBorders = false
  }: ImageCardProps) => {
  const [hover, setHover] = useState(false);
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  const hoverStyles: CSSProperties | null = readOnly
    ? null
    : ({
      cursor: "pointer",
      transform: "scale(1.01)"
    });

  const borderStyles: CSSProperties | null = hideBorders
    ? null
    : ({
      backgroundColor: "#ffffff"
    });

  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      className="relative rounded-[2px] transition-all duration-[600ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] block"
      href={href}
      onClick={href ? undefined : onClick}
      onKeyDown={href ? undefined : onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        flexGrow: 1,
        ...(hover && hoverStyles),
        ...(!hideBorders && borderStyles)
      }}
    >
      {
        image
          ? (
            <SanityImage
              alt={title}
              image={image}
              style={{
                height: "auto",
                width: "100%",
                aspectRatio,
                objectFit: "cover",
                borderRadius: 2,
                display: "block"
              }}
            />
          )
          : fallbackSrc && (
            <img
              alt={title ?? ""}
              loading="lazy"
              src={fallbackSrc}
              style={{
                height: "auto",
                width: "100%",
                aspectRatio,
                objectFit: "cover",
                borderRadius: 2,
                display: "block"
              }}
            />
          )
      }
      {
        (title || description) && (
          <div className="flex flex-col px-6 py-4">
            {
              title &&
                            <h4 className="font-display font-bold text-xl md:text-2xl">
                              {title}
                            </h4>
            }
            {
              description &&
                            <p className="line-clamp-3 text-sm sm:text-base lg:text-lg leading-relaxed">
                              {description}
                            </p>
            }
          </div>
        )
      }

    </Wrapper>
  );
};

export default ImageCard;
