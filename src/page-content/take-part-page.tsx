import ClosingCta from "~/components/closing-cta";
import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import type { EventFacts } from "~/lib/event";
import TakePartSection from "~/sections/take-part-section";

type Props = { facts: EventFacts };

const Content = ({ facts }: Props) => (
  <main id="main" tabIndex={-1}>
    <PageHeader backLink={{ href: "/get-involved", label: "Get involved" }} background="stripes" color="sun" eyebrow="So you&apos;re brave enough?" title="Take part" />
    <TakePartSection facts={facts} />
    <ClosingCta
      primary={{ label: "Volunteer with us", href: "/volunteer" }}
      secondary={{ label: "Donate", href: "/donate" }}
      text="Not ready to brave the water this year? You can still be part of the day by volunteering or donating to the RNLI."
      title="Not entering a raft?"
      waveTopColor="var(--color-sun)"
    />
    <Footer waveTopColor="var(--color-pine-dark)" />
  </main>
);

const TakePartPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default TakePartPage;
