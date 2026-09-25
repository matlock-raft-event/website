import { Fragment } from "react";

import HeaderImg from "~/assets/images/header.jpg";
import HeroCountdown from "~/components/hero-countdown";
import Logo from "~/components/logo";
import { Button } from "~/components/ui/button";
import type { HeroQueryResult } from "~/lib/sanity.types";
import { resolveAssetSrc } from "~/lib/assets";
import { EVENT_FACTS } from "~/lib/event-facts";

export type Cancellation = {
  year: number;
  href: string;
  label: string;
};

type Props = {
  hero: HeroQueryResult;
  imgSrc?: string;
  imgSrcset?: string;
  eventDate?: string;
  /** Set while the Studio's Event status is Cancelled. */
  cancellation?: Cancellation;
};

// Replace the "&nbsp;" token with a real non-breaking space (keeps words together).
const withNbsp = (s: string) => s.replace(/&nbsp;/g, " ");

// Render a string with line breaks: each newline becomes a <br>.
const renderLines = (s: string) =>
  withNbsp(s).replace(/^\n+|\n+$/g, "").split("\n").map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));

const headerImgMeta = HeaderImg as unknown as { width?: number; height?: number };

/* On phones the pair shares one row at equal widths; from md they're the
   usual large pills. */
const CTA_CLASSES = "flex-1 max-md:h-11 max-md:px-3 md:flex-none";

/* After the Red Bull event pages: the photo fades into pine-dark, and the
   badge and headline sit where the fade ends, followed by the key facts,
   the buttons and the countdown.

   Phones: the photo is a band across the top and the content stacks
   centred beneath it, starting with the badge on the fade.
   md and up: the photo fills the hero and the content sits vertically
   centred on the left. */
/* Takes the countdown's place when the event is off: the same paper card
   family, so it reads as part of the hero rather than an error. */
const CancelledCard = ({ year, href, label }: Cancellation) => (
  <div className="max-w-sm rounded-[5px] bg-paper px-5 py-4 text-center shadow-card-heavy -rotate-1 md:text-left">
    <p className="font-display uppercase text-4xl leading-none text-raft">Cancelled</p>
    <p className="mt-2 text-sm sm:text-base text-ink">The {year} raft event will not go ahead.</p>
    <a
      className="mt-1 inline-block text-sm sm:text-base font-semibold text-raft-dark underline underline-offset-2 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      href={href}
    >
      {label}
    </a>
  </div>
);

const HeroSection = ({ hero, imgSrc, imgSrcset, eventDate, cancellation }: Props) => {
  const title = hero?.title ?? "Ready to brave";
  const titleAccent = hero?.titleAccent;
  const buttonLink = hero?.buttonLink ?? "/take-part";
  const buttonText = hero?.buttonText ?? "Enter a raft";
  const secondaryButtonLink = hero?.secondaryButtonLink;
  const secondaryButtonText = hero?.secondaryButtonText;

  return (
    <section className="relative flex flex-col bg-pine-dark [--surface-focus:var(--color-sun)] md:min-h-[min(100svh,880px)] md:justify-center">
      <div className="absolute inset-x-0 top-0 h-[470px] md:h-full">
        <img
          alt="Rafts on the River Derwent during the Matlock Raft Event"
          className="size-full object-cover object-[55%_30%]"
          decoding="async"
          fetchPriority="high"
          height={headerImgMeta.height}
          sizes="100vw"
          src={imgSrc ?? resolveAssetSrc(HeaderImg)}
          srcSet={imgSrcset}
          width={headerImgMeta.width}
        />
        {/* Shaded at the top for the header, clear through the middle, then
            fading to solid pine-dark where the content starts */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,64,44,0.45),rgba(8,64,44,0)_22%,rgba(8,64,44,0)_45%,rgba(8,64,44,0.7)_72%,var(--color-pine-dark)_96%)]" />
      </div>

      <div className="relative mx-auto flex w-full container flex-col items-center gap-3.5 px-4 pt-80 pb-10 text-center md:items-start md:pt-26 md:pb-12 md:text-left">
        {/* The badge's one big moment: it never goes in the header bar */}
        <Logo className="w-28 [filter:drop-shadow(0_6px_0_rgba(0,0,0,0.3))]" />

        <h1 className="font-display uppercase text-5xl sm:text-6xl lg:text-7xl leading-[0.97] text-cream">
          {renderLines(title)}
          {
            titleAccent &&
              <span className="block text-sun">
                {renderLines(titleAccent)}
              </span>
          }
        </h1>

        <ul className="mt-1 flex flex-row flex-wrap justify-center gap-x-6 gap-y-2 label-caps-row text-xs text-cream [text-shadow:0_2px_0_rgba(5,43,30,0.55)] md:justify-start">
          {
            EVENT_FACTS.slice(0, 4).map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-1.5">
                <Icon className="shrink-0 text-sun" size={15} weight="bold" />
                {label}
              </li>
            ))
          }
        </ul>

        <div className="mt-2.5 flex w-full gap-2.5 md:w-auto md:gap-4">
          <Button className={CTA_CLASSES} href={buttonLink} size="lg">
            {buttonText}
          </Button>
          {
            secondaryButtonText && secondaryButtonLink &&
              <Button className={CTA_CLASSES} color="cream" href={secondaryButtonLink} size="lg">
                {secondaryButtonText}
              </Button>
          }
        </div>

        <div className="mt-3">
          {cancellation ? <CancelledCard {...cancellation} /> : <HeroCountdown date={eventDate} />}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
