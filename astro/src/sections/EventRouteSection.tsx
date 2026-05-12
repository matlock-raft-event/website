/* eslint-disable max-len */

import { Box, Button, Container, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Heading from "~/components/Heading";

import Map from "~/assets/images/event-map.svg";

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
            <Stack alignItems="center" spacing={4}>
                <Container maxWidth="md">
                    <img alt="Event route map" src={(Map as { src?: string }).src ?? (Map as unknown as string)} style={{ width: "100%" }} />
                </Container>
                <Button
                    component="a"
                    href="https://www.google.com/maps/d/u/1/embed?mid=18splrRLhcfp5U0n8gu5NM7mCgs-K5pY&ehbc=2E312F"
                    rel="noreferrer"
                    target="_blank"
                >
                    View Interactive Map
                </Button>
            </Stack>

        </Box>
    );
};

export default EventRouteSection;
