import Heading from "~/components/heading";
import Section from "~/components/section";
import SponsorItem from "~/components/sponsor-item";
import type { SponsorsQueryResult } from "~/lib/sanity.types";

type Props = { sponsors: SponsorsQueryResult };

const SponsorsSection = ({ sponsors }: Props) => (
  <Section palette="cream">
    <Heading
      palette="cream"
      subtitle="The people we couldn't do this without"
      title="Our Amazing Sponsors"
    />
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4">
      <div>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          Every year many local businesses help to keep the raft event going by sponsoring the event. In
          return for their generosity, each sponsor is advertised on our website, social media channels
          and the posters and banners displayed in and around Matlock.
        </p>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          Thank you to all of the businesses that have helped to sponsor past and present events.
        </p>
      </div>

      {/* flex-wrap so an incomplete last row centres instead of hugging the left */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
        {
          (sponsors ?? []).map(sponsor => (
            <div key={sponsor.name} className="w-24 sm:w-40">
              <SponsorItem
                altText={sponsor.name ?? undefined}
                href={sponsor.slug ? `/sponsors/${sponsor.slug}` : undefined}
                image={sponsor.logo}
              />
            </div>
          ))
        }
      </div>
    </div>
  </Section>
);

export default SponsorsSection;
