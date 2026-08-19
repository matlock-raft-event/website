import type { CSSProperties } from "react";
import { useState } from "react";

import SanityImage from "~/components/sanity-image";

interface ImageCardProps {
  aspectRatio?: string;
  image?: unknown;
  fallbackSrc?: string;
  title?: string;
  alt?: string;
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
    alt,
    href,
    onClick = () => null,
    readOnly = false,
    hideBorders = false
  }: ImageCardProps) => {
  const imageAlt = alt ?? title ?? "";
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

  const isLink = Boolean(href);
  const Wrapper = isLink ? "a" : "button";

  return (
    <Wrapper
      className={`relative rounded-[2px] transition-all duration-[600ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${isLink ? "" : "w-full appearance-none border-0 bg-transparent p-0 text-left"}`}
      href={isLink ? href : undefined}
      onClick={isLink ? undefined : onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        flexGrow: 1,
        ...(hover && hoverStyles),
        ...(!hideBorders && borderStyles)
      }}
      type={isLink ? undefined : "button"}
    >
      {
        image
          ? (
            <SanityImage
              alt={imageAlt}
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
              alt={imageAlt}
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
                            <h3 className="font-display font-bold text-xl md:text-2xl">
                              {title}
                            </h3>
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
