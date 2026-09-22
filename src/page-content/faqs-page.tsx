import BackLink from "~/components/back-link";
import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import FaqsSection from "~/sections/faqs-section";
import type { FaqsQueryResult } from "~/lib/sanity.types";

type Props = { faqs: FaqsQueryResult };

const Content = ({ faqs }: Props) => (
  <main id="main" tabIndex={-1}>
    <PageHeader contentWidth="text" title="Frequently asked questions" />
    <BackLink href="/info" label="Event information" />
    <FaqsSection faqs={faqs} />
    <Footer />
  </main>
);

const FaqsPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default FaqsPage;
