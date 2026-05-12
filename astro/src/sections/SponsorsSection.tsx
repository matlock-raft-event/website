import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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

        <div className="grid grid-cols-12 gap-6 justify-items-center">
          {
            (sponsors ?? []).map(sponsor => (
              <div key={sponsor.name} className={isMobile ? "col-span-4" : "col-span-2"}>
                <SponsorItem
                  altText={sponsor.name}
                  href={sponsor.slug ? `/sponsors/${sponsor.slug}` : undefined}
                  image={sponsor.logo}
                />
              </div>
            ))
          }
        </div>
      </div>

    </Section>
  );
};

export default SponsorsSection;
