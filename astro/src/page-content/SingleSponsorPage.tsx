import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";

import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import PageShell from "~/components/PageShell";
import Section from "~/components/Section";
import SponsorItem from "~/components/SponsorItem";
import { Button } from "~/components/ui/button";
import Waves from "~/components/Waves";
import InnerHeroSection from "~/sections/InnerHeroSection";

type SingleSponsorPageProps = {
  sponsor: {
    name?: string;
    slug?: string;
    logo?: unknown;
    url?: string;
    address?: string;
    description?: string;
    testimonial?: string;
  };
};

const Content = ({ sponsor }: SingleSponsorPageProps) => {
  const title = sponsor.name ?? "Sponsor";

  const theme = useTheme();
  const secondaryColor = theme.palette.secondary;

  return (
    <main>
      <InnerHeroSection />

      <Section bgColor={secondaryColor}>
        <Heading color={secondaryColor} subtitle="Sponsor" title={title} />
        <Grid2 container spacing={5}>
          <Grid2 sm={4} xs={12}>
            <SponsorItem altText={sponsor.name} image={sponsor.logo} readOnly />
          </Grid2>
          <Grid2 sm={8} xs={12}>
            <div className="flex flex-col gap-4">
              {
                sponsor.description &&
                                <div>
                                  <Typography variant="h6">What we do</Typography>
                                  <Typography variant="body1">{sponsor.description}</Typography>
                                </div>
              }
              {
                sponsor.address &&
                                <div>
                                  <Typography variant="h6">Where to find us</Typography>
                                  <Typography variant="body1">{sponsor.address}</Typography>
                                </div>
              }
              {
                sponsor.url &&
                                <div>
                                  <Typography variant="h6">Our website</Typography>
                                  <a
                                    className="text-red text-base hover:underline"
                                    href={sponsor.url}
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    {sponsor.url}
                                  </a>
                                </div>
              }
              {
                sponsor.testimonial &&
                                <div>
                                  <Typography variant="h6">Why we sponsored The Matlock Raft Event</Typography>
                                  <Typography variant="body1">{sponsor.testimonial}</Typography>
                                </div>
              }
            </div>
          </Grid2>
        </Grid2>
        <div className="flex flex-row justify-center mt-16">
          <Button href="/sponsors">View all sponsors</Button>
        </div>
      </Section>

      <Waves bottomColor={secondaryColor.main} topColor={secondaryColor.main} variant={2} />

      <Footer />
    </main>
  );
};

const SingleSponsorPage = ({ sponsor }: SingleSponsorPageProps) => (
  <PageShell>
    <Content sponsor={sponsor} />
  </PageShell>
);

export default SingleSponsorPage;
