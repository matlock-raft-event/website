import Footer from "~/components/Footer";
import PageShell from "~/components/PageShell";
import Waves from "~/components/Waves";
import ContactUsSection from "~/sections/ContactUsSection";
import InnerHeroSection from "~/sections/InnerHeroSection";
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
