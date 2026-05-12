import type { CSSProperties } from "react";

import { urlFor } from "~/lib/sanity";

type SanityImageProps = {
  image: unknown;
  alt?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
  className?: string;
};

const SanityImage = ({ image, alt, width, height, style, className }: SanityImageProps) => {
  if (!image) return null;

  let builder = urlFor(image);
  if (width) builder = builder.width(width);
  if (height) builder = builder.height(height);

  const src = builder.auto("format").fit("max").url();

  return (
    <img
      alt={alt ?? ""}
      className={className}
      loading="lazy"
      src={src}
      style={style}
    />
  );
};

export default SanityImage;
