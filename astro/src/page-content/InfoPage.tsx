import { useTheme } from "@mui/material/styles";

import Footer from "~/components/Footer";
import PageShell from "~/components/PageShell";
import Waves from "~/components/Waves";
import EventRouteSection from "~/sections/EventRouteSection";
import FaqsSection from "~/sections/FaqsSection";
import InnerHeroSection from "~/sections/InnerHeroSection";
import TimingsSection from "~/sections/TimingsSection";

const Content = () => {
  const theme = useTheme();
  const secondaryColor = theme.palette.secondary;
  const greenColor = theme.palette.green;

  return (
    <main>
      <InnerHeroSection wavesColor={theme.palette.green.main} />
      <EventRouteSection />
      <Waves bottomColor={secondaryColor.main} topColor={greenColor.main} variant={3} />
      <TimingsSection />
      <FaqsSection />
      <Waves bottomColor={secondaryColor.main} topColor={secondaryColor.main} variant={3} />
      <Footer />
    </main>
  );
};

const InfoPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default InfoPage;
