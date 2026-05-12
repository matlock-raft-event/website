/* eslint-disable max-len */

import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Map from "~/assets/images/event-map.svg";
import Heading from "~/components/Heading";
import { Button } from "~/components/ui/button";

import "~/assets/event-route.css";

const EventRouteSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.green.main,
        paddingTop: "2em",
        paddingBottom: "3em",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Heading
        color={theme.palette.green}
        subtitle="Where we're going, we don't need roads..."
        title="Event Route"
      />
      <div className="flex flex-col items-center gap-8">
        <Container maxWidth="md">
          <img alt="Event route map" src={(Map as { src?: string }).src ?? (Map as unknown as string)} style={{ width: "100%" }} />
        </Container>
        <Button
          href="https://www.google.com/maps/d/u/1/embed?mid=18splrRLhcfp5U0n8gu5NM7mCgs-K5pY&ehbc=2E312F"
          rel="noreferrer"
          target="_blank"
        >
                    View Interactive Map
        </Button>
      </div>

    </Box>
  );
};

export default EventRouteSection;
