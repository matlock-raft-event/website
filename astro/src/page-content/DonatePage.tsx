import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import PageShell from "~/components/PageShell";
import Section from "~/components/Section";
import { Button } from "~/components/ui/button";
import Waves from "~/components/Waves";
import InnerHeroSection from "~/sections/InnerHeroSection";

const Content = () => {
  const theme = useTheme();
  return (
    <main>
      <InnerHeroSection />
      <Section bgColor={theme.palette.secondary}>
        <Heading color={theme.palette.secondary} subtitle="Help us to raise more than ever" title="Donate" />
        <div className="mx-auto w-full max-w-4xl px-4">
          <div className="flex flex-col items-center gap-4">
            <Typography variant="body1">
                            Every year, our volunteer bucket collectors are positioned along the route ready to collect
                            donations from our generous spectators. Can&apos;t make it this year or just can&apos;t wait
                            until Boxing Day to support the RNLI? donations can be made online now via GoFundMe to
                            help us raise money for this amazing cause. Any and all donations are appreciated so
                            greatly. Even the smallest of amounts can help to make a difference. Thank you all for
                            your support.
            </Typography>
            <Button
              href="https://www.facebook.com/donate/1909444776644638/?fundraiser_source=external_url"
              rel="noreferrer"
              target="_blank"
            >
                            Donate Online Now
            </Button>
          </div>
        </div>
      </Section>
      <Waves bottomColor={theme.palette.secondary.main} topColor={theme.palette.secondary.main} variant={2} />
      <Footer />
    </main>
  );
};

const DonatePage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default DonatePage;
