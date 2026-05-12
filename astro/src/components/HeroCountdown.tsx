import * as React from "react";
import { Fragment } from "react";
import { Box } from "@mui/material";

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
    <Box sx={{ color: "white" }}>
      {" "}
      {value}
      {" "}
    </Box>
    <Box sx={{
      color: "white",
      typography: "body1"
    }}
    >
      {label}
    </Box>
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
    <Box
      className={`flex flex-row ${isMobile ? "justify-center" : "justify-start"}`}
      sx={{ typography: "h2" }}
    >
      {items.map((item, i) => (
        <Fragment key={item.label}>
          {i > 0 && (
            <Box sx={{
              color: "white",
              mx: {
                xs: 1,
                sm: 2.5
              }
            }}
            >
                            :
            </Box>
          )}
          <TimeBlock label={item.label} value={item.value} />
        </Fragment>
      ))}
    </Box>
  );
};

export default HeroCountdown;
