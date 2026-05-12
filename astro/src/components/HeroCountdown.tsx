import * as React from "react";
import { Fragment } from "react";

import { useCountdownDate } from "~/hooks/useCountdownDate";
import useResponsive from "~/hooks/useResponsive";

type TimeBlockProps = {
  label: string;
  value: string;
};

const TimeBlock = (
  {
    label,
    value
  }: TimeBlockProps) => (
  <div>
    <div className="text-white">
      {" "}
      {value}
      {" "}
    </div>
    <div className="text-white text-base">
      {label}
    </div>
  </div>
);

const HeroCountdown = () => {
  const {
    days,
    hours,
    minutes,
    seconds
  } = useCountdownDate(new Date("12/26/2026 11:00"));
  const isMobile = useResponsive("down", "md");

  const items = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds }
  ];

  return (
    <div
      className={`flex flex-row text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight ${isMobile ? "justify-center" : "justify-start"}`}
    >
      {items.map((item, i) => (
        <Fragment key={item.label}>
          {i > 0 && (
            <div className="text-white mx-2 sm:mx-5">
                            :
            </div>
          )}
          <TimeBlock label={item.label} value={item.value} />
        </Fragment>
      ))}
    </div>
  );
};

export default HeroCountdown;
