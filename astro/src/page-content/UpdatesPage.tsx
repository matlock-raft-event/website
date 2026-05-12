import Footer from "~/components/Footer";
import PageShell from "~/components/PageShell";
import Waves from "~/components/Waves";
import InnerHeroSection from "~/sections/InnerHeroSection";
import UpdatesSection from "~/sections/UpdatesSection";

const Content = () => (
  <main>
    <InnerHeroSection />
    <UpdatesSection />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={2} />
    <Footer />
  </main>
);

const UpdatesPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default UpdatesPage;
