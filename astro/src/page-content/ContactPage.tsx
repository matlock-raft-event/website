import Footer from "~/components/Footer";
import PageShell from "~/components/PageShell";
import Waves from "~/components/Waves";
import ContactUsSection from "~/sections/ContactUsSection";
import InnerHeroSection from "~/sections/InnerHeroSection";

const Content = () => (
  <main>
    <InnerHeroSection />
    <ContactUsSection />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={2} />
    <Footer />
  </main>
);

const ContactPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default ContactPage;
