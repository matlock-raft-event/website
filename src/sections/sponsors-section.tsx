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

/* The thank-you wall: bare logos on cream, no cards. mix-blend-multiply
   folds each logo's white background into the cream so they sit directly
   on the surface. */
const SponsorsSection = ({ sponsors }: Props) => (
  <Section palette="cream">
    <Heading
      palette="cream"
      subtitle="The people we couldn't do this without"
      title="Our Amazing Sponsors"
    />
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4">
      <p className="text-center text-sm sm:text-base lg:text-lg leading-relaxed">
        Every year local businesses help keep the raft event afloat. Thank you
        to all of the businesses that have sponsored past and present events.
      </p>

      <Reveal className="grid grid-cols-2 items-center justify-items-center sm:grid-cols-3 md:grid-cols-5">
        {
          (sponsors ?? []).map(sponsor => {
            const scale = opticalScale(sponsor.logo, CELL_W, CELL_H);

            return (
              <a
                key={sponsor.name}
                className="flex h-16 w-full items-center justify-center transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine sm:h-20"
                href={sponsor.slug ? `/sponsors/${sponsor.slug}` : undefined}
              >
                <SanityImage
                  alt={sponsor.name ?? undefined}
                  className="mix-blend-multiply"
                  image={sponsor.logo}
                  width={400}
                  style={{
                    height: `${scale * 100}%`,
                    width: `${scale * 100}%`,
                    objectFit: "contain"
                  }}
                />
              </a>
            );
          })
        }
      </Reveal>
    </div>
  </Section>
);

export default SponsorsSection;
