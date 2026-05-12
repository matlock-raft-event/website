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
      title="Ready To Brave The Cold Derwent Waters?"
    />
    <div className="flex flex-col items-center gap-6">

      <div className="mx-auto w-full max-w-4xl px-4">
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-center">
          {summary?.bio}
        </p>
      </div>

      <div className="flex flex-row justify-center gap-16">
        <div className="flex flex-col items-end flex-1">
          <div className="flex flex-col items-center">
            <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-display">
              {summary?.yearsActive}
            </h1>
            <p className="font-display font-semibold text-base leading-none">
                                Years
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-display">
            {summary?.moneyRaised}
          </h1>
          <p className="font-display font-semibold text-base leading-none">
                            Raised
          </p>
        </div>
        <div className="flex flex-col items-start flex-1">
          <div className="flex flex-col items-center">
            <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-display">
              {summary?.eventCount}
            </h1>
            <p className="font-display font-semibold text-base leading-none">
                                Events
            </p>
          </div>
        </div>
      </div>

      <Button href="/info">Learn more</Button>

    </div>
  </Section>
);

export default SummarySection;
