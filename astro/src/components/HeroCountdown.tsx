import * as React from "react";
import { Box, Stack } from "@mui/material";

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

  return (
    <Stack
      direction="row"
      divider={
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
      }
      justifyContent={isMobile ? "center" : "start"}
      sx={{ typography: "h2" }}
    >
      <TimeBlock label="Days" value={days} />

      <TimeBlock label="Hours" value={hours} />

      <TimeBlock label="Minutes" value={minutes} />

      <TimeBlock label="Seconds" value={seconds} />
    </Stack>
  );
};

export default HeroCountdown;
