import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import InnerHeroSection from "~/sections/inner-hero-section";
import UpdatesSection from "~/sections/updates-section";
import type { UpdatesQueryResult } from "~/lib/sanity.types";

type Props = { updates: UpdatesQueryResult };

const Content = ({ updates }: Props) => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection title="Latest updates" />
    <UpdatesSection updates={updates} />
    <Footer />
  </main>
);

const UpdatesPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default UpdatesPage;
