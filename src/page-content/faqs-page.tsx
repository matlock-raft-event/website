import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import FaqsSection from "~/sections/faqs-section";
import type { FaqsQueryResult } from "~/lib/sanity.types";

type Props = { faqs: FaqsQueryResult };

const Content = ({ faqs }: Props) => (
  <main id="main" tabIndex={-1}>
    <PageHeader backLink={{ href: "/info", label: "Event information" }} eyebrow="You asked, we answered!" title="Frequently asked questions" />
    <FaqsSection faqs={faqs} />
    <Footer waveTopColor="var(--color-river)" />
  </main>
);

const FaqsPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default FaqsPage;
