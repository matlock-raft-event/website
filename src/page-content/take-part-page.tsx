import ClosingCta from "~/components/closing-cta";
import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import InnerHeroSection from "~/sections/inner-hero-section";
import TakePartSection from "~/sections/take-part-section";

const Content = () => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection title="Take part" />
    <TakePartSection />
    <ClosingCta
      primary={{ label: "Volunteer with us", href: "/volunteer" }}
      secondary={{ label: "Donate", href: "/donate" }}
      text="Not ready to brave the water this year? You can still be part of the day by volunteering or donating to the RNLI."
      title="Not entering a raft?"
    />
    <Footer />
  </main>
);

const TakePartPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default TakePartPage;
