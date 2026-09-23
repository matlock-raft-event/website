import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import ContactUsSection from "~/sections/contact-us-section";
import type { ContactInstructionsQueryResult } from "~/lib/sanity.types";

type Props = { contactInstructions: ContactInstructionsQueryResult };

const Content = ({ contactInstructions }: Props) => (
  <main id="main" tabIndex={-1}>
    <PageHeader color="cream" eyebrow="Need to get in touch?" title="Contact us" />
    <ContactUsSection contactInstructions={contactInstructions} />
    <Footer waveTopColor="var(--color-cream)" />
  </main>
);

const ContactPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default ContactPage;
