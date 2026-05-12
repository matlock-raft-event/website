import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";

import Heading from "~/components/Heading";
import Section from "~/components/Section";
import SponsorItem from "~/components/SponsorItem";
import useResponsive from "~/hooks/useResponsive";
import useSanityFetch from "~/hooks/useSanityFetch";

type Sponsor = {
  name?: string;
  slug?: string;
  logo?: unknown;
};

const SponsorsSection = () => {
  const { data: sponsors } = useSanityFetch<Sponsor[]>(
    "*[_type == \"sponsor\"]{ name, slug, logo }"
  );

  const theme = useTheme();

  const isMobile = useResponsive("down", "sm");

  return (
    <Section bgColor={theme.palette.secondary}>
      <Heading
        color={theme.palette.secondary}
        subtitle="The people we couldn't do this without"
        title="Our Amazing Sponsors"
      />
      <div className="flex flex-col items-center gap-4">
        <div className="mx-auto w-full max-w-4xl px-4">
          <Typography variant="body1">
                        Every year many local businesses help to keep the raft event going by sponsoring the event. In
                        return for their generosity, each sponsor is advertised on our website, social media channels
                        and the posters and banners displayed in and around Matlock.
          </Typography>
          <Typography variant="body1">
                        Thank you to all of the businesses that have helped to sponsor past and present events.
          </Typography>
        </div>

        <Grid2 container justifyContent="center" spacing={3}>
          {
            (sponsors ?? []).map(sponsor => (
              <Grid2 key={sponsor.name} xs={isMobile ? 4 : 2}>
                <SponsorItem
                  altText={sponsor.name}
                  href={sponsor.slug ? `/sponsors/${sponsor.slug}` : undefined}
                  image={sponsor.logo}
                />
              </Grid2>
            ))
          }
        </Grid2>
      </div>

    </Section>
  );
};

export default SponsorsSection;
