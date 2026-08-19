import { CalendarBlankIcon, ClockIcon, EyeIcon, MapPinAreaIcon, UsersThreeIcon } from "@phosphor-icons/react";

import Map from "~/assets/images/event-map.svg";
import Heading from "~/components/heading";
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

const ComingToWatchSection = () => (
  <div id="coming-to-watch">
    <Section palette="cream">
      <Heading palette="cream" subtitle="Where, when and how" title="Coming To Watch?" />
    <div className="flex flex-col items-center gap-8">
      <p className="mx-auto w-full max-w-3xl px-4 text-center text-sm sm:text-base lg:text-lg leading-relaxed">
        Pick a spot on the riverbank, or follow the rafts the whole way from Matlock down to
        Cromford. Here&apos;s everything you need to know for the day.
      </p>

      <div className="mx-auto w-full max-w-4xl px-4">
        <img
          alt="The event route from Matlock to Cromford"
          className="w-full rounded-lg"
          src={mapSrc}
        />
      </div>

      <ul className="flex flex-row flex-wrap justify-center gap-x-5 gap-y-2 text-cream-contrast">
        {
          FACTS.map(fact => {
            const Icon = fact.icon;
            return (
              <li key={fact.label} className="inline-flex items-center gap-1.5 text-sm font-semibold">
                <Icon className="text-pine shrink-0" weight="fill" />
                {fact.label}
              </li>
            );
          })
        }
      </ul>

      <Button href="/info" size="lg">See event info</Button>
    </div>
    </Section>
  </div>
);

export default ComingToWatchSection;
