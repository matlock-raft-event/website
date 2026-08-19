import { Fragment } from "react";

import { useCountdownDate } from "~/hooks/use-countdown-date";

/* The countdown as little paper cards — same family as the polaroids and
   stat tiles: paper ground, hard pine-tinted shadow, slight alternating
   tilts, Anton numerals. The caption owns the urgency so the date facts
   live once, in the icon row above. */

const TILTS = [-1.6, 1.2, -1, 1.8];

type TimeBlockProps = {
  label: string;
  tilt: number;
  value: string;
};

const TimeBlock = ({ label, tilt, value }: TimeBlockProps) => (
  <div
    className="min-w-[72px] sm:min-w-[84px] rounded-[5px] bg-paper px-2.5 pt-2.5 pb-2 text-center shadow-[5px_5px_0_0_rgba(8,64,44,0.4)]"
    style={{ transform: `rotate(${tilt}deg)` }}
  >
    <div className="font-display uppercase text-3xl sm:text-4xl leading-none text-ink tabular-nums">
      {value}
    </div>
    <div className="mt-1 font-label text-[0.6rem] font-extrabold uppercase tracking-[0.18em] text-raft">
      {label}
    </div>
  </div>
);

type HeroCountdownProps = {
  date?: string;
};

const HeroCountdown = ({ date }: HeroCountdownProps) => {
  const targetDate = date ? new Date(date) : new Date("12/26/2026 11:00");
  const {
    days,
    hours,
    minutes,
    seconds
  } = useCountdownDate(Number.isNaN(targetDate.getTime()) ? new Date("12/26/2026 11:00") : targetDate);

  const items = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Mins", value: minutes },
    { label: "Secs", value: seconds }
  ];

  return (
    <div className="flex flex-col items-center gap-3" role="timer" aria-label="Countdown to the race">
      <div className="flex flex-row items-stretch justify-center gap-2 sm:gap-2.5">
        {items.map((item, i) => (
          <Fragment key={item.label}>
            {i > 0 && (
              <div className="self-center font-display text-2xl text-sun [text-shadow:0_3px_0_rgba(8,64,44,0.5)]">
                :
              </div>
            )}
            <TimeBlock label={item.label} tilt={TILTS[i]} value={item.value} />
          </Fragment>
        ))}
      </div>
      <p className="font-label text-xs font-extrabold uppercase tracking-[0.2em] text-sun [text-shadow:0_2px_0_rgba(8,64,44,0.5)]">
        Until the rafts launch
      </p>
    </div>
  );
};

export default HeroCountdown;
