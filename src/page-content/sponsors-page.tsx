import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import type { SponsorTestimonialsQueryResult, SponsorsQueryResult } from "~/lib/sanity.types";
import SponsorWordsSection from "~/sections/sponsor-words-section";
import SponsorsSection from "~/sections/sponsors-section";
import WhySponsorSection from "~/sections/why-sponsor-section";

type Props = {
  sponsors: SponsorsQueryResult;
  testimonials: SponsorTestimonialsQueryResult;
};

/* Pitch, proof, gratitude: the page opens by selling sponsorship, backs it
   with what current sponsors say, and closes with the thank-you logo wall
   sitting right above the footer. */
const Content = ({ sponsors, testimonials }: Props) => (
  <main id="main" tabIndex={-1}>
    <PageHeader backLink={{ href: "/get-involved", label: "Get involved" }} background="wallpaper" color="sun" eyebrow="The backers of Boxing Day" title="Our sponsors" />
    <WhySponsorSection />
    <SponsorWordsSection testimonials={testimonials} />
    <SponsorsSection sponsors={sponsors} />
    <Footer waveTopColor="var(--color-sun)" sponsorStrip={false} />
  </main>
);

const SponsorsPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default SponsorsPage;
