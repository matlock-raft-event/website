import Footer from "~/components/Footer";
import PageShell from "~/components/PageShell";
import Waves from "~/components/Waves";
import GetInvolvedSection from "~/sections/GetInvolvedSection";
import HeroSection from "~/sections/HeroSection";
import PodiumSection from "~/sections/PodiumSection";
import SummarySection from "~/sections/SummarySection";
import UpdatesSection from "~/sections/UpdatesSection";

const Content = () => (
  <main>
    <HeroSection />
    <SummarySection />
    <Waves
      bottomColor="var(--color-green)"
      style={{ marginTop: -1 }}
      topColor="var(--color-cream)"
      variant={2}
    />
    <PodiumSection />
    <Waves
      bottomColor="var(--color-yellow)"
      style={{ marginTop: -1 }}
      topColor="var(--color-green)"
      variant={3}
    />
    <GetInvolvedSection />
    <Waves
      bottomColor="var(--color-mint)"
      topColor="var(--color-yellow)"
      variant={4}
    />
    <UpdatesSection preview />
    <Waves bottomColor="var(--color-cream)" style={{ marginTop: -1 }} />
    <Footer />
  </main>
);

const IndexPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default IndexPage;
