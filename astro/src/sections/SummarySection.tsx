import { Button, Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Heading from "~/components/Heading";
import Section from "~/components/Section";
import useSanityFetch from "~/hooks/useSanityFetch";
import { TITLE_FONT_FAMILY } from "~/theme/typography";

type Summary = {
    _id?: string;
    yearsActive?: string | number;
    bio?: string;
    eventCount?: string | number;
    moneyRaised?: string;
};

const SummarySection = () => {
    const { data: summary } = useSanityFetch<Summary>(
        `*[_type == "summary"][0]{ _id, yearsActive, bio, eventCount, moneyRaised }`
    );

    const theme = useTheme();
    return (
        <Section bgColor={theme.palette.secondary}>
            <Heading
                color={theme.palette.secondary}
                subtitle="Hello daring adventurer"
                title="Ready To Brave The Cold Derwent Waters?"
            />
            <Stack alignItems="center" spacing={3}>

                <Container maxWidth="md">
                    <Typography textAlign="center" variant="body1">
                        {summary?.bio}
                    </Typography>
                </Container>

                <Stack direction="row" justifyContent="center" spacing={8}>
                    <Stack alignItems="flex-end" flex={1}>
                        <Stack alignItems="center">
                            <Typography fontFamily={TITLE_FONT_FAMILY} variant="h1">
                                {summary?.yearsActive}
                            </Typography>
                            <Typography sx={{ lineHeight: 1 }} variant="subtitle1">
                                Years
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack alignItems="center">
                        <Typography fontFamily={TITLE_FONT_FAMILY} variant="h1">
                            {summary?.moneyRaised}
                        </Typography>
                        <Typography sx={{ lineHeight: 1 }} variant="subtitle1">
                            Raised
                        </Typography>
                    </Stack>
                    <Stack alignItems="flex-start" flex={1}>
                        <Stack alignItems="center">
                            <Typography fontFamily={TITLE_FONT_FAMILY} variant="h1">
                                {summary?.eventCount}
                            </Typography>
                            <Typography sx={{ lineHeight: 1 }} variant="subtitle1">
                                Events
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <Button component="a" href="/info">Learn more</Button>

            </Stack>
        </Section>
    );
};

export default SummarySection;
