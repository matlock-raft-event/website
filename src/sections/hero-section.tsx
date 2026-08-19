import { Fragment } from "react";

import HeaderImg from "~/assets/images/header.jpg";
import HeroCountdown from "~/components/hero-countdown";
import { Button } from "~/components/ui/button";
import type { HeroQueryResult } from "~/lib/sanity.types";
import { resolveAssetSrc } from "~/lib/assets";
import { EVENT_FACTS } from "~/lib/event-facts";

type Props = {
  hero: HeroQueryResult;
  imgSrc?: string;
  imgSrcset?: string;
  eventDate?: string;
};

// Replace the "&nbsp;" token with a real non-breaking space (keeps words together).
const withNbsp = (s: string) => s.replace(/&nbsp;/g, " ");

// Render a string with line breaks: each newline becomes a <br>.
const renderLines = (s: string) =>
  withNbsp(s).replace(/^\n+|\n+$/g, "").split("\n").map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));

const headerImgMeta = HeaderImg as unknown as { width?: number; height?: number };

const HeroSection = ({ hero, imgSrc, imgSrcset, eventDate }: Props) => {
  const title = hero?.title ?? "Ready to brave";
  const titleAccent = hero?.titleAccent;
  const buttonLink = hero?.buttonLink ?? "/take-part";
  const buttonText = hero?.buttonText ?? "Enter a raft";
  const secondaryButtonLink = hero?.secondaryButtonLink;
  const secondaryButtonText = hero?.secondaryButtonText;

  return (
    <div className="relative flex flex-col min-h-[min(100svh,880px)]">
      <div className="relative flex flex-col flex-1">
        <div className="relative md:absolute md:inset-0">
          <img
            alt="Rafts on the River Derwent during the Matlock Raft Event"
            className="block w-full h-auto md:h-full md:object-cover object-center"
            decoding="async"
            fetchPriority="high"
            height={headerImgMeta.height}
            sizes="100vw"
            src={imgSrc ?? resolveAssetSrc(HeaderImg)}
            srcSet={imgSrcset}
            width={headerImgMeta.width}
          />
          {/* Pine-tinted vertical wash — light over the photo's middle, deep at
              the foot so the seam into the marquee reads naturally */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,43,30,0.55),rgba(5,43,30,0.25)_35%,rgba(5,43,30,0.82))]" />
        </div>

        <div className="bg-ink flex-1 md:bg-transparent md:flex-none md:absolute md:inset-0 md:z-10 flex items-center">
          <div className="mx-auto w-full container px-4">
            <div className="flex flex-col items-center gap-5 py-8 text-center md:py-0">
              <h1 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.97] text-cream [text-shadow:0_5px_0_rgba(5,43,30,0.45)]">
                {renderLines(title)}
                {
                  titleAccent &&
                    <span className="block text-sun">
                      {renderLines(titleAccent)}
                    </span>
                }
              </h1>
              <ul className="flex flex-row flex-wrap gap-x-6 gap-y-2 justify-center label-caps-row text-xs text-cream [text-shadow:0_2px_0_rgba(5,43,30,0.55)]">
                {
                  EVENT_FACTS.slice(0, 4).map(({ icon: Icon, label }) => (
                    <li key={label} className="inline-flex items-center gap-1.5">
                      <Icon className="text-sun shrink-0" size={15} weight="bold" />
                      {label}
                    </li>
                  ))
                }
              </ul>
              <div className="flex flex-row flex-wrap items-center gap-4 justify-center">
                <Button href={buttonLink} size="lg">
                  {buttonText}
                </Button>
                {
                  secondaryButtonText && secondaryButtonLink &&
                    <Button color="cream" href={secondaryButtonLink} size="lg">
                      {secondaryButtonText}
                    </Button>
                }
              </div>
              <div className="mt-3">
                <HeroCountdown date={eventDate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
