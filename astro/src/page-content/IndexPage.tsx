import { useTheme } from "@mui/material/styles";

import Footer from "~/components/Footer";
import PageShell from "~/components/PageShell";
import Waves from "~/components/Waves";
import GetInvolvedSection from "~/sections/GetInvolvedSection";
import HeroSection from "~/sections/HeroSection";
import PodiumSection from "~/sections/PodiumSection";
import SummarySection from "~/sections/SummarySection";
import UpdatesSection from "~/sections/UpdatesSection";

const Content = () => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary;
  const secondaryColor = theme.palette.secondary;
  return (
    <main>
      <HeroSection />
      <SummarySection />
      <Waves
        bottomColor={theme.palette.green.main}
        style={{ marginTop: -1 }}
        topColor={secondaryColor.main}
        variant={2}
      />
      <PodiumSection />
      <Waves
        bottomColor={theme.palette.yellow.main}
        style={{ marginTop: -1 }}
        topColor={theme.palette.green.main}
        variant={3}
      />
      <GetInvolvedSection />
      <Waves
        bottomColor={primaryColor.main}
        topColor={theme.palette.yellow.main}
        variant={4}
      />
      <UpdatesSection preview />
      <Waves bottomColor={theme.palette.secondary.main} style={{ marginTop: -1 }} />
      <Footer />
    </main>
  );
};

const IndexPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default IndexPage;
