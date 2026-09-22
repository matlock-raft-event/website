import type { ReactNode } from "react";

import Waves from "~/components/waves";

import PageHeaderBackground, { type PageHeaderPattern } from "./page-header-background";
import PageHeaderEyebrow, { type PageHeaderEyebrowStyle } from "./page-header-eyebrow";
import { type PageHeaderColor, surfaceFor } from "./page-header-surfaces";
import PageHeaderTitle from "./page-header-title";

export type PageHeaderProps = {
  title: string;
  /** Short line above the title, in the page's own voice ("So you're brave enough?"). */
  eyebrow?: string;
  /** Sets the ground and every colour on it: pattern, title shadow, eyebrow. */
  color?: PageHeaderColor;
  background?: PageHeaderPattern;
  /** Plain is for pages that shouldn't be playful: tributes, legal pages. */
  eyebrowStyle?: PageHeaderEyebrowStyle;
  /** Line the title up with the content below: "wide" for grids and
      image-led pages, "text" for running prose (decision 012). */
  contentWidth?: "wide" | "text";
  /** Colour of the section below, which the wave flows into. */
  wavesColor?: string;
  /** Anything that belongs under the title, e.g. a back link. */
  children?: ReactNode;
};

const CONTENT_WIDTH = {
  wide: "max-w-5xl",
  text: "max-w-4xl"
};

/* The inner-page masthead: a printed, patterned ground with a huge title in
   a hard shadow and a stuck-on eyebrow, handing over to the page on a wave.
   The wave is laid over the ground, so the pattern runs into it. */
const PageHeader = ({
  title,
  eyebrow,
  color = "river",
  background = "dots",
  eyebrowStyle = "sticker",
  contentWidth = "wide",
  wavesColor = "var(--color-cream)",
  children
}: PageHeaderProps) => {
  const surface = surfaceFor(color);

  return (
    <header
      className={`relative isolate pt-10 pb-[calc(7vw+1.75rem)] md:pt-16 md:pb-[calc(7vw+1.5rem)] ${surface.className}`}
      style={surface.style}
    >
      <PageHeaderBackground pattern={background} />
      <div className={`mx-auto flex w-full flex-col gap-3 px-4 md:gap-4 ${CONTENT_WIDTH[contentWidth]}`}>
        {eyebrow && <PageHeaderEyebrow eyebrowStyle={eyebrowStyle}>{eyebrow}</PageHeaderEyebrow>}
        <PageHeaderTitle>{title}</PageHeaderTitle>
        {children}
      </div>
      <Waves bottomColor={wavesColor} className="absolute inset-x-0 bottom-0" topColor="transparent" variant={3} />
    </header>
  );
};

export default PageHeader;
