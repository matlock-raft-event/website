import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import Waves from "~/components/waves";
import InnerHeroSection from "~/sections/inner-hero-section";
import TakePartSection from "~/sections/take-part-section";

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
