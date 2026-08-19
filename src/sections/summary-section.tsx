import Heading from "~/components/heading";
import Section from "~/components/section";
import { Button } from "~/components/ui/button";
import type { SummaryQueryResult } from "~/lib/sanity.types";

type Props = { summary: SummaryQueryResult };

const SummarySection = ({ summary }: Props) => (
  <Section palette="cream">
    <Heading
      palette="cream"
      subtitle="Hello daring adventurer"
      title="Boxing Day fun for all the family!"
    />
    <div className="flex flex-col items-center gap-6">

      <div className="mx-auto w-full max-w-4xl px-4">
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-center">
          {summary?.bio}
        </p>
      </div>

      <dl className="flex flex-wrap justify-center gap-8 sm:gap-16 text-center">
        <div className="flex flex-col items-center">
          <dd className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-display">
            {summary?.yearsActive}
          </dd>
          <dt className="font-display text-muted-foreground text-base leading-none">
            Years
          </dt>
        </div>
        <div className="flex flex-col items-center">
          <dd className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-display">
            {summary?.moneyRaised}
          </dd>
          <dt className="font-display text-base text-muted-foreground leading-none">
            Raised for the RNLI
          </dt>
        </div>
        <div className="flex flex-col items-center">
          <dd className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-display">
            {summary?.eventCount}
          </dd>
          <dt className="font-display text-muted-foreground text-base leading-none">
            Events
          </dt>
        </div>
      </dl>

      <Button href="/info">Event details</Button>

    </div>
  </Section>
);

export default SummarySection;
