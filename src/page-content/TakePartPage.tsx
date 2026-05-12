import Footer from "~/components/Footer";
import PageShell from "~/components/PageShell";
import Waves from "~/components/Waves";
import InnerHeroSection from "~/sections/InnerHeroSection";
import TakePartSection from "~/sections/TakePartSection";

const Content = () => (
  <main>
    <InnerHeroSection />
    <TakePartSection />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={2} />
    <Footer />
  </main>
);

const TakePartPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default TakePartPage;
