import type { VariantProps } from "class-variance-authority";

import pageHeaderEyebrowVariants from "./page-header-eyebrow-variants";

export type PageHeaderEyebrowStyle = NonNullable<VariantProps<typeof pageHeaderEyebrowVariants>["style"]>;

type PageHeaderEyebrowProps = {
  children: string;
  eyebrowStyle: PageHeaderEyebrowStyle;
};

const PageHeaderEyebrow = ({ children, eyebrowStyle }: PageHeaderEyebrowProps) => {
  const label = <span className={pageHeaderEyebrowVariants({ style: eyebrowStyle })}>{children}</span>;

  if (eyebrowStyle === "plain") {
    return <p>{label}</p>;
  }

  // Stickers are stuck on: nudged in from the edge and overlapping the top
  // of the title's capitals.
  return (
    <p className={`relative z-10 -mb-2.5 ml-[0.35em] md:-mb-5 ${eyebrowStyle === "ribbon" ? "drop-shadow-sticker" : ""}`}>
      {label}
    </p>
  );
};

export default PageHeaderEyebrow;
