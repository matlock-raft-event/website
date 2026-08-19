import { Fragment } from "react";
import { CalendarBlankIcon, ClockIcon, EyeIcon, MapPinAreaIcon, UsersThreeIcon } from "@phosphor-icons/react";

import HeaderImg from "~/assets/images/header.jpg";
import HeroCountdown from "~/components/hero-countdown";
import { Button } from "~/components/ui/button";
import type { HeroQueryResult } from "~/lib/sanity.types";

const resolveSrc = (asset: unknown): string =>
  (asset as { src?: string }).src ?? (asset as unknown as string);

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
  const title = hero?.title ?? "Ready To Brave The Cold Derwent Waters?";
  const buttonLink = hero?.buttonLink ?? "/take-part";
  const buttonText = hero?.buttonText ?? "Get involved";

  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="relative flex flex-col flex-1">
        <div className="relative md:absolute md:inset-0">
          <img
            alt="Rafts on the River Derwent during the Matlock Raft Event"
            className="block w-full h-auto md:h-full md:object-cover object-center"
            decoding="async"
            fetchPriority="high"
            height={headerImgMeta.height}
            sizes="100vw"
            src={imgSrc ?? resolveSrc(HeaderImg)}
            srcSet={imgSrcset}
            width={headerImgMeta.width}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.2),rgba(53,58,60,1))] md:bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.35)_45%,transparent_75%)]" />
        </div>

        <div className="bg-ink flex-1 md:bg-transparent md:flex-none md:absolute md:inset-0 md:z-10 flex items-center">
          <div className="mx-auto w-full container px-4">
            <div className="flex flex-col gap-4 py-4 text-center md:text-left md:w-[61.8vw] md:py-0">
              <p className="font-sans font-bold text-lg md:text-xl text-sun">
                Boxing Day raft racing, in aid of the RNLI
              </p>
              <h1 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-secondary">
                {renderLines(title)}
              </h1>
              <ul className="flex flex-row flex-wrap gap-x-5 gap-y-2 justify-center md:justify-start text-secondary">
                <li className="inline-flex items-center gap-1.5 text-sm font-semibold">
                  <MapPinAreaIcon className="text-sun shrink-0" weight="bold" />
                  Matlock, Derbyshire
                </li>
                <li className="inline-flex items-center gap-1.5 text-sm font-semibold">
                  <CalendarBlankIcon className="text-sun shrink-0" weight="bold" />
                  Boxing Day, 26 Dec
                </li>
                <li className="inline-flex items-center gap-1.5 text-sm font-semibold">
                  <ClockIcon className="text-sun shrink-0" weight="bold" />
                  11am start
                </li>
                <li className="inline-flex items-center gap-1.5 text-sm font-semibold">
                  <EyeIcon className="text-sun shrink-0" weight="bold" />
                  Free to watch
                </li>
                <li className="inline-flex items-center gap-1.5 text-sm font-semibold">
                  <UsersThreeIcon className="text-sun shrink-0" weight="bold" />
                  Family friendly
                </li>
              </ul>
              <div className="flex flex-row items-center gap-4 justify-center md:justify-start">
                <Button href={buttonLink} size="lg">
                  {buttonText}
                </Button>
              </div>
              <HeroCountdown date={eventDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
