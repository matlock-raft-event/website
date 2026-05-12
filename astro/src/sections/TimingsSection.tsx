import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    timelineItemClasses,
    TimelineSeparator
} from "@mui/lab";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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

const TimingsSection = () => {
    const theme = useTheme();
    return (
        <Section bgColor={theme.palette.secondary}>
            <Heading
                color={theme.palette.secondary}
                subtitle="What time is it?"
                title="What happens and when?"
            />

            <Container maxWidth="md">
                <Typography mb={4} variant="body1">
                    Once the rafts have set off, the timings always vary based on how fast the river is flowing, if
                    there’s any obstacles along the route etc, so we’d recommend getting there slightly earlier just
                    in case, it’s always worth the wait!
                </Typography>
            </Container>

            <Container maxWidth="md">
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0
                        }
                    }}
                >
                    {
                        TIMINGS.map(item => (
                            <TimelineItem key={item.time}>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot sx={{ bgcolor: theme.palette.red.main }}>
                                        <Iconify color="red.contrastText" icon="ph:clock" />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{
                                    py: "12px",
                                    px: 2
                                }}
                                >
                                    <Typography component="span" variant="h6">
                                        {item.time}
                                    </Typography>
                                    <Typography>{item.description}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        ))
                    }
                </Timeline>
            </Container>
        </Section>
    );
};

export default TimingsSection;
