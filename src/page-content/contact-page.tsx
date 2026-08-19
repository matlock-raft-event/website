import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import ContactUsSection from "~/sections/contact-us-section";
import InnerHeroSection from "~/sections/inner-hero-section";
import type { ContactInstructionsQueryResult } from "~/lib/sanity.types";

type Props = { contactInstructions: ContactInstructionsQueryResult };

const Content = ({ contactInstructions }: Props) => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection title="Contact us" />
    <ContactUsSection contactInstructions={contactInstructions} />
    <Footer />
  </main>
);

const ContactPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default ContactPage;
