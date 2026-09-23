import Heading from "~/components/heading";
import PodiumGrid from "~/components/podium-grid";
import Reveal from "~/components/reveal";
import Section from "~/components/section";
import { Button } from "~/components/ui/button";
import type { WinnersQueryResult } from "~/lib/sanity.types";

type Props = { winners: WinnersQueryResult };

const PodiumSection = ({ winners }: Props) => {
  const latestYear = (winners ?? []).reduce<number | undefined>(
    (latest, winner) =>
      winner.year != null && (latest === undefined || winner.year > latest)
        ? winner.year
        : latest,
    undefined
  );
  const latestWinners = (winners ?? []).filter(winner => winner.year === latestYear);

  return (
    <Section color="pine">
      {/* Same max-w-5xl width as the site's other grid and image sections */}
      <div className="mx-auto w-full max-w-5xl px-4">
        <Heading
          palette="pine"
          subtitle={latestYear ? `Proud to present ${latestYear}'s` : "Proud to present our"}
          title="Heroic Winners"
        />

        <Reveal>
          <PodiumGrid winners={latestWinners} />
        </Reveal>

        <div className="flex justify-center pt-12">
          <Button color="cream" href="/hall-of-fame" size="lg">
            See our hall of fame
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default PodiumSection;
