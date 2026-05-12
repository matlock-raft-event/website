import { useTheme } from "@mui/material/styles";

import Footer from "~/components/Footer";
import PageShell from "~/components/PageShell";
import Waves from "~/components/Waves";
import AboutSection from "~/sections/AboutSection";
import InnerHeroSection from "~/sections/InnerHeroSection";
import RnliSection from "~/sections/RnliSection";

const Content = () => {
  const theme = useTheme();
  return (
    <main>
      <InnerHeroSection />
      <AboutSection />
      <Waves bottomColor={theme.palette.primary.main} topColor={theme.palette.secondary.main} variant={2} />
      <RnliSection />
      <Waves bottomColor={theme.palette.secondary.main} topColor={theme.palette.primary.main} variant={4} />
      <Footer />
    </main>
  );
};

const AboutPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default AboutPage;
