import Footer from "~/components/Footer";
import PageShell from "~/components/PageShell";
import Waves from "~/components/Waves";
import BecomeSponsorSection from "~/sections/BecomeSponsorSection";
import InnerHeroSection from "~/sections/InnerHeroSection";
import SponsorsSection from "~/sections/SponsorsSection";

const Content = () => (
  <main>
    <InnerHeroSection />
    <SponsorsSection />
    <Waves bottomColor="var(--color-mint)" topColor="var(--color-cream)" variant={2} />
    <BecomeSponsorSection />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-mint)" variant={3} />
    <Footer />
  </main>
);

const SponsorsPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default SponsorsPage;
