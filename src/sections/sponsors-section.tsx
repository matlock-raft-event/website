import Heading from "~/components/heading";
import Reveal from "~/components/reveal";
import Section from "~/components/section";
import SanityImage from "~/components/sanity-image";
import type { SponsorsQueryResult } from "~/lib/sanity.types";

type Props = { sponsors: SponsorsQueryResult };

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

      <Reveal className="grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
        {
          (sponsors ?? []).map(sponsor => (
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
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain"
                }}
              />
            </a>
          ))
        }
      </Reveal>
    </div>
  </Section>
);

export default SponsorsSection;
