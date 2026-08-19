import BackLink from "~/components/back-link";
import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import Waves from "~/components/waves";
import FaqsSection from "~/sections/faqs-section";
import InnerHeroSection from "~/sections/inner-hero-section";
import type { FaqsQueryResult } from "~/lib/sanity.types";

type Props = { faqs: FaqsQueryResult };

const Content = ({ faqs }: Props) => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection title="Frequently asked questions" wavesColor="var(--color-cream)" />
    <BackLink href="/info" label="Event information" />
    <FaqsSection faqs={faqs} />
    <Waves bottomColor="var(--color-pine-dark)" topColor="var(--color-cream)" variant={3} />
    <Footer />
  </main>
);

const FaqsPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default FaqsPage;
