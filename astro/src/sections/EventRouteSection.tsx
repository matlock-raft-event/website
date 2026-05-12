/* eslint-disable max-len */

import { useTheme } from "@mui/material/styles";

import Map from "~/assets/images/event-map.svg";
import Heading from "~/components/Heading";
import { Button } from "~/components/ui/button";

import "~/assets/event-route.css";

const EventRouteSection = () => {
  const theme = useTheme();
  return (
    <div className="relative overflow-hidden bg-green pt-[2em] pb-[3em]">
      <Heading
        color={theme.palette.green}
        subtitle="Where we're going, we don't need roads..."
        title="Event Route"
      />
      <div className="flex flex-col items-center gap-8">
        <div className="mx-auto w-full max-w-4xl px-4">
          <img alt="Event route map" src={(Map as { src?: string }).src ?? (Map as unknown as string)} style={{ width: "100%" }} />
        </div>
        <Button
          href="https://www.google.com/maps/d/u/1/embed?mid=18splrRLhcfp5U0n8gu5NM7mCgs-K5pY&ehbc=2E312F"
          rel="noreferrer"
          target="_blank"
        >
                    View Interactive Map
        </Button>
      </div>

    </div>
  );
};

export default EventRouteSection;
