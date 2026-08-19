import { CalendarBlankIcon, ClockIcon, EyeIcon, MapPinAreaIcon, UsersThreeIcon } from "@phosphor-icons/react";

import Map from "~/assets/images/event-map.svg";
import Heading from "~/components/heading";
import Reveal from "~/components/reveal";
import Section from "~/components/section";
import { Button } from "~/components/ui/button";

const mapSrc = (Map as { src?: string }).src ?? (Map as unknown as string);

const FACTS = [
  { icon: MapPinAreaIcon, label: "Matlock, Derbyshire" },
  { icon: CalendarBlankIcon, label: "Boxing Day, 26 Dec" },
  { icon: ClockIcon, label: "11am start" },
  { icon: EyeIcon, label: "Free to watch" },
  { icon: UsersThreeIcon, label: "Family friendly" }
];

/* Reading layout, mirroring the race section: the route map takes the left
   column, the copy + facts + CTA read on the right. */
const ComingToWatchSection = () => (
  <div id="coming-to-watch">
    <Section palette="cream">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14 px-4">
        <Reveal>
          <Heading align="left" palette="cream" subtitle="Where, when and how" title="Coming to watch?" />
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Pick a spot on the riverbank, or follow the rafts the whole way from Matlock down to
            Cromford. Here&apos;s everything you need to know for the day.
          </p>
          <ul className="mt-6 flex flex-col gap-2.5 font-label text-xs font-extrabold uppercase tracking-[0.1em] text-cream-contrast">
            {
              FACTS.map(fact => {
                const Icon = fact.icon;
                return (
                  <li key={fact.label} className="inline-flex items-center gap-2">
                    <Icon className="text-pine shrink-0" size={16} weight="bold" />
                    {fact.label}
                  </li>
                );
              })
            }
          </ul>
          <div className="mt-7">
            <Button href="/info" size="lg">See event info</Button>
          </div>
        </Reveal>
        <Reveal>
          <img
            alt="The event route from Matlock to Cromford"
            className="w-full rounded-lg"
            src={mapSrc}
          />
        </Reveal>
      </div>
    </Section>
  </div>
);

export default ComingToWatchSection;
