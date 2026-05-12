import Footer from "~/components/Footer";
import PageShell from "~/components/PageShell";
import Waves from "~/components/Waves";
import AboutSection from "~/sections/AboutSection";
import InnerHeroSection from "~/sections/InnerHeroSection";
import RnliSection from "~/sections/RnliSection";

const Content = () => (
  <main>
    <InnerHeroSection />
    <AboutSection />
    <Waves bottomColor="var(--color-mint)" topColor="var(--color-cream)" variant={2} />
    <RnliSection />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-mint)" variant={4} />
    <Footer />
  </main>
);

const AboutPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default AboutPage;
