import Heading from "~/components/heading";
import Reveal from "~/components/reveal";
import Section from "~/components/section";
import type { SummaryQueryResult } from "~/lib/sanity.types";

type Props = { summary: SummaryQueryResult };

/* openTop: the marquee sits directly above, with no wave over the top edge. */
const SummarySection = ({ summary }: Props) => (
  <Section openTop palette="cream">
    <Heading
      palette="cream"
      subtitle="Hello daring adventurer"
      title="One river."
      titleAccent="Over sixty years of daft boats."
    />
    <Reveal className="flex flex-col items-center">
      <div className="mx-auto w-full max-w-4xl px-4">
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-center">
          {summary?.bio}
        </p>
      </div>
    </Reveal>
  </Section>
);

export default SummarySection;
