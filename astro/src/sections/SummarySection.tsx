import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Heading from "~/components/Heading";
import Section from "~/components/Section";
import { Button } from "~/components/ui/button";
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
    "*[_type == \"summary\"][0]{ _id, yearsActive, bio, eventCount, moneyRaised }"
  );

  const theme = useTheme();
  return (
    <Section bgColor={theme.palette.secondary}>
      <Heading
        color={theme.palette.secondary}
        subtitle="Hello daring adventurer"
        title="Ready To Brave The Cold Derwent Waters?"
      />
      <div className="flex flex-col items-center gap-6">

        <Container maxWidth="md">
          <Typography textAlign="center" variant="body1">
            {summary?.bio}
          </Typography>
        </Container>

        <div className="flex flex-row justify-center gap-16">
          <div className="flex flex-col items-end flex-1">
            <div className="flex flex-col items-center">
              <Typography fontFamily={TITLE_FONT_FAMILY} variant="h1">
                {summary?.yearsActive}
              </Typography>
              <Typography sx={{ lineHeight: 1 }} variant="subtitle1">
                                Years
              </Typography>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Typography fontFamily={TITLE_FONT_FAMILY} variant="h1">
              {summary?.moneyRaised}
            </Typography>
            <Typography sx={{ lineHeight: 1 }} variant="subtitle1">
                            Raised
            </Typography>
          </div>
          <div className="flex flex-col items-start flex-1">
            <div className="flex flex-col items-center">
              <Typography fontFamily={TITLE_FONT_FAMILY} variant="h1">
                {summary?.eventCount}
              </Typography>
              <Typography sx={{ lineHeight: 1 }} variant="subtitle1">
                                Events
              </Typography>
            </div>
          </div>
        </div>

        <Button href="/info">Learn more</Button>

      </div>
    </Section>
  );
};

export default SummarySection;
