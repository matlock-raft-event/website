import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import Waves from "~/components/waves";
import ContactUsSection from "~/sections/contact-us-section";
import InnerHeroSection from "~/sections/inner-hero-section";
import type { ContactInstructionsQueryResult } from "~/lib/sanity.types";

type Props = { contactInstructions: ContactInstructionsQueryResult };

const Content = ({ contactInstructions }: Props) => (
  <main>
    <InnerHeroSection />
    <ContactUsSection contactInstructions={contactInstructions} />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={2} />
    <Footer />
  </main>
);

const ContactPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default ContactPage;
