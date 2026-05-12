import Heading from "~/components/Heading";
import Iconify from "~/components/Iconify";
import Section from "~/components/Section";

const TIMINGS = [
  {
    time: "09:30am",
    description: "After an evening of festivities, the rafters are up bright and early to arrive at Cawdor " +
            "Quarry, register for the event and make final preparations (all nuts tightened)."
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
    time: "12:30am",
    description: "The rafts arrive at Derwent Gardens in Matlock Bath"
  },
  {
    time: "1:00pm",
    description: "The rafts arrive at the finish line at Cromford Meadows in Cromford"
  },
  {
    time: "2:00pm",
    description: "The ceremony takes place at The Fishpond in Matlock Bath to " +
            "announce the winner of this years raft event!"
  }
];

const TimingsSection = () => (
  <Section palette="cream">
    <Heading
      palette="cream"
      subtitle="What time is it?"
      title="What happens and when?"
    />

    <div className="mx-auto w-full max-w-4xl px-4">
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
                    Once the rafts have set off, the timings always vary based on how fast the river is flowing, if
                    there’s any obstacles along the route etc, so we’d recommend getting there slightly earlier just
                    in case, it’s always worth the wait!
      </p>
    </div>

    <div className="mx-auto w-full max-w-4xl px-4">
      <ol className="relative border-l-2 border-red ml-6">
        {
          TIMINGS.map(item => (
            <li key={item.time} className="mb-8 ml-8 last:mb-0">
              <span className="absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-red shadow-[2px_2px_0_0_rgba(0,0,0,0.25)]">
                <Iconify color="var(--color-red-contrast)" icon="ph:clock" width={20} />
              </span>
              <span className="block font-serif font-medium text-sm sm:text-base md:text-lg">
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
