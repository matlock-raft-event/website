import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import UpdatesSection from "~/sections/updates-section";
import type { UpdatesQueryResult } from "~/lib/sanity.types";

type Props = { updates: UpdatesQueryResult };

const Content = ({ updates }: Props) => (
  <main id="main" tabIndex={-1}>
    <PageHeader color="cream" eyebrow="Keep ahead of the tide" title="Latest updates" />
    <UpdatesSection updates={updates} />
    <Footer waveTopColor="var(--color-cream)" />
  </main>
);

const UpdatesPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default UpdatesPage;
