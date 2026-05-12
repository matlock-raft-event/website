import Footer from "~/components/Footer";
import PageShell from "~/components/PageShell";
import Waves from "~/components/Waves";
import InnerHeroSection from "~/sections/InnerHeroSection";
import UpdatesSection from "~/sections/UpdatesSection";
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
