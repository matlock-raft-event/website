import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import Waves from "~/components/waves";
import BecomeSponsorSection from "~/sections/become-sponsor-section";
import InnerHeroSection from "~/sections/inner-hero-section";
import SponsorsSection from "~/sections/sponsors-section";
import type { SponsorsQueryResult } from "~/lib/sanity.types";

type Props = { sponsors: SponsorsQueryResult };

const Content = ({ sponsors }: Props) => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection title="Our sponsors" />
    <SponsorsSection sponsors={sponsors} />
    <Waves bottomColor="var(--color-river)" topColor="var(--color-cream)" variant={2} />
    <BecomeSponsorSection />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-river)" variant={3} />
    <Footer />
  </main>
);

const SponsorsPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default SponsorsPage;
