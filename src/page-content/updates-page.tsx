import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import Waves from "~/components/waves";
import InnerHeroSection from "~/sections/inner-hero-section";
import UpdatesSection from "~/sections/updates-section";
import type { UpdatesQueryResult } from "~/lib/sanity.types";

type Props = { updates: UpdatesQueryResult };

const Content = ({ updates }: Props) => (
  <main>
    <InnerHeroSection />
    <UpdatesSection updates={updates} />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={2} />
    <Footer />
  </main>
);

const UpdatesPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default UpdatesPage;
