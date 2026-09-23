
import PageHeaderBackLink, { type PageHeaderBackLinkProps } from "./page-header-back-link";
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
  /** The way back to the parent page, shown under the title. */
  backLink?: PageHeaderBackLinkProps;
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
  backLink
}: PageHeaderProps) => {
  const surface = surfaceFor(color);

  return (
    <header
      className={`relative isolate py-8 md:py-12 ${surface.className}`}
      style={surface.style}
    >
      <PageHeaderBackground pattern={background} />
      {/* One width on every page (the wider of decision 012's two), so the
          title sits in the same place as you move between pages. */}
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 pb-4 md:gap-4 md:pb-3">
        {eyebrow && <PageHeaderEyebrow eyebrowStyle={eyebrowStyle}>{eyebrow}</PageHeaderEyebrow>}
        <PageHeaderTitle>{title}</PageHeaderTitle>
        {backLink && <PageHeaderBackLink {...backLink} color={surface.backLinkColor} />}
      </div>
    </header>
  );
};

export default PageHeader;
