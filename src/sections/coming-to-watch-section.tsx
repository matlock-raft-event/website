import Map from "~/assets/images/event-map.svg";
import Heading from "~/components/heading";
import Reveal from "~/components/reveal";
import Section from "~/components/section";
import { Button } from "~/components/ui/button";
import { resolveAssetSrc } from "~/lib/assets";
import { EVENT_FACTS } from "~/lib/event-facts";

const mapSrc = resolveAssetSrc(Map);

/* Reading layout, mirroring the race section: the route map takes the left
   column, the copy + facts + CTA read on the right. Pine, because the map is
   drawn on #0d5c3f — the section colour is the map's own background, so the
   artwork sits on the page rather than looking pasted onto it. */
const ComingToWatchSection = () => (
  <div id="coming-to-watch">
    <Section palette="pine">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14 px-4">
        <Reveal>
          <Heading align="left" palette="pine" subtitle="Where, when and how" title="Coming to watch?" />
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-pine-contrast">
            Pick a spot on the riverbank, or follow the rafts the whole way from Matlock down to
            Cromford. Here&apos;s everything you need to know for the day.
          </p>
          <ul className="mt-6 flex flex-col gap-2.5 label-caps-row text-xs text-pine-contrast">
            {
              EVENT_FACTS.map(fact => {
                const Icon = fact.icon;
                return (
                  <li key={fact.label} className="inline-flex items-center gap-2">
                    <Icon className="text-sun shrink-0" size={16} weight="bold" />
                    {fact.label}
                  </li>
                );
              })
            }
          </ul>
          <div className="mt-7">
            {/* cream navigates on dark surfaces, per the button colour rules */}
            <Button color="cream" href="/info" size="lg">See event info</Button>
          </div>
        </Reveal>
        <Reveal>
          {/* No rounding: the map's own ground is this section's colour, so
              corners would carve a visible card edge out of the page. */}
          <img
            alt="The event route from Matlock to Cromford"
            className="w-full"
            src={mapSrc}
          />
        </Reveal>
      </div>
    </Section>
  </div>
);

export default ComingToWatchSection;
