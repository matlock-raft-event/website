import Reveal from "~/components/reveal";
import Section from "~/components/section";
import StatTile from "~/components/stat-tile";
import { Button } from "~/components/ui/button";
import type { SummaryQueryResult } from "~/lib/sanity.types";

type Props = { summary: SummaryQueryResult };

/* The river section from the design language: the race facts sit in the
   water — copy on the left, stat tiles on the right, the Section's water
   shapes washing behind. Facts per the Take Part page: ~3 miles, weir
   descents totalling ~30m of rapid white water, homemade rafts only. */
const RaceSection = ({ summary }: Props) => (
  <Section palette="river">
    <div className="mx-auto grid w-full max-w-5xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14 px-4">
      <Reveal className="text-center md:text-left">
        <p className="font-label text-xs font-extrabold uppercase tracking-[0.2em] text-sun">
          The race
        </p>
        <h2 className="mt-3 font-display uppercase text-3xl sm:text-4xl lg:text-5xl leading-[0.97] text-white">
          Three miles. One weir.
          {" "}
          <span className="text-sun">No engines.</span>
        </h2>
        <p className="mt-5 max-w-prose text-sm sm:text-base lg:text-lg leading-relaxed text-cream mx-auto md:mx-0">
          The course runs roughly three miles from Matlock to the finish at
          Cromford Meadows. The water is cold, in places deep and turbulent,
          and the weir descents total around 30 metres of rapid white water.
          Rafts must be homemade, built entirely by the crew &mdash; and the
          banks will be full of spectators cheering you through.
        </p>
        <div className="mt-7">
          <Button color="sun" href="/take-part" size="lg">
            How to enter
          </Button>
        </div>
      </Reveal>
      <Reveal className="grid grid-cols-2 gap-4 sm:gap-5">
        <StatTile label="Years of racing" tilt={-1.4} value={summary?.yearsActive ?? ""} />
        <StatTile label="Raised for the RNLI" tilt={1.6} value={summary?.moneyRaised ?? ""} />
        <StatTile label="Matlock to Cromford" tilt={1.2} value="3mi" />
        <StatTile label="Events" tilt={-1.8} value={summary?.eventCount ?? ""} />
      </Reveal>
    </div>
  </Section>
);

export default RaceSection;
