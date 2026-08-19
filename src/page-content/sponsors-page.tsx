import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import Waves from "~/components/waves";
import type { SponsorsQueryResult } from "~/lib/sanity.types";
import InnerHeroSection from "~/sections/inner-hero-section";
import SponsorsSection from "~/sections/sponsors-section";
import WhySponsorSection from "~/sections/why-sponsor-section";

type Props = { sponsors: SponsorsQueryResult };

/* Pitch first, gratitude last: the page opens by selling sponsorship and
   closes with the thank-you logo wall sitting right above the footer. */
const Content = ({ sponsors }: Props) => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection title="Our sponsors" wavesColor="var(--color-river)" />
    <WhySponsorSection />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-river)" variant={2} />
    <SponsorsSection sponsors={sponsors} />
    <Footer sponsorStrip={false} />
  </main>
);

const SponsorsPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default SponsorsPage;
