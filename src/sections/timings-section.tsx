import Heading from "~/components/heading";
import Iconify from "~/components/iconify";
import Section from "~/components/section";
import type { EventFacts } from "~/lib/event";

/* The first entry follows the Studio's arrival time and meeting point; the
   rest are the usual pace of the river. */
const timings = ({ meetingPoint, arrivalTime }: Pick<EventFacts, "meetingPoint" | "arrivalTime">) => [
  {
    time: arrivalTime,
    description: "After an evening of festivities, the rafters are up bright and early to arrive at " +
            `${meetingPoint}, register for the event and make final preparations (all nuts tightened).`
  },
  {
    time: "11:00am",
    description: "The rafts set off on their journey down the Derwent"
  },
  {
    time: "11:30am",
    description: "The rafts arrive at Hall Leys Park in Matlock"
  },
  {
    time: "12:30pm",
    description: "The rafts arrive at Derwent Gardens in Matlock Bath"
  },
  {
    time: "1:00pm",
    description: "The rafts arrive at the finish line at Cromford Meadows in Cromford"
  },
  {
    time: "2:00pm",
    description: "The ceremony takes place at The Fishpond in Matlock Bath to " +
            "announce the winner of this year\u2019s raft event!"
  }
];

type Props = { facts: Pick<EventFacts, "meetingPoint" | "arrivalTime"> };

const TimingsSection = ({ facts }: Props) => (
  <Section color="river" plain>
    <div className="mx-auto w-full max-w-5xl px-4">
      <Heading
        align="left"
        palette="river"
        subtitle="What time is it?"
        title="What happens and when?"
      />
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
                    Once the rafts have set off, the timings always vary based on how fast the river is flowing, if
                    there are any obstacles along the route, so we’d recommend getting there slightly earlier just
                    in case, it’s always worth the wait!
      </p>
      <ol className="relative border-l-2 border-raft ml-6">
        {
          timings(facts).map(item => (
            <li key={item.time} className="mb-8 ml-8 last:mb-0">
              <span className="absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-raft shadow-[2px_2px_0_0_rgba(0,0,0,0.25)]">
                <Iconify color="var(--color-raft-contrast)" icon="ph:clock" width={20} />
              </span>
              <span className="block font-label font-medium text-sm sm:text-base md:text-lg">
                {item.time}
              </span>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">{item.description}</p>
            </li>
          ))
        }
      </ol>
    </div>
  </Section>
);

export default TimingsSection;
