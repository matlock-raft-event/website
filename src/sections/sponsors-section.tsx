import Heading from "~/components/heading";
import Reveal from "~/components/reveal";
import Section from "~/components/section";
import SanityImage from "~/components/sanity-image";
import type { SponsorsQueryResult } from "~/lib/sanity.types";
import { opticalScale } from "~/lib/optical-scale";

type Props = { sponsors: SponsorsQueryResult };

/* The grid cell is fluid, so this is the five-column desktop size — the scale
   is a relative correction, so an approximate cell is enough. */
const CELL_W = 176;
const CELL_H = 80;

/* The thank-you wall: every logo on one white card, the same card as the
   footer's "Supported by" strip. It gives the small-business logos the
   light backing they need without per-logo chips, and mix-blend-multiply
   folds each logo's own white background into it. */
const SponsorsSection = ({ sponsors }: Props) => (
  <Section color="sun" plain>
    <Heading
      palette="sun"
      subtitle="The people we couldn't do this without"
      title="Our Amazing Sponsors"
    />
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4">
      <p className="text-center text-sm sm:text-base lg:text-lg leading-relaxed">
        Every year local businesses help keep the raft event afloat. Thank you
        to all of the businesses that have sponsored past and present events.
      </p>

      <Reveal className="grid grid-cols-2 items-center justify-items-center rounded-[10px] bg-white px-5 py-5 sm:grid-cols-3 sm:px-7 md:grid-cols-5">
        {
          (sponsors ?? []).map(sponsor => {
            /* Falls back to the original for a sponsor added since
               `pnpm trim-logos` last ran. */
            const logo = sponsor.logoTrimmed ?? sponsor.logo;
            const scale = opticalScale(logo, CELL_W, CELL_H);

            const mark = (
              <SanityImage
                alt={sponsor.name ?? undefined}
                className="mix-blend-multiply"
                image={logo}
                width={400}
                style={{
                  height: `${scale * 100}%`,
                  width: `${scale * 100}%`,
                  objectFit: "contain"
                }}
              />
            );
            const cell = "flex h-16 w-full items-center justify-center sm:h-20";

            /* No website on file — show the logo rather than an anchor that
               goes nowhere. */
            if (!sponsor.url) {
              return <div key={sponsor.name} className={cell}>{mark}</div>;
            }

            return (
              <a
                key={sponsor.name}
                aria-label={sponsor.name ? `${sponsor.name} (opens in a new tab)` : undefined}
                className={`${cell} transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine`}
                href={sponsor.url}
                rel="noreferrer"
                target="_blank"
              >
                {mark}
              </a>
            );
          })
        }
      </Reveal>
    </div>
  </Section>
);

export default SponsorsSection;
