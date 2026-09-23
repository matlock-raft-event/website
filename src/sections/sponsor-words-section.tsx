import Heading from "~/components/heading";
import Reveal from "~/components/reveal";
import SanityImage from "~/components/sanity-image";
import Section from "~/components/section";
import { opticalScale } from "~/lib/optical-scale";
import type { SponsorTestimonialsQueryResult } from "~/lib/sanity.types";

type Props = { testimonials: SponsorTestimonialsQueryResult };

/* Must match the logo cell below. */
const CELL_W = 112;
const CELL_H = 36;

/* Alternating tilts, same ±2.4° range as the rest of the site. */
const TILTS = [-1.1, 0.9, -0.7, 1.2, -1.4];

/* Sponsors told us why they back the race; those words used to sit on the
   per-sponsor pages. They are worth more here, on the page that asks the next
   business to sponsor, than they were behind a click. */
const SponsorWordsSection = ({ testimonials }: Props) => {
  const quotes = (testimonials ?? []).filter(sponsor => sponsor.testimonial);

  if (!quotes.length) {
    return null;
  }

  return (
    <Section color="sun" plain>
      <div className="mx-auto w-full max-w-5xl px-4">
        <Heading palette="sun" subtitle="In their words" title="Why they back us" />

        {/* Masonry, so a long quote doesn't stretch a short one's card. */}
        <Reveal>
          <div className="columns-1 gap-6 sm:columns-2 [&>*]:mb-6">
            {
              quotes.map((sponsor, i) => {
                const logo = sponsor.logoTrimmed ?? sponsor.logo;
                const scale = logo ? opticalScale(logo, CELL_W, CELL_H) : 1;

                return (
                  <figure
                    key={sponsor.name}
                    className="break-inside-avoid rounded-[4px] bg-paper p-6 text-ink shadow-card transition-transform duration-300 ease-out hover:rotate-0"
                    style={{ transform: `rotate(${TILTS[i % TILTS.length]}deg)` }}
                  >
                    <blockquote className="text-sm sm:text-base leading-relaxed before:content-['“'] before:font-display before:text-3xl before:leading-none before:text-raft">
                      {sponsor.testimonial}
                    </blockquote>
                    {/* Stacked, not side by side: a name like "Matlock Bath
                        Parish Council" wraps to four lines beside a logo. */}
                    <figcaption className="mt-4 flex flex-col items-start gap-2 border-t border-ink/15 pt-4">
                      {
                        logo &&
                          <span className="flex h-9 w-28 items-center justify-start">
                            <SanityImage
                              alt=""
                              className="mix-blend-multiply"
                              image={logo}
                              width={320}
                              style={{
                                height: `${scale * 100}%`,
                                width: `${scale * 100}%`,
                                objectFit: "contain",
                                objectPosition: "left center"
                              }}
                            />
                          </span>
                      }
                      <span className="label-caps text-xs text-pine-dark">
                        {sponsor.name}
                      </span>
                    </figcaption>
                  </figure>
                );
              })
            }
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default SponsorWordsSection;
