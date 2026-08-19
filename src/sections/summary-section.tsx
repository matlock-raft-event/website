import Heading from "~/components/heading";
import Section from "~/components/section";
import StatTile from "~/components/stat-tile";
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

      <dl className="flex flex-wrap justify-center gap-6 sm:gap-8 py-2">
        <StatTile label="Years" tilt={-1.4} value={summary?.yearsActive ?? ""} />
        <StatTile label="Raised for the RNLI" tilt={1.6} value={summary?.moneyRaised ?? ""} />
        <StatTile label="Events" tilt={-1.8} value={summary?.eventCount ?? ""} />
      </dl>

      <Button href="/info">Event details</Button>

    </div>
  </Section>
);

export default SummarySection;
